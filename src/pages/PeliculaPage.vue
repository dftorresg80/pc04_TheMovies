<template>
  <div class="q-pa-lg flex flex-center">
    <q-btn color="brown-5" label="Listar Favoritos" @click="IrFavoritos()" />
  </div>
  <div class="q-pa-lg flex flex-center">
    <div class="Pelicula-page">
      <!-- <div class="Pelicula-filter q-ml-md q-mr-xl">
      <PeliculaFilter />
    </div> -->
      <div class="Pelicula-list">
        <ListarPerliculas />
      </div>
    </div>
  </div>
</template>

<style>
.Pelicula-page {
  display: flex;
  justify-content: space-between;
}

.Pelicula-filter {
  width: 25%;
}

.Pelicula-list {
  width: 75%;
}
</style>

<script>
// import PeliculaFilter from "src/components/pelicula/PeliculaFilter.vue";
import { ref } from "vue";
import ListarPerliculas from "src/components/pelicula/ListarPerliculas.vue";

export default {
  name: "PeliculaPage",
  components: {
    ListarPerliculas,
  },
  data() {
    return {};
  },
  setup() {
    return {
      current: ref(1),
    };
  },
  methods: {
    IrFavoritos() {
      location.href = "#/Favoritos";
    },
  },
};
</script>
