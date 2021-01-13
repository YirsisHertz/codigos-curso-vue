<template>
  <div id="footer">
    <footer>
      <h3 class="p-4">&copy; Yirsis Serrano - {{ year }}</h3>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
h3 {
  background-color: #333;
  text-align: center;
  color: snow;
}
</style>
