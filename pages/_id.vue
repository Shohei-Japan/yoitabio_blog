<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ getDate(post.createdAt) }}</p>

    <p
      class="content"
      v-html="getContent(post.content)"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import getPost from '~/apollo/queries/post.gql'
import convertDateMixins from '~/mixins/convertDateMixins'
import '~/vendors/google-code-prettify/prettify.js'

const prettyPrint = require('code-prettify')

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
  mounted() {
    this.$nextTick(() => {
      PR.prettyPrint()
    })
  },
  methods: {
    getContent(text) {
      if (!text) {
        return ''
      }
      console.log(this.$md.render(text))
      return this.$md.render(text)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/vendors/google-code-prettify/prettify.css';
@import '@/vendors/google-code-prettify/skins/sunburst.css';

// .content /deep/ {
//   pre {
//     background-color: $bg-code-color;
//   }
//   pre > code {
//     font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
//     line-height: 1.4;
//   }
// }
</style>