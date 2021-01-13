<template>
  <a :href="url" target="_blank" :class="setColor">{{ title }}</a>
</template>

<script>
export default {
  props: {
    color: String,
    url: String,
    title: {
      type: String,
      default: "GitHub",
    },
  },
  computed: {
    setColor() {
      return this.color == "red" ? "btn btn-danger" : "btn btn-dark";
    },
  },
};
</script>

<style></style>
