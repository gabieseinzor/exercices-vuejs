<template>
  <div class="rounded-box bg-base-200 p-3 text-center">
    <img
      :src="image"
      :alt="name"
      class="w-full aspect-square object-contain rounded-box bg-white"
    />
    <p class="mt-2 font-semibold">{{ name }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
