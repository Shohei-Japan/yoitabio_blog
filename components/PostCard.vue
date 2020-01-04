<template>
  <article class="post_card">
    <p class="post_card--title">{{ title }}</p>
    <img
      :src="thumbnailUrl"
      class="post_card--thumbnail"
      alt=""
    >
    <p class="post_card--created_at">{{ createdAt }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
.post_card {
  height: 24rem;
  box-shadow: 0.3rem 0.2rem 0.9rem 0 rgba(0,0,0,0.2);

  &--title {
    font-size: 1.6rem;
  }

  &--created_at {
    font-size: 1.2rem;
  }

  &--thumbnail {
    width: 100%;
  }
}  
</style>