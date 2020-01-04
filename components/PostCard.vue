<template>
  <div class="post_card">
    <p class="post_card--title">{{ title }}</p>
    <img
      :src="thumbnailUrl"
      alt=""
    >
    <p class="post_card--created_at">{{ new Date(createdAt) }}</p>
  </div>
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
  height: 15rem;
  width: 30rem;
  margin-bottom: 4rem;
  box-shadow: 0.3rem 0.2rem 0.9rem 0 rgba(0,0,0,0.2);

  &--title {
    font-size: 1.6rem;
  }

  &--created_at {
    font-size: 1.2rem;
  }
}  
</style>