const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones Fetch",
      datos: [],
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/");

      const data = await res.json();

      this.datos = data;
    },
  },
});
