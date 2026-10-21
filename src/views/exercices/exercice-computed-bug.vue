<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body">
      <h1 class="card-title">Event Binding Mode : Composition</h1>

      <div class="flex items-center justify-center gap-4 py-8">
        <button
          @click="enlever(10)"
          class="px-4 py-2 rounded bg-red-500 text-white font-bold"
        >
          -
        </button>

        <span class="text-xl font-bold">le nombre : {{ counter }}</span>

        <button
          @click="ajouter(10)"
          class="px-4 py-2 rounded bg-green-500 text-white font-bold"
        >
          +
        </button>
      </div>
      <p>
        Résultat de la fonction afficherNameUser() : {{ afficherNameUser() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const userName = ref("");

const ajouter = (val) => {
  return (counter.value += val);
};

const enlever = (val) => {
  return (counter.value -= val);
};

const afficherNameUser = () => {
  console.log("la fonction qui gère le name est déclenchée");
  if (userName.value == " ") {
    return "Online";
  } else {
    return "Offline";
  }
};
</script>
