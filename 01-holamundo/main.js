const app = Vue.createApp({
  data() {
    return {
      user: {
        title: "Hola mundo",
        name: "Yirsis",
        age: 15,
        movies: ["batman", "spiderman", "superman"],
        url: "https://google.com",
        picture:
          "https://cdn.pixabay.com/photo/2020/11/17/15/44/cup-5752775_640.jpg",
        classValue: "error",
      },
    };
  },
});
