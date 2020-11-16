<template>
  <div>
    <header data-aos="fade-in" data-aos-delay="300">
      <div class="wrap">
        <div class="greeting" data-aos="zoom-out-up" data-aos-delay="700">
          Hey! I am
        </div>
        <div class="headline1" data-aos="zoom-out-up" data-aos-delay="800">
          Neto Ramalho
        </div>
        <div class="about" data-aos="zoom-out-up" data-aos-delay="900">
          a self-taught developer based in Curitiba, Brazil
        </div>
        <div class="wrap-btn" data-aos="zoom-out-up" data-aos-delay="1000">
          <button>Get In Touch</button>
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

<style lang="scss">
header {
  min-height: #{"min(100vw, 100vh)"};

  display: flex;
  align-items: center;

  background-image: url('~@/assets/cover.jpg');
  background-color: #000;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;

  .wrap {
    margin: 0 8vw;
  }

  @media screen and (max-width: 600px){
    align-items: flex-end;
    margin-bottom: 150px;
    background-position: 60%;

    .wrap {
      margin-bottom: -100px;
    }
  }
}

.greeting {
  font-size: clamp(0.875rem, 1.111vw, 1.125rem);
  color: #4E8BFE;
  font-weight: 400;
  padding-bottom: 3px;
}

.headline1 {
  font-size: clamp(2rem, 5.556vw, 7.5rem);
  color: #FFFFFF;
  font-weight: 700;
  margin-left: -0.3vw;

  @media screen and (max-width: 600px){
    margin-left: -0.15vw;
  }
}

.about {
  font-size: clamp(0.8rem, 1.3vw, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
  margin-bottom: 25px;
}

button {
  display: inline-block;
  border: #4E8BFE solid 1px;
  border-radius: 4px;
  text-decoration: none;
  padding: 11px 25px;
  background: transparent;
  cursor: pointer;

  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #4E8BFE;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(78, 139, 254, 0.1);
  }
}

.projects {
  height: 800px;color: white;margin: 0 8vw; margin-top: 50px;text-align:center;
}
</style>
