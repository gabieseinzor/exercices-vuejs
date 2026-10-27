<template>
  <li class="flex items-center justify-between gap-4 py-3">
    <span class="text-base md:text-lg">{{ name }}</span>

    <!-- À compléter : la destination du lien (name de la route + params) -->
    <RouterLink
      class="btn btn-outline btn-info btn-sm"
      :to="{ name: 'details', params: { id: id, name: slug } }"
    >
      Voir les détails
    </RouterLink>
  </li>
</template>
<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
</script>
