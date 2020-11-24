<template>
  <div class="section content projects">
    <div class="headline" data-aos="zoom-out-up" data-aos-delay="300">
      Projects
    </div>
    <div class="list">
      <Project
        v-for="(project, index) in projects"
        :key="project.slug"
        :reverse="index % 2 === 1"
        :images="project.images"
        :name="project.name"
        :description="project.description"
        :front="project.front"
        :back="project.back"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5vw;
}
</style>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
