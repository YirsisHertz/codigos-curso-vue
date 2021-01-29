<template lang="pug">

div
  h1 {{title}}
  ul
    li
      a(href="#") Valor 1
    li
      a(href="#") Valor 2
    li
      a(href="#") Valor 3

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Mensaje desde Vue",
      personas: ["Juan", "Raul", "Maria"],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style: none;
  li {
    background-color: green;
    margin: 5px;
    a {
      color: snow;
    }
    &:hover {
      background-color: blue;
    }
  }
}

// ul li {
//   background-color: purple;
//   margin: 5px 0;
// }

// ul li a {
//   color: snow;
// }
</style>
