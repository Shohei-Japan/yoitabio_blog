<template>
  <div>
    <top-header />
    <nuxt />
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader'

export default {
  name: 'top',
  components: {
    TopHeader
  }
}
</script>