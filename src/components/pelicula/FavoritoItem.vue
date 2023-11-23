<template>
  <q-card class="item-card">
    <q-card-section>
      <q-img
        :src="'https://image.tmdb.org/t/p/original' + pelicula.poster_path"
      ></q-img>
    </q-card-section>
    <q-card-section>
      <!-- <q-card-title>{{ pelicula.overview }}</q-card-title> -->
      <div class="text-h6 font-weight-bold">{{ pelicula.original_title }}</div>
      <div class="text-center"></div>
    </q-card-section>
  </q-card>
</template>
<style>
.item-card {
  width: 300px;
}

.item-card q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>
import axios from "axios";
export default {
  name: "PeliculaItem",
  props: {
    pelicula: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
