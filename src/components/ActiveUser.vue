<template>
  <div class="card w-80 bg-blue-600 text-white shadow-lg">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Composant affichage des données utilisateur</h2>
      <p class="mt-4 text-lg font-semibold">{{ props.name }}</p>
      <p class="text-sm opacity-80">{{ props.age }} ans</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
</script>
