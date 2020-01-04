<template>
  <div class="top_header__container">
    <h1 class="top_header__title">Yoitabio Blog</h1>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss" scoped>
.top_header__container {
  background-color: $bg-gray-color;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23rem;
  width: 100%;

  .top_header__title {
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: 0.1rem;
  }
}
</style>