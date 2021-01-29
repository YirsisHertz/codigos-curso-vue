<template>
  <button @click="accionContador">{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    btnText: String,
  },
  setup({ btnText }, context) {
    const accionContador = () => {
      context.emit("accion");
    };

    return { btnText, accionContador };
  },
};
</script>
