<template>
  <h4>{{ contador }} - {{ color }}</h4>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const contador = inject("valorContador");
    const color = inject("color");

    return { contador, color };
  },
};
</script>
