<template>
  <!-- https://unsplash.com/photos/vPQfc4niDh0 -->
  <header
    class="top_header__container"
    ref="TopHeader"
    :style="getContainerStyles"
  >
    <div
      class="top_header__title__wrapper"
      :style="getTitleWrapperStyles"
    >
      <h1
        class="top_header__title"
        :style="getTitleStyles"
      >Blog</h1>
      <nav>
        <ul class="top_header__nav">
          <li
            v-for="(list, index) in navLists"
            :key="index"
            class="top_header__nav--item"
          >
            <nuxt-link
              class="top_header__nav--item_link"
              to="/about"
            >
              {{ list }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
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
    navLists() {
      return ['ABOUT', 'TECH', 'TRAVEL', 'OTHERS']
    },
    scrolled350() {
      return this.scrollY >= 350
    },
    scrolled250() {
      return this.scrollY >= 250
    },
    getContainerStyles() {
      const scrolledY = (this.scrollTop / 70).toFixed(2) - 20
      const innerWidth = parseInt(window.innerWidth / 700)
      let styles = {
        height: `${400 - this.scrollY}px`,
        backgroundPositionY: -6 + (scrolledY * innerWidth) + 'rem',
      }
      if (this.scrolled350) {
        styles = {
          ...styles,
          backgroundPositionY: 0,
          height: '7rem'
        }
      }
      return styles
    },
    getTitleWrapperStyles() {
      if (!this.scrolled250) {
        return
      }
      return {
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    },
    getTitleStyles() {
      if (!this.scrolled250) {
        return
      }
      return {
        fontSize: '2rem',
        marginBottom: '0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top_header__container {
  background-color: $bg-gray-color;
  text-align: center;
  
  height: 40rem;
  min-height: 7rem;
  width: 100%;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  background: url("../static/img/ruben-bagues-vPQfc4niDh0-unsplash.jpg") no-repeat center center;
  background-size: 220%;
  
  @media only screen and (max-width: $sp-width) {
    padding: 1rem 2rem;
  }

  .top_header__title__wrapper {
    max-width: 70rem;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .top_header__title {
    color: $text-default-gray;
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: 0.1rem;
    margin-bottom: 5rem;

    transition-duration: 300ms;
    transition-timing-function: ease-out;
    transition-delay: 100ms;
  }

  .top_header__nav {
    display: flex;
    justify-content: center;
    padding-left: 0;

    &--item {
      font-size: 1.5rem;
      list-style: none;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      &_link {
        text-decoration: none;
        color: $text-default-gray;
        padding: 0 1rem;

        position: relative;
        display: inline-block;

        &::after {
          position: absolute;
          bottom: -0.6rem;
          left: 0;
          content: '';
          width: 100%;
          height: 0.2rem;
          background: $orange-color;
          transform: scale(0, 1);
          transform-origin: right top;
          transition-timing-function: ease-in;
          transition: transform .5s;
        }

        &:hover::after {
          transform-origin: left top;
          transform: scale(1, 1);
        }
      }
    }
  }
}
</style>