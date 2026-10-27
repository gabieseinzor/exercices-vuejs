<template>
  <span class="px-3 py-1 rounded-lg bg-indigo-700 text-white text-sm shadow">
    {{ name }}
  </span>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
