<template>
  <div class="container">
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
</template>

<script>
import posts from '~/apollo/queries/posts'
import PostCard from '~/components/PostCard'

export default {
  data: () => ({
    posts: {}
  }),
  components: {
    PostCard
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
      console.log(new Date(postDate))
      const date = new Date(postDate.replace(/-/g, '/'))
      console.log(date)
      return (
        `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
      )
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
  padding: 2rem 3rem;
}

</style>
