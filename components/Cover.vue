<template>
  <header>
    <div class="content">
      <div class="greeting">
        Hey! I am
      </div>
      <div class="headline">
        Neto Ramalho
      </div>
      <div class="subtitle about">
        a self-taught developer based in Curitiba, Brazil
      </div>
      <div class="wrap-btn">
        <button @click="scrollToContact">
          Get In Touch
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  min-height: 90vh;
  min-height: #{"min(100vw, 100vh)"};

  display: flex;
  align-items: center;

  background-color: var(--background);
  background-image: var(--cover-image);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;

  .content {
    transition: margin-bottom 0.8s ease-in-out;
    margin-bottom: var(--cover-margin);
  }

  @media screen and (max-width: 500px){
    align-items: flex-end;
    margin-bottom: 150px;
    background-position: 60%;

    .content {
      margin-bottom: -120px;
    }
  }
}

.greeting {
  font-size: 1rem;
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

<script>
export default {
  methods: {
    scrollToContact () {
      document.getElementById('contact').scrollIntoView(true)
    }
  }
}
</script>
