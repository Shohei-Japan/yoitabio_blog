<template>
  <header
    class="top_header__container"
    :style="getContainerStyles"
    ref="TopHeader"
  >
    <div class="top_header__title__wrapper">
      <h1
        class="top_header__title"
        :style="getTitleStyles"
      >Blog</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    scrollY: {
      type: Number,
      default: null
    },
    scrollTop: {
      type: Number,
      default: null
    }
  },
  computed: {
    getContainerStyles() {
      const scrolledY = (this.scrollTop / 70).toFixed(2) - 20
      const innerWidth = parseInt(window.innerWidth / 700)
      const styles = {
        height: `${400 - this.scrollY}px`,
        backgroundPositionY: -6 + (scrolledY * innerWidth) + 'rem',
      }
      if (this.scrollY >= 350) {
        styles.backgroundPositionY = 0
        styles.height = '7rem'
      }
      return styles
    },
    getTitleStyles() {
      if (this.scrollY < 350) {
        return
      }
      const styles = {
        fontSize: '2rem'
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
.top_header__container {
  background-color: $bg-gray-color;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  min-height: 7rem;
  width: 100%;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  padding: 1rem 4rem;
  background: url("../static/img/ruben-bagues-vPQfc4niDh0-unsplash.jpg") no-repeat center center;
  background-size: 220%;
  
  @media only screen and (max-width: $sp-width) {
    padding: 1rem 2rem;
  }

  .top_header__title__wrapper {
    max-width: 60rem;
    width: 100%;
  }

  .top_header__title {
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: 0.1rem;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    transition-delay: 100ms;
  }
}
</style>