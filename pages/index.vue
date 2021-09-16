<template>
  <div class="wrap">
    <ThemeSwitcher />
    <Cover />
    <delay-hydration>
      <Projects :projects="projects" />
      <Contact />
      <Footer />
    </delay-hydration>
  </div>
</template>

<style lang="scss">
.wrap {
  overflow: hidden;
}
</style>

<script>
export default {
  async asyncData ({ $content }) {
    const projects = await $content('projects').sortBy('date', 'desc').fetch()
    return { projects }
  }
}
</script>
