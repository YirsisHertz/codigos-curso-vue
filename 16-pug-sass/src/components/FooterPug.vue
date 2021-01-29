<template lang="pug">

footer
  h3 &copy; Yirsis Serrano - {{getYear}}

</template>

<script>
export default {
  computed: {
    getYear: () => new Date().getFullYear(),
  },
};
</script>

<style scoped lang="scss">
footer {
  background-color: #222;
  h3 {
    color: snow;
  }
}
</style>
