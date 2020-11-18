<template>
  <div class="switch">
    <div :class="{'active': theme == 'light'}" @click="theme = 'light'">
      Light
    </div>
    <div :class="{'active': theme == 'dark'}" @click="theme = 'dark'">
      Dark
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  position: fixed;
  right: 30px;
  top: 30px;
  border-radius: 8px;
  z-index: 3000;
  display: flex;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  background: rgba(37, 48, 50, 0.7);

  div {
    width: 50%;
    padding: 10px 12px;
    cursor: pointer;
    font-size: 14px;
    transition: all 1s ease-in-out;
    border-bottom: 2px solid transparent;
    color: white;

    &:hover {
      background-color: rgba(255,255,255,0.1);
    }

    &.active {
      border-bottom: 2px solid white;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      theme: ''
    }
  },
  watch: {
    theme () {
      this.applyTheme()
    }
  },
  mounted () {
    window.onNuxtReady(() => {
      this.theme = this.getSystemPreferedTheme()
    })
  },
  methods: {
    getSystemPreferedTheme: () => window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark',
    applyTheme () {
      document.documentElement.setAttribute('data-theme', this.theme)
    }
  }
}
</script>
