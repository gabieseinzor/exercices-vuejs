<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body gap-6">
      <h1
        class="text-2xl md:text-3xl font-extrabold text-center text-indigo-900"
      >
        Fetch API + lifecycle + props
      </h1>

      <!-- Section Pokémon -->
      <section>
        <h2 class="text-lg font-bold text-pink-600 mb-3">Les Pokémon :</h2>
        <div class="flex flex-wrap gap-2">
          <PokemonBadge
            v-for="pokemon in pokemonNameList"
            :key="pokemon"
            :name="pokemon"
          />
        </div>
      </section>

      <div class="divider my-0"></div>

      <!-- Section Digimons -->
      <section>
        <h2 class="text-lg font-bold text-pink-600 mb-3">Digimons :</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <DigimonCardProps
            v-for="digimon in digiList"
            :key="digimon.id"
            :name="digimon.name"
            :image="digimon.image"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PokemonBadge from "../../components/PokemonBadge.vue";
import DigimonCardProps from "../../components/DigimonCardProps.vue";

const pokemonNameList = ref([]);

const url = "https://digi-api.com/api/v1/digimon?pageSize=10";
const digiList = ref([]);

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

  async function digimonData() {
    try {
      const response = await fetch(url);
      const dataStructured = await response.json();
      console.log(dataStructured);

      digiList.value = dataStructured.content;
    } catch (er) {
      console.log(er);
    }
  }
  digimonData();
});
</script>
