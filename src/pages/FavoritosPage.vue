<template>
  <div class="q-pa-lg flex flex-center">
    <q-btn color="brown-5" label="Listar Todos" @click="IrLista()" />
  </div>
  <div class="q-pa-lg flex flex-center">
    <div class="Pelicula-page">
      <!-- <div class="Pelicula-filter q-ml-md q-mr-xl">
      <PeliculaFilter />
    </div> -->
      <div class="Pelicula-list">
        <ListarFavoritos />
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
import ListarFavoritos from "src/components/pelicula/ListarFavoritos.vue";

export default {
  name: "PeliculaPage",
  components: {
    ListarFavoritos,
  },
  data() {
    return {};
  },
  methods: {
    IrLista() {
      location.href = "#/";
    },
  },
};
</script>
