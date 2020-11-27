<template>
  <div class="switch" @click="toggle()">
    <template v-if="theme === 'dark'">
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      ><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      <div class="switch-to">
        Light mode
      </div>
    </template>
    <template v-else>
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      ><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      <div class="switch-to">
        Dark mode
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  display: flex;
  align-items: center;
  position: fixed;
  right: 30px;
  top: 30px;
  border-radius: 8px;
  z-index: 3000;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  background: rgba(37, 48, 50, 0.7);
  max-width: 150px;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  color: white;
  user-select: none;

  &:hover {
    background: rgba(37, 48, 50, 0.9);
  }
}

svg {
  width: 20%;
}

.switch-to {
  width: 80%;
}

@media screen and (max-width: 850px){
  svg {
    width: 20px;
    height: 20px;
  }

  .switch-to {
    display: none;
  }
}
</style>

<script>
export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  watch: {
    theme () {
      this.applyTheme()
    }
  },
  methods: {
    applyTheme () {
      document.documentElement.setAttribute('data-theme', this.theme)
    },
    toggle () {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
