<template lang="pug">

div.nav
  router-link(to="/") Home | 
  router-link(to="/about") About

  router-view

  footer-pug

</template>

<script>
import FooterPug from "./components/FooterPug";

export default {
  components: {
    FooterPug,
  },
};
</script>
scr

<style lang="scss">
$primary: #129870;

h1 {
  color: $primary;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
