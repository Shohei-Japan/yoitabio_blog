<template>
  <nuxt-link 
    to="/me"
    class="app_button"
  >
    {{ text }}
    
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app_button {
  text-decoration: none;
  font-size: 1.6rem;
  color: $dark-gray-color;
  display: inline-block;
  padding: 1rem 2rem;

  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 49.5%;
    width: 30%;
    z-index: -1;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
  }

  &:hover {
    color: $white-color;
  }

  &:hover:after {
    height: 50%;
  }

  &:after {
    background: $gray-color;
      opacity: .5;
      -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
      -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
      -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
      transform: translateY(-50%) translateX(-50%) rotate(90deg);
  }

  &:hover:after {
    opacity: 1;
    height: 480% !important;
  }
}
</style>