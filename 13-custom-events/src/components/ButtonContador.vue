<template>
  <div id="btn-contador">
    <button @click="ejecutarAccion">{{ texto }}</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "Aumentar",
    },
  },
  methods: {
    ejecutarAccion() {
      this.$emit("accion");
    },
  },
};
</script>

<style></style>
