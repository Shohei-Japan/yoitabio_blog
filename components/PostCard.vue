<template>
  <article class="post__container">
    <p class="post--title">{{ title }}</p>
    <p class="post--created_at">{{ createdAt }}</p>
    <div class="post--card">
      <img
        :src="thumbnailUrl"
        class="post--thumbnail"
        alt=""
      >
    </div>
    <nuxt-link 
      to="/me"
      class="post--read"
    >
      READ FULL POST
    </nuxt-link>
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
    }

    &--thumbnail {
      width: 100%;
    }

    &--read {
      text-decoration: none;
      font-size: 1.2rem;
      color: $dark-gray-color;
      border: solid 0.1rem $dark-gray-color;
      display: inline-block;
      padding: 1rem 2rem;

      position: relative;
      text-align: center;
      text-decoration: none;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;

      &:after {
        content: "";
        position: absolute;
        height: 0%;
        left: 50%;
        top: 49.5%;
        width: 25%;
        z-index: -1;
        -webkit-transition: all 0.5s ease 0s;
        -moz-transition: all 0.5s ease 0s;
        -o-transition: all 0.5s ease 0s;
        transition: all 0.5s ease 0s;
      }

      &:hover {
        color: $white-color;
        border-color: $gray-color;
      }

      &:hover:after {
        height: 50%;
      }

      &:after {
        background: $gray-color;
          opacity: .5;
          -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
          -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
          -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
          transform: translateY(-50%) translateX(-50%) rotate(90deg);
      }

      &:hover:after {
        opacity: 1;
        height: 410% !important;
      }
    }
  }
}  
</style>