<template>
  <div class="project" :class="{'reverse': reverse}" data-aos="zoom-out-up" data-aos-delay="450">
    <div class="preview">
      <img :src="require(`~/assets/projects/${cover}`)">
    </div>
    <div class="description">
      <div class="wrap">
        <div class="headline2">
          {{ name }}
        </div>
        <div class="subtitle">
          {{ description }}
        </div>
        <div v-if="front" class="stack">
          <div class="category">
            FRONT-END
          </div>
          <div class="tech">
            {{ front }}
          </div>
        </div>
        <div v-if="back" class="stack">
          <div class="category">
            BACK-END
          </div>
          <div class="tech">
            {{ back }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
}

.preview {
  background: #6353A5;
  width: 65%;
  min-height: 40vw;
  border-radius: 10px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  z-index: 1000;

  img {
    max-height: 85%;
    max-width: 75%;
  }

  &:hover {
    transform: scale(0.95);
  }
}

.description {
  width: 40%;
  margin: 0 -5%;

  display: flex;
  align-items: center;
  text-align: left;

  z-index: 2000;

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

@media screen and (max-width: 850px){
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
</style>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    cover: {
      type: String,
      default: 'Teste'
    },
    name: {
      type: String,
      default: 'Teste'
    },
    description: {
      type: String,
      default: 'Teste'
    },
    front: {
      type: String,
      default: 'Teste'
    },
    back: {
      type: String,
      default: 'Teste'
    }
  }
}
</script>
