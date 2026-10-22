<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body gap-6">
      <h1
        class="text-2xl md:text-3xl font-extrabold text-center text-indigo-900"
      >
        Une simple requête HTTP GET
      </h1>

      <PokemonList />
      <div class="divider my-0"></div>
      <WeatherCard />
      <div class="divider my-0"></div>
      <DigimonCard />
    </div>
  </div>
</template>

<script setup>
import PokemonList from "../../components/PokemonList.vue";
import WeatherCard from "../../components/WeatherCard.vue";
import DigimonCard from "../../components/DigimonCard.vue";
</script>
