<template>
  <div class="container mx-auto p-4 md:p-8">
    <h1 class="text-2xl md:text-4xl font-bold text-center mb-6">
      WatchList (Films à voir)
    </h1>

    <div class="flex flex-col gap-3 max-w-2xl mx-auto">
      <!-- Bloc 1 : classe dynamique -->
      <p>Nom du film :</p>
      <input
        type="text"
        v-model="inputFilm"
        placeholder="Entrez le nom d'un film"
        class="input input-bordered w-full"
      />

      <!-- Bouton -->
      <button
        type="button"
        class="btn btn-primary w-full sm:self-start mt-2"
        @click="ajouterFilm"
      >
        Ajouter à votre liste
      </button>
      <p v-if="mesFilms.length > 0">{{ mesFilms }}</p>
      <p v-else>{{ messageAfficher }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const messageAfficher = ref(
  "Pas encore de films dans votre liste? Veuillez en ajouter un.",
);
const mesFilms = ref([]);
const inputFilm = ref("");

const ajouterFilm = () => {
  if (inputFilm.value.trim() !== "") {
    mesFilms.value.push(inputFilm.value);
    inputFilm.value = "";
  }
};
</script>
