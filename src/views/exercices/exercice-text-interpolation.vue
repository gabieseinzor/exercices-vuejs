<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body">
      <h1 class="card-title">Exercice Text Interpolation</h1>

      <ul class="divide-y divide-base-300">
        <!-- Ligne d'intitulés -->
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-sm text-base-content opacity-60">Variable</span>
          <span class="text-sm text-base-content opacity-60">Valeur</span>
        </li>

        <!-- Lignes de données -->
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unLivre</span>
          <span class="px-3 py-1 rounded bg-primary text-white">{{unLivre}}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">isOnline</span>
          <span class="px-3 py-1 rounded bg-base-200 text-black">{{ isOnline }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unNombre</span>
          <span class="px-3 py-1 rounded bg-accent text-gray">{{ unNombre }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unTableau</span>
          <span class="px-3 py-1 rounded bg-warning text-gray">{{ unTableau }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unTableau[0]</span>
          <span class="px-3 py-1 rounded bg-warning text-gray">{{ unTableau[0] }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unObject</span>
          <span class="px-3 py-1 rounded bg-success text-gray">{{ unObject }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unObject.name</span>
          <span class="px-3 py-1 rounded bg-success text-gray">{{ unObject.name }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unObject['name']</span>
          <span class="px-3 py-1 rounded bg-success text-gray">{{ unObject['name'] }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">unObject.tel</span>
          <span class="px-3 py-1 rounded bg-success text-gray">{{ unObject.tel }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">fonctionTest()</span>
          <span class="px-3 py-1 rounded bg-pink-600 text-white">{{ fonctionTest() }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">Une ternaire pour la route</span>
          <span class="px-3 py-1 rounded bg-pink-600 text-white">{{ enMajuscule ? unObject.name.toLowerCase() : unObject.name }}</span>
        </li>
        <li class="flex items-center justify-between gap-4 py-2">
          <span class="text-base-content">On affiche du html ?</span>
          <span class="px-3 py-1 rounded bg-pink-600 text-white">{{ duHtml }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="js">
// Pas besoin d'importer 'ref' grâce à l'auto-import de Nuxt 3 et 4
import { ref } from 'vue';
const unLivre = 'Les mémoires de Steven Seagal'
const isOnline = true;
const unNombre = ref(8888);
const unTableau = ref(["du texte", 99]);
const unObject = ref({
    "name": "COOL", 
    "tel": "060503030"
});
const duHtml = "<h1>Du html</h1>";
const enMajuscule = true;

function fonctionTest() {
    return "Hello world"
};

</script>