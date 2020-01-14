<template>
  <div>
    {{ post }}
  </div>
</template>

<script>
import gql from 'graphql-tag'
import getPost from '~/apollo/queries/post.gql'

export default {
  data: () => ({
    post: {}
  }),
  layout: 'post',
  apollo: {
    $loadingKey: 'loading',
    post: {
      query: getPost,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>