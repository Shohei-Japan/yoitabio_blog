<template>
  <div ref="rootNuxt">
    <top-header
      class="top_header"
      ref="TopHeader"
      :scroll-y="scrollY"
      :scroll-top="pageYOffset"
    />
    <nuxt
      class="root_nuxt"
      :style="getClasses()"
    />
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader'

export default {
  name: 'top',
  data: () => ({
    scrollY: 0,
    offsetHeight: 0,
    pageYOffset: 0,
    rootNuxtPaddingTop: 40
  }),
  components: {
    TopHeader
  },
  mounted() {
    this.offsetHeight = this.$refs.TopHeader.$el.offsetHeight
    document.addEventListener('scroll', () => {
      this.scrollY = window.scrollY,
      this.pageYOffset = window.pageYOffset
    })
  },
  methods: {
    getClasses() {
      const styles = {
        'padding-top': `${this.offsetHeight + this.rootNuxtPaddingTop}px`
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
.top_header {
  position: fixed;
}
</style>