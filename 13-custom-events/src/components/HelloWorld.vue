<template>
  <div class="hello">
    <h1>Contador: {{ contador }}</h1>
    <button-contador @accion="handleAumentar" />
    <button-contador @accion="handleDisminuir" texto="Disminuir" />
  </div>
</template>

<script>
import ButtonContador from "./ButtonContador.vue";
export default {
  components: { ButtonContador },
  name: "HelloWorld",
  data: () => ({
    contador: 0,
  }),
  methods: {
    handleAumentar() {
      this.contador++;
    },
    handleDisminuir() {
      this.contador--;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
