<template>
  <div class="card" style="width: 18rem;">
    <img
      loader="lazy"
      :src="data.images.downsized.url"
      class="card-img-top"
      alt="Gif"
    />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>
