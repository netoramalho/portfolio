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
        <button>
          Get In Touch
        </button>
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
  min-height: min(100vw, 100vh);

  display: flex;
  align-items: center;

  background-image: url('~@/assets/cover.jpg');
  background-color: #000;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
}

.wrap {
  margin: 0 8vw;
}

@media screen and (max-width: 600px){
  header {
    align-items: flex-end;
    margin-bottom: 150px;
    background-position: 60%;
  }
  .wrap {
    margin-bottom: -100px;
  }
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
  color: rgb(255 255 255 / 80%);
  margin-top: 5px;
  margin-bottom: 20px;
}

button {
  display: inline-block;
  border: #4E8BFE solid 1px;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #4E8BFE;
}

button:hover {
  background: #4E8BFE;
  color: white;
}

.projects {
  height: 800px;color: white;margin: 0 8vw; margin-top: 50px;text-align:center;
}
</style>
