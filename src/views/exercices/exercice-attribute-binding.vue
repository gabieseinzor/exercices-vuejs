<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body">
      <h1 class="card-title">Attribute Binding Mode : Composition</h1>

      <!-- Section liens -->
      <div class="flex flex-col items-center text-center gap-3 py-4">
        <h2 class="text-lg font-semibold">Lien dynamique</h2>
        <p class="text-sm opacity-70">
          Nous utilisons ici v-bind:href ou sa syntaxe abrégée :href pour lier l'attribut href à une variable.
        </p>

        <a
          v-bind:href="websiteUrl"
          target="_blank"
          class="px-4 py-2 rounded bg-primary text-white uppercase text-sm font-semibold"
        >
          Lien dynamique (v-bind)
        </a>

        <a
          :href="websiteUrl"
          target="_blank"
          class="px-4 py-2 rounded bg-pink-500 text-white uppercase text-sm font-semibold"
        >
          Lien dynamique (:)
        </a>
      </div>

      <!-- Section image -->
      <div class="flex flex-col items-center text-center gap-3 py-4">
        <h2 class="text-lg font-semibold">Liaison d'image</h2>
        <p class="text-sm opacity-70">
          La liaison d'attributs s'applique également aux balises img pour charger des images dynamiquement.
        </p>
        <img :src="imageUrl" alt="Image dynamique" class="w-64 h-auto rounded shadow" />
      </div>
      <p class="text-xs opacity-60 text-center pt-4">
  Le lien et l'image sont tirés de la variable ref suivante :
  <code>websiteUrl.value = 'https://vuejs.org'</code>
  <code>imageUrl.value = 'https://picsum.photos/400/300'</code>
</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const websiteUrl = ref('https://vuejs.org');
const imageUrl = ref('https://picsum.photos/400/300');


</script>