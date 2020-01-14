<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ getDate(post.createdAt) }}</p>

    <div
      class="content"
      v-html="getContent(post.content)"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import getPost from '~/apollo/queries/post.gql'
import convertDateMixins from '~/mixins/convertDateMixins'

export default {
  data: () => ({
    post: {}
  }),
  layout: 'post',
  mixins: [convertDateMixins],
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
  },
  methods: {
    getContent(text) {
      if (!text) {
        return ''
      }
      return this.$md.render(text)
    }
  }
}
</script>

<style lang="scss" scoped>
.content /deep/ {
  pre {
    background-color: $bg-code-color;
  }
  pre > code {
    font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
    line-height: 1.4;
  }
}
</style>