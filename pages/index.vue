<template>
  <div>
    <header data-aos="fade-in" data-aos-delay="300">
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
        <div class="wrap-btn" data-aos="zoom-out-up" data-aos-delay="1000">
          <button>Get In Touch</button>
        </div>
      </div>
    </header>
    <div class="section content projects">
      <div class="headline" data-aos="zoom-out-up" data-aos-delay="300">
        Projects
      </div>
      <div class="list">
        <div class="project" data-aos="zoom-out-up" data-aos-delay="450">
          <div class="preview">
            <img src="~@/assets/projects/conecta.png" alt="ConectaLead Screen shots">
          </div>
          <div class="description">
            <div class="wrap">
              <div class="headline2">
                ConectaLead
              </div>
              <div class="subtitle">
                A leads integration plataform focused on the real state field.
              </div>
              <div class="stack">
                <div class="category">
                  FRONT-END
                </div>
                <div class="tech">
                  Vue.js, Vuetify, Cypress
                </div>
              </div>
              <div class="stack">
                <div class="category">
                  BACK-END
                </div>
                <div class="tech">
                  PHP/Laravel, MySQL
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="project reverse" data-aos="zoom-out-up" data-aos-delay="450">
          <div class="preview">
            <img src="~@/assets/projects/gsp.png" alt="GetSetPro Screen shots">
          </div>
          <div class="description">
            <div class="wrap">
              <div class="headline2">
                GetSetPro
              </div>
              <div class="subtitle">
                A responsive PWA that servers the Eye Doctors field with many features, such as letting they update their website content.
              </div>
              <div class="stack">
                <div class="category">
                  FRONT-END
                </div>
                <div class="tech">
                  Angular, Material
                </div>
              </div>
              <div class="stack">
                <div class="category">
                  BACK-END
                </div>
                <div class="tech">
                  PHP/Laravel, PostgreSQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section content contact" data-aos="zoom-out-up">
      <div class="headline">
        Get in Touch
      </div>
      <div class="subtitle">
        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </div>
      <div class="wrap-btn">
        <a href="mailto:netto.ramalho@gmail.com">
          <button>Say Hello</button>
        </a>
      </div>
    </div>
    <footer class="content">
      <div class="built-by">
        Designed & Built by Neto Ramalho
      </div>
      <div class="stack">
        Using Vue.JS and Nuxt.JS
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

.content {
  padding: 0 8vw;
  width: 100%;
}

header {
  min-height: #{"min(100vw, 100vh)"};

  display: flex;
  align-items: center;

  background-image: url('~@/assets/cover.jpg');
  background-color: #000;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;

  @media screen and (max-width: 600px){
    align-items: flex-end;
    margin-bottom: 150px;
    background-position: 60%;

    .content {
      margin-bottom: -120px;
    }
  }
}

.greeting {
  font-size: clamp(0.875rem, 1.111vw, 1.125rem);
  color: #4E8BFE;
  font-weight: 400;
  padding-bottom: 3px;
}

.headline {
  font-size: clamp(2rem, 5.556vw, 6rem);
  color: #FFFFFF;
  font-weight: 700;
  margin-left: -0.3vw;

  @media screen and (max-width: 600px){
    margin-left: -0.15vw;
  }
}

.headline2 {
  font-size: clamp(1.875rem, 3.472vw, 3.75rem);
  color: #FFFFFF;
  font-weight: 700;
  margin-left: -0.3vw;

  @media screen and (max-width: 600px){
    margin-left: -0.15vw;
  }
}

.subtitle {
  font-size: clamp(0.9rem, 1.3vw, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 148.2%;
}

.about {
  margin-top: 5px;
  margin-bottom: 25px;
}

button {
  display: inline-block;
  border: #4E8BFE solid 1px;
  border-radius: 4px;
  text-decoration: none;
  padding: 9px 21px;
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

.section {
  text-align: center;
  padding-top: 5vw;
}

.contact {
  .subtitle {
    max-width: 540px;
    margin: 40px auto;
    line-height: 150%;
  }
}

footer {
  text-align: center;
  letter-spacing: 0.11em;
  margin: 50px 0;

  .built-by {
    color: #FFFFFF;
    padding-bottom: 10px;;
  }

  .stack {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
}

.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5vw;

  .project {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding-bottom: 3vw;

    &.reverse {
      flex-direction: row-reverse;

      .description {
        display: flex;
        flex-direction: row-reverse;
      }
    }

    .preview {
      background: #6353A5;
      width: 65%;
      min-height: 40vw;

      display: flex;
      align-items: flex-end;
      justify-content: center;

      img {
        max-height: 85%;
        border-radius: 10px 10px 0 0;
        max-width: 75%;
      }
    }

    .description {
      width: 40%;
      margin: 0 -5%;

      display: flex;
      align-items: center;
      text-align: left;

      .wrap {
        max-width: 500px;
      }

      .stack {
        color: #FFF;
        margin-top: 40px;

        .category {
          font-weight: 500;
          font-size: 14px;
        }

        .tech {
          font-size: clamp(0.938rem, 1.250vw, 1.25rem);
          color: #FFFFFF;
          letter-spacing: 0.11em;
          margin-top: 5px;
        }
      }
    }

    @media screen and (max-width: 900px){
      .preview {
        width: 100%;
      }
      .description {
        margin: 0;
        width: 100%;
        margin: 20px 0;

        .wrap {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
