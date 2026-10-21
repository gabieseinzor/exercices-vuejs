<template>
  <div
    class="card bg-base-100 shadow-xl w-full max-w-md mx-auto overflow-hidden"
  >
    <!-- En-tête : titre de l'exercice (le fond est à ta main) -->
    <div class="bg-primary text-primary-content px-6 py-4">
      <h1 class="text-xl md:text-2xl font-bold">Le numéro gagnant</h1>
    </div>

    <div class="card-body gap-4">
      <!-- Card grise : nombre et indice -->
      <div class="rounded-box bg-base-200 p-6 text-center">
        <p class="text-sm opacity-70">Le nombre :</p>
        <p class="text-6xl font-extrabold my-2">{{ leNombreGagnant }}</p>
        <p class="text-sm font-bold uppercase text-red-600">
          {{ indiceGagnant }}
        </p>
      </div>
      <p
        class="rounded-box bg-red-600 text-white font-semibold text-center px-4 py-2 min-h-10"
        v-show="messageLimite"
      >
        {{ messageLimite }}
      </p>

      <!-- Boutons côte à côte -->
      <div class="grid grid-cols-2 gap-2 max-w-48 mx-auto">
        <button
          type="button"
          class="btn btn-primary text-lg"
          @click="ajouter(1)"
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-secondary text-lg"
          @click="ajouter(5)"
        >
          +5
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const leNombreGagnant = ref(0);
const messageIndice = ref("");

const messageLimite = ref("");

const ajouter = (nombre) => (leNombreGagnant.value += nombre);

const indiceGagnant = computed(() => {
  if (leNombreGagnant.value < 7) return "Pas mal, essaie encore";
  if (leNombreGagnant.value === 7) return "Bingoo bien joué !";
  return "Tu as dépassé le nombre !";
});

watch(leNombreGagnant, (newVal) => {
  if (newVal > 30) {
    messageLimite.value = "BCP BCP mais alors bcp TROP";
    setTimeout(() => {
      leNombreGagnant.value = 0;
      messageLimite.value = "";
    }, 7000);
  }
});
</script>
