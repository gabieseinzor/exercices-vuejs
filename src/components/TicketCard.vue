<template>
  <div
    class="flex items-center justify-between rounded-box border-l-4 border-error bg-base-100 p-4 shadow-sm"
  >
    <div class="flex flex-col items-start gap-1">
      <span class="badge badge-neutral badge-sm">{{ props.categorie }}</span>
      <p>{{ props.titre }}</p>
    </div>
    <span class="badge badge-error badge-soft">{{ props.priorite }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  titre: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  priorite: {
    type: String,
    required: true,
  },
});
</script>
