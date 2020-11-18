<template>
  <header data-aos="fade-in" data-aos-delay="300">
    <div class="bg" />
    <div class="content">
      <div class="greeting" data-aos="zoom-out-up" data-aos-delay="700">
        Hey! I am
      </div>
      <div class="headline" data-aos="zoom-out-up" data-aos-delay="800">
        Neto Ramalho
      </div>
      <div class="subtitle about" data-aos="zoom-out-up" data-aos-delay="900">
        a self-taught developer based in Curitiba, Brazil
      </div>
      <!-- <div class="wrap-btn" data-aos="zoom-out-up" data-aos-delay="1000">
        <button>Get In Touch</button>
      </div> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  min-height: #{"min(100vw, 100vh)"};

  display: flex;
  align-items: center;

  .content {
    transition: margin-bottom 0.8s ease-in-out;
    margin-bottom: var(--cover-margin);
  }

  @media screen and (max-width: 600px){
    align-items: flex-end;
    margin-bottom: 150px;

    .content {
      margin-bottom: -120px;
    }
  }
}

.bg {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;

  background-color: var(--background);
  background-image: var(--cover-image);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;

  transition: background-image 1s linear, background-color 1s linear;

  @media screen and (max-width: 600px){
    background-position: 60%;
  }
}

.greeting {
  font-size: clamp(0.875rem, 1.111vw, 1.125rem);
  color: rgba(var(--primary), 1);
  font-weight: 400;
  padding-bottom: 3px;
}

.about {
  margin-top: 5px;
  margin-bottom: 25px;
}
</style>
