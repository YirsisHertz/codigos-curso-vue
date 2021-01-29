import { computed, provide, ref } from "vue";

export function useContador() {
  const contador = ref(0);

  const color = computed(() => (contador.value < 0 ? "red" : "green"));

  const aumentar = () => contador.value++;
  const disminuir = () => contador.value--;

  provide("valorContador", contador);
  provide("color", color);

  return { aumentar, disminuir };
}
