<template>
  <article class="post__container">
    <p class="post--title">{{ title }}</p>
    <p class="post--created_at">{{ createdAt }}</p>
    <div class="post--card">
      <div
        class="post--card_thumbnail"
        :style="getStyles"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    thumbnailUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    getStyles() {
      return {
        backgroundImage: `url("${this.thumbnailUrl}")`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post__container {
  margin-bottom: 4rem;
  color: $text-default-gray;

  .post {
    &--title {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    &--created_at {
      font-size: 1.2rem;
      color: $text-light-gray;
      margin-bottom: 1rem;
    }

    &--card {
      height: 24rem;
      box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(0,0,0,0.1);

      position: relative;
      width: 100%;
      overflow: hidden;

      &_thumbnail {
        position: absolute;
        background-size: cover;
        height: 100%;
        width: 100%;
        transition: all 0.5s ease-out;
        transform: matrix3d(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        );
        will-change: transform;

        &:hover {
          transform: matrix3d(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 0.9
          );
          filter: grayscale(100%);
        }
      }
    }
  }
}  
</style>