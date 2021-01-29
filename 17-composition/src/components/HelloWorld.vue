<template>
  <div>
    <h1>{{ title }}</h1>
    <hr />

    <ol>
      <li v-for="(post, i) in posts" :key="i">
        {{ post.title }}
      </li>
    </ol>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const title = "Hooks del Ciclo de Vida";
    const posts = ref([]);

    onMounted(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      posts.value = data;
    });

    return { title, posts };
  },
};
</script>
