const app = Vue.createApp({
  data() {
    return {
      title: "Contador App - Vue",
      count: 0,
    };
  },
  methods: {
    modCount(instruction = "add", limit = 1) {
      if (instruction === "dis") this.count -= limit;
      else this.count += limit;
    },
  },
});
