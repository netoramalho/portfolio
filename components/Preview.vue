<template>
  <div v-observe-visibility="{callback: visibilityChanged,throttle: 300,intersection:{threshold:0.9}}" class="preview" :class="{playing: timer}">
    <div v-show="!isSingleImage" class="indicator">
      <div v-for="(item, index) in images" :key="index" class="bar" :class="{active: current > index, current: timer && current === index}">
        <div class="inProgress" />
      </div>
    </div>
    <div class="images">
      <img v-for="(image, index) in viewportImages" v-show="index === 0" :key="image" :src="require(`~/assets/projects/${image}`)" draggable="false">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  background: rgba(var(--secondary), 0.9);
  width: 65%;
  height: 38vw;
  border-radius: 10px;
  user-select: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  transition: all 0.2s ease-in-out;

  z-index: 1000;

  overflow: hidden;

  &.playing {
    background: rgba(var(--secondary), 1);
  }

  .images {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    max-height: inherit;
    height: 90%;

    img {
      max-height: 90%;
      max-width: 75%;
      user-select: none;
    }
  }
}

.indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  max-width: 80%;
  margin: auto;

  .bar {
    flex: 1;
    border-radius: 3px;
    height: 4px;
    max-width: 100px;
    margin: clamp(3px, 1vw, 8px);
    background-color: rgba(var(--text), 0.3);
    overflow: hidden;

    .inProgress {
      width: 0;
      height: 100%;
      background-color: rgba(var(--text), 1);
    }

    &.active{
      background-color: rgba(var(--text), 1);
    }

    &.current .inProgress{
      transition: width 2s ease-in-out;
      width: 100%;
    }
  }
}

@media screen and (max-width: 850px){
  .preview {
    width: 100vw;
    border-radius: 0;
    margin: 0 -8vw;
    height: 50vh;

    .images {
      align-items: center;

      img {
        max-width: 85%;
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    images: {
      type: Array
    }
  },
  data () {
    return {
      current: 0,
      viewportImages: [],
      timer: false
    }
  },
  computed: {
    isSingleImage () {
      return this.images.length <= 1
    },
    isTheLastImage () {
      return this.current + 1 >= this.images.length
    },
    nextImage () {
      return this.isTheLastImage ? 0 : this.current + 1
    }
  },
  created () {
    this.viewportImages = this.images.slice(0, 2)
  },
  methods: {
    play () {
      this.stop()
      this.timer = setInterval(this.next, 2000)
    },
    stop () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = false
      }
    },
    next () {
      if (this.isSingleImage) {
        return false
      }

      this.viewportImages.shift()

      this.current = this.nextImage

      this.viewportImages.push(this.images[this.nextImage])
    },
    visibilityChanged (isVisible) {
      isVisible ? this.play() : this.stop()
    }
  }
}
</script>
