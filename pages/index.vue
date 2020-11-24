<template>
  <div>
    <ThemeSwitcher />
    <Cover />
    <Projects :projects="projects" />
    <Contact />
    <Footer />
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  async asyncData ({ $content }) {
    const projects = await $content('projects').sortBy('date', 'desc').fetch()
    return { projects }
  }
}
</script>
