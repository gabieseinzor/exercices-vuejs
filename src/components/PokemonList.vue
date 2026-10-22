<template>
  <section>
    <h2 class="text-lg font-bold text-pink-600 mb-3">Les Pokémon :</h2>
    <div class="flex flex-wrap gap-2">
      <span
        class="px-3 py-1 rounded-lg bg-indigo-700 text-white text-sm shadow"
        v-for="pokemon in pokemonNameList"
        >{{ pokemon }}</span
      >
    </div>
  </section>
</template>

<script setup lang="js">
import { onMounted, ref } from "vue";

const pokemonNameList = ref([]);

onMounted(() => {
  async function pokemonData() {
    try {
      const reponse = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
      );
      const dataStructured = await reponse.json();
      const pokemons = dataStructured.results;

      for (const pokemon of pokemons) {
        pokemonNameList.value.push(pokemon.name);
      }
    } catch (er) {
      console.log(er);
    }
  }
  pokemonData();
});
</script>

<style scoped lang="css"></style>
