<template>
  <div class="project" :class="{'reverse': reverse}" data-aos="zoom-out-up" data-aos-delay="450">
    <Preview :images="images" />
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
  padding-bottom: 5vw;

  &.reverse {
    flex-direction: row-reverse;

    .description {
      display: flex;
      flex-direction: row-reverse;
    }
  }
}

// .preview {
//   background: rgba(var(--secondary), 1);
//   width: 65%;
//   max-height: 40vw;
//   border-radius: 10px;

//   display: flex;
//   align-items: flex-end;
//   justify-content: center;

//   transition: all 0.2s ease-in-out;

//   z-index: 1000;

//   img {
//     max-height: 90%;
//     max-width: 75%;
//   }
// }

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
    color: rgba(var(--text), 1);
    margin-top: 40px;

    .category {
      font-weight: 500;
      font-size: 14px;
    }

    .tech {
      font-size: clamp(0.938rem, 1.250vw, 1.25rem);
      letter-spacing: 0.11em;
      margin-top: 5px;
    }
  }
}

@media screen and (max-width: 850px){
  // .preview {
  //   width: 100%;
  //   max-height: 60vh;
  //   height: auto;
  // }
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
    // eslint-disable-next-line vue/require-default-prop
    images: {
      type: Array
    },
    name: {
      type: String,
      default: 'Teste'
    },
    description: {
      type: String,
      default: 'Teste'
    },
    // eslint-disable-next-line vue/require-default-prop
    front: String,
    // eslint-disable-next-line vue/require-default-prop
    back: String
  }
}
</script>
