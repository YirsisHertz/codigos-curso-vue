<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Gifs</h1>
    <search @accion="getGifs" />
    <hr />
    <loading v-if="load" />
    <div class="row">
      <div class="col-12 col-lg-3" v-for="gif in gifs" :key="gif.id">
        <gif-card :data="gif" class="m-3 w-75" />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import GifCard from "../components/GifCard.vue";
import Search from "../components/Search.vue";
export default {
  components: { GifCard, Search, Loading },
  data: () => ({
    gifs: {},
    load: false,
  }),
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(search = "goku") {
      const key = "MKQ26ZeLr2niNEDZfygMh30DhAFFunaN";

      this.load = true;

      const { data } = await this.axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`
      );
      this.gifs = data.data;
      this.load = false;
    },
  },
};
</script>
