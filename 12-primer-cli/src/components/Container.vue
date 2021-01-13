<template>
  <div id="container" class="container">
    <h2>Proyectos</h2>
    <img
      src="https://avatars2.githubusercontent.com/u/60007588?v=4"
      alt="Avatar de YirsisHertz"
      width="100"
      loading="lazy"
      class="image"
    />
    <hr />
    <loading v-if="load" />
    <div class="cards" v-for="project in projects" :key="project.id">
      <Card
        :name="project.name"
        :description="project.description"
        :author="project.owner.login"
        :url="project.html_url"
        :homepage="project.homepage"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import Loading from "./Loading.vue";

export default {
  data() {
    return {
      projects: null,
      load: false,
    };
  },
  components: {
    Card,
    Loading,
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.load = true;

      const res = await fetch("https://api.github.com/users/YirsisHertz/repos");
      const data = await res.json();

      this.load = false;
      this.projects = data;
      console.log(data[0]);
    },
  },
};
</script>

<style scoped>
.image {
  border-radius: 50%;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  overflow: hidden;
  border: solid 1px #eee;
  box-shadow: 1px 1px 4px #333;
  text-align: center;
}
</style>
