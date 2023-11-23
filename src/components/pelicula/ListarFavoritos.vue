<template>
  <h6>Lista de mis Peliculas Favoritas</h6>
  <div class="pelicula-list">
    <div class="pelicula-grid">
      <div
        class="pelicula-item"
        v-for="pelicula in peliculas"
        :key="pelicula.id"
      >
        <FavoritoItem :pelicula="pelicula" />
      </div>
    </div>
  </div>
</template>
<style>
.pelicula-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import axios from "axios";

import FavoritoItem from "components/pelicula/FavoritoItem.vue";

export default {
  name: "ListarFavoritos",
  components: {
    FavoritoItem,
  },
  props: {
    ListarPeliculas: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      peliculas: [],
    };
  },
  mounted() {
    this.getPeliculas();
  },
  methods: {
    async getPeliculas() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/account/20708625/favorite/movies",
        params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODMyNDRiNTU0NTE5NGZjMjJiNWVhZTdkNzU0YTJhNyIsInN1YiI6IjY1NWQ0ODMwZDM5OWU2MDBlYzQzNWFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZzPYq1z0_dvCsYpnR4rB-CIGPWqWEMhvesW6hxp7DI",
        },
      };
      var listaFavoritos = [];
      await axios
        .request(options)
        .then(function (response) {
          listaFavoritos = response.data.results;
        })
        .catch(function (error) {
          console.error(error);
        });

      this.peliculas = listaFavoritos;
    },
  },
};
</script>
