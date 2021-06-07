<template>
  <div v-observe-visibility="{callback: visibilityChanged,throttle: 300,intersection:{threshold:0.9}}" class="preview" :class="{playing: timer}">
    <div v-show="!isSingleImage" class="indicator">
      <div v-for="(item, index) in images" :key="index" class="bar" :class="{active: current > index, current: timer && current === index}">
        <div class="inProgress" />
      </div>
    </div>
    <div class="images">
      <nuxt-img
        v-for="(image, index) in images"
        v-show="index === current"
        :key="index"
        :src="`/projects/${image.path}`"
        :width="image.width"
        :height="image.height"
        sizes="md:700px lg:1000px"
        :alt="image.alt"
        draggable="false"
        :loading="playing ? 'eager' : 'lazy'"
      />
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
      width: auto;
      height: auto;
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
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      current: 0,
      timer: false,
      playing: false
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
      this.playing = true
      this.timer = setInterval(this.next, 2000)
    },
    stop () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = false
      }
      this.playing = false
    },
    next () {
      if (this.isSingleImage) {
        return false
      }

      this.current = this.nextImage
    },
    visibilityChanged (isVisible) {
      isVisible ? this.play() : this.stop()
    }
  }
}
</script>
