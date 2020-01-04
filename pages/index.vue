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
        />
      </template>
    </div>
    <aside-menu class="aside_menu" />
  </div>
</template>

<script>
import posts from '~/apollo/queries/posts'
import PostCard from '~/components/PostCard'
import AsideMenu from '~/components/AsideMenu'

export default {
  data: () => ({
    posts: {}
  }),
  components: {
    PostCard,
    AsideMenu
  },
  layout: 'top',
  apollo: {
    posts: {
      query: posts
    }
  },
  methods: {
    getUrl(post) {
      if (post.thumbnail?.url) {
        return post.thumbnail.url
      }
      return ''
    },
    getDate(postDate) {
      const date = new Date(postDate)
      const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
      console.log(formatedDate)
      return formatedDate
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
  text-align: center;
  padding: 5rem 3rem 0;

@media only screen and (max-width: $sp-width) {
    padding: 5rem 1.5rem 0;
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
