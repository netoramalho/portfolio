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

  @media screen and (min-width: 851px){
    &.reverse {
      flex-direction: row-reverse;

      .description {
        display: flex;
        flex-direction: row-reverse;
      }
    }
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
    images: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    front: String,
    // eslint-disable-next-line vue/require-default-prop
    back: String
  }
}
</script>
