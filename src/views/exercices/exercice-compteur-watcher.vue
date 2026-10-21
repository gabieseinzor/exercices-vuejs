<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-md mx-auto">
    <div class="card-body">
      <h1 class="card-title">Compteur avec Watcher</h1>

      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4"
      >
        <!-- Bouton + (à brancher avec @click) -->
        <button
          type="button"
          class="w-full sm:w-auto px-6 py-3 rounded-box bg-green-500 text-white text-xl font-bold shadow-md cursor-pointer transition hover:bg-green-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Incrémenter"
          @click="increment()"
        >
          +
        </button>

        <!-- Valeur actuelle -->
        <div class="flex items-center justify-between sm:justify-start gap-3">
          <span class="font-semibold">Valeur actuelle :</span>
          <span
            class="min-w-12 px-4 py-2 rounded-box bg-blue-100 text-blue-800 text-center text-xl font-bold"
          >
            {{ leNombre }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, watch } from "vue";
const leNombre = ref(0);
const increment = () => leNombre.value++;

watch(leNombre, (newVal, oldVal) => {
  //console.log(`Le compteur est passé de ${oldVal} à ${newVal}`);
  console.log("ça surveille");
  if (leNombre.value === 7) {
    console.log("Attention limite atteinte");
    leNombre.value = 0;
  }
});
</script>
