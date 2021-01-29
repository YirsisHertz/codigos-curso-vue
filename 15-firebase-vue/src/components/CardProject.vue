<template>
  <div class="card horizontal" v-if="data.data.status">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{ data.data.title }}</span>
        <p>
          {{ data.data.description }}
        </p>
        <p>
          Tecnologías:
          <span v-for="(lang, i) in data.data.langs" :key="i">{{
            i < data.data.langs.length - 1
              ? `${lang.toUpperCase()}, `
              : lang.toUpperCase()
          }}</span>
        </p>
      </div>
      <div class="card-action">
        <div class="row">
          <router-link
            :to="`/edit-project/${data.id}`"
            class="col s6 waves-effect waves-light btn amber darken-3
"
          >
            <i class="material-icons">edit</i>
          </router-link>
          <form @submit.prevent="deleteProject">
            <button
              type="submit"
              class="col s6 waves-effect waves-light btn red darken-3
"
            >
              <i class="material-icons">delete</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    async deleteProject() {
      const id = this.data.id;
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch(
        `https://crud-vue-79ca5-default-rtdb.firebaseio.com/projects/${user.localId}/${id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: false }),
        }
      );
      const data = await res.json();

      this.data.data.status = data["status"];
    },
  },
};
</script>
