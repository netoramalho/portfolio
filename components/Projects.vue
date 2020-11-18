<template>
  <div class="section content projects">
    <div class="headline" data-aos="zoom-out-up" data-aos-delay="300">
      Projects
    </div>
    <div class="list">
      <Project
        cover="conecta.png"
        name="Conecta"
        description="A leads integration plataform focused on the real state field."
        front="Vue.js, Vuetify, Cypress"
        back="PHP/Laravel, MySQL"
      />
      <Project
        reverse
        cover="gsp.png"
        name="GetSetPro"
        description="A responsive PWA that servers the Eye Doctors field with many features, such as letting they update their website content."
        front="Angular, Material"
        back="PHP/Laravel, PostgreSQL"
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
