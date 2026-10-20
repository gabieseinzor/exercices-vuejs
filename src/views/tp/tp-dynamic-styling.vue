<template>
  <div class="container mx-auto p-4 md:p-8">
    <h1 class="text-2xl md:text-4xl font-bold text-center mb-6">
      TP : Dynamic Styling Mode : Composition
    </h1>

    <div class="flex flex-col gap-3 max-w-2xl mx-auto">
      <!-- Bloc 1 : classe dynamique -->
      <input
        type="text"
        v-model="firstInputField"
        placeholder="Nom de la classe"
        class="input input-bordered w-full"
      />
      <h2
        class="text-xl md:text-2xl font-semibold px-4 py-2 rounded-box"
        :class="{
          maClasseHello: firstInputField === 'hello',
          maClasseWorld: firstInputField === 'world',
        }"
        v-show="isVisible"
      >
        Hello World (class dynamique)
      </h2>

      <!-- Bloc 2 : couleur dynamique -->
      <input
        type="text"
        v-model="secondInputField"
        placeholder="Nom de la couleur"
        class="input input-bordered w-full"
      />
      <h2
        class="text-xl md:text-2xl font-semibold px-4 py-2 rounded-box"
        :style="{ backgroundColor: secondInputField }"
      >
        Hello World (couleur dynamique)
      </h2>

      <!-- Bouton -->
      <button
        type="button"
        class="btn btn-primary w-full sm:w-auto sm:self-start mt-2"
        @click="isVisible = !isVisible"
      >
        Afficher 1er titre
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const firstInputField = ref("");
const secondInputField = ref("");

const isVisible = ref(true);
</script>

<style>
.maClasseHello {
  background-color: #1e3a8a;
  color: #fde68a;
}

.maClasseWorld {
  background-color: #7e22ce;
  color: #fef08a;
}
</style>
