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
        <a href="#contact">
          Get In Touch
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@keyframes scaleUp {
  from {transform: scale(1.2);opacity: 0;}
  to {transform: scale(1);opacity: 1;}
}
@keyframes slideUp {
  from {transform: translateY(20%);opacity: 0;}
  to {transform: translateY(0);opacity: 1;}
}

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

  transform: scale(1.2);
  opacity: 0;
  animation: scaleUp 1s;
  animation-fill-mode: forwards;

  .content {
    transition: margin-bottom 0.8s ease-in-out;
    margin-bottom: var(--cover-margin);
    transform: translateY(20%);
    opacity: 0;
    animation: slideUp 1s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
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

a {
  display: inline-block;
  border: rgba(var(--primary), 1) solid 1px;
  border-radius: 4px;
  text-decoration: none;
  padding: 9px 21px;
  background: transparent;
  cursor: pointer;
  text-decoration: none;

  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: rgba(var(--primary), 1);

  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(var(--primary), 0.1);
  }
}
</style>

<script>
export default {
}
</script>
