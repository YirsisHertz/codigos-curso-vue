<template>
  <form @submit.prevent="ejecutarPeticion">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Categoria</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="search"
      />
    </div>

    <button type="submit" class="btn btn-primary">Search</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    search: "",
  }),
  methods: {
    ejecutarPeticion() {
      this.$emit("accion", this.search);
    },
  },
};
</script>
