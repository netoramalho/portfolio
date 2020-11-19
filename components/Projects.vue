<template>
  <div class="section content projects">
    <div class="headline" data-aos="zoom-out-up" data-aos-delay="300">
      Projects
    </div>
    <div class="list">
      <Project
        cover="conecta.png"
        name="Conecta"
        description="A leads integration platform focused on the real state field."
        front="Vue.js, Vuetify, Cypress"
        back="PHP/Laravel, MySQL"
      />
      <Project
        reverse
        cover="gsp.png"
        name="GetSetPro"
        description="A PWA-Responsive that serves the Eye Doctors field, with features such as a website content manager."
        front="Angular, Material"
        back="PHP/Laravel, PostgreSQL"
      />
      <Project
        cover="eye-doctor-finder.png"
        name="Doctor Finder"
        description="An Eye Doctor Finder interface for Think About Your Eyes."
        front="Vue.js, Leaflet"
      />
      <Project
        reverse
        cover="batevolta.png"
        name="BateVoltaApp"
        description="A social platform for planning and scheduling day trips focused on sports practice. Shipped for iOS and Android."
        front="TitaniumJS"
      />
      <Project
        cover="imoobiliario.png"
        name="Imoobiliario"
        description="A real state portal avaliable on web, and native mobile app."
        front="AngularJS, Material, TitaniumJS"
        back="NodeJS, Express"
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
