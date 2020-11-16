<template>
  <div>
    <header data-aos="fade-in" data-aos-delay="300">
      <div class="wrap" data-aos="zoom-in">
        <div class="greeting">
          Hey! I am
        </div>
        <div class="headline1">
          Neto Ramalho
        </div>
        <div class="about">
          a self-taught developer based in Curitiba, Brazil
        </div>
      </div>
    </header>
    <div class="projects" data-aos="zoom-out-up">
      <div class="headline1">
        Projects
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
header {
  height: min(88vw, 100vh);
  background-image: url('~@/assets/cover.jpg');
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  align-items: flex-start;
}

.wrap {
  margin: 0 8vw;
  margin-top: 40vh;
}

.greeting {
  font-size: clamp(0.875rem, 1.111vw, 1.125rem);
  color: #4E8BFE;
  font-weight: 400;
}

.headline1 {
  font-size: clamp(2rem, 5.556vw, 7.5rem);
  color: #FFFFFF;
  font-weight: 700;
}

.about {
  font-size: clamp(0.8rem, 1.3vw, 1.25rem);
  font-weight: 400;
  color: #FFFFFF;
}

.projects {
  height: 800px;color: white;margin: 0 8vw; margin-top: 50px;text-align:center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
