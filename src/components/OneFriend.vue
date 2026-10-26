<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Composant OneFriend.vue</h2>

      <div class="flex items-center justify-between gap-2">
        <span>👤{{ name }}</span>
        <span
          class="badge"
          :class="
            currentStatut === 'Premium' ? 'badge-success' : 'badge-neutral'
          "
        >
          {{ currentStatut }}
        </span>
      </div>

      <p>🆔{{ id }}</p>
      <p>📞{{ phone }}</p>
      <p>✉️{{ email }}</p>

      <button class="btn btn-sm btn-primary text-white" @click="toggleStatut">
        Modifier Props Premium
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: true,
  },
});

const currentStatut = ref(props.statut);
// bascule entre Premium et Standard
const toggleStatut = () => {
  currentStatut.value =
    currentStatut.value === "Premium" ? "Standard" : "Premium";
};
</script>
