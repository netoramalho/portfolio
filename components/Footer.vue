<template>
  <footer class="content">
    <div class="built-by">
      Designed & Built by Neto Ramalho
    </div>
    <div class="stack">
      Using Vue.JS and Nuxt.JS
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  text-align: center;
  letter-spacing: 0.11em;
  margin: 50px 0;

  .built-by {
    color: #FFFFFF;
    padding-bottom: 10px;
    font-size: clamp(13px, 4vw, 16px);
  }

  .stack {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
