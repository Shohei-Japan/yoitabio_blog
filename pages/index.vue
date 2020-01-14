<template>
  <div class="container">
    <!-- posts area -->
    <div class="posts__container">
      <template v-for="post in posts">
        <post-card
          :key="post.id"
          :title="post.title"
          :content="post.content"
          :created-at="getDate(post.createdAt)"
          :thumbnail-url="getUrl(post)"
          @click="goToPost(post.id)"
        />
      </template>
    </div>
    <aside-menu class="aside_menu" />
  </div>
</template>

<script>
import getPosts from '~/apollo/queries/posts.gql'
import PostCard from '~/components/PostCard'
import AsideMenu from '~/components/AsideMenu'
import convertDateMixins from '~/mixins/convertDateMixins'

export default {
  data: () => ({
    posts: {}
  }),
  components: {
    PostCard,
    AsideMenu
  },
  layout: 'top',
  mixins: [convertDateMixins],
  apollo: {
    posts: {
      prefetch: true,
      query: getPosts
    }
  },
  methods: {
    getUrl(post) {
      if (post.thumbnail?.url) {
        return post.thumbnail.url
      }
      return ''
    },
    goToPost(path) {
      this.$router.push(`/${path}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media only screen and (max-width: $sp-width) {
    padding: 0 1.5rem;
  }
}

.posts__container {
  margin-right: 3rem;
  max-width: 70rem;
  width: 70rem;

  @media only screen and (max-width: $sp-width) {
    margin-right: 0;
  }

  /deep/ .post_card {
    margin-bottom: 4rem;
  }
}

.aside_menu {
  width: 20rem;
  background-color: azure;

  @media only screen and (max-width: $sp-width) {
    display: none;
  }
}
</style>
