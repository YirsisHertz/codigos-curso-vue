<template>
  <div class="card" style="width: 100%;">
    <img
      loader="lazy"
      :src="data.images.downsized.url"
      class="card-img-top"
      alt="stickers"
    />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
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
