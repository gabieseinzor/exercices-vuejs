<template>
  <div
    class="flex items-center justify-between rounded-box border-l-4 bg-base-100 p-4 shadow-sm"
    :class="
      priorite === 'Haute'
        ? 'border-error'
        : priorite === 'Moyenne'
          ? 'border-warning'
          : 'border-success'
    "
  >
    <div class="flex flex-col items-start gap-1">
      <span class="badge badge-neutral badge-sm">{{ props.categorie }}</span>
      <p>{{ props.titre }}</p>
    </div>
    <span
      class="badge badge-soft"
      :class="
        priorite === 'Haute'
          ? 'badge-error'
          : priorite === 'Moyenne'
            ? 'badge-warning'
            : 'badge-success'
      "
      >{{ props.priorite }}</span
    >
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
