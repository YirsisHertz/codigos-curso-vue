<template>
  <div class="container">
    <div class="row ">
      <router-link
        to="/proyectos"
        class="col s12 waves-effect waves-light btn amber darken-3"
      >
        <i class="material-icons">arrow_back</i>
        Regresar a la lista
      </router-link>
    </div>

    <div class="row">
      <form @submit.prevent="updateProject" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="first_name"
              type="text"
              v-model="project.title"
              class="validate"
              placeholder="Nombre del Proyecto"
            />
            <label for="first_name"></label>
          </div>
          <div class="input-field col s12">
            <input
              id="last_name"
              v-model="project.description"
              type="text"
              class="validate"
              placeholder="Descripción del Proyecto"
            />
            <label for="last_name"></label>
          </div>
          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="html"
                checked="checked"
              />
              <span>HTML</span>
            </label>
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="css"
                checked="checked"
              />
              <span>CSS</span>
            </label>
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="js"
                checked="checked"
              />
              <span>JavaScript</span>
            </label>
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="vue"
                checked="checked"
              />
              <span>Vue</span>
            </label>
          </p>
          <button
            class="btn waves-effect waves-light col s12"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    async getProject() {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch(
        `https://crud-vue-79ca5-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`
      );
      const data = await res.json();

      this.project = data;
    },
    async updateProject() {
      const user = JSON.parse(localStorage.getItem("user"));

      await fetch(
        `https://crud-vue-79ca5-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify(this.project),
        }
      );
    },
  },
};
</script>
