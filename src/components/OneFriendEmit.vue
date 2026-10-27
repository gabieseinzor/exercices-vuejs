<template>
  <div class="card w-full bg-violet-200 shadow-md">
    <div class="card-body gap-2 p-4">
      <h2 class="card-title text-lg">{{ name }}</h2>

      <div class="flex flex-wrap items-center gap-2 mt-2">
        <span class="text-sm font-semibold text-primary">
          👤 {{ name }} - ami : {{ premium ? "En Or ..🏆" : "En Plomb" }}
        </span>
        <span class="badge font-semibold" :class="{ 'badge-success': premium }">
          {{ premium ? "Premium" : "Standard" }}
        </span>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class="btn btn-xs btn-secondary text-white"
          @click="updatePremium"
        >
          Update Premium
        </button>
        <button
          type="button"
          class="btn btn-xs btn-info"
          @click="toggleDetails"
        >
          {{ showDetails ? "Masquer Details" : "Afficher Details" }}
        </button>
        <button
          type="button"
          class="btn btn-xs btn-error text-white"
          @click="deleteFriend"
        >
          🗑️ Supprimer
        </button>
      </div>

      <ul v-show="showDetails" class="flex flex-col gap-2">
        <li class="flex items-center gap-2">
          <span class="badge badge-outline badge-primary">ID</span>{{ id }}
        </li>
        <li class="flex items-center gap-2">
          <span class="badge badge-outline badge-secondary">📞</span>{{ phone }}
        </li>
        <li class="flex items-center gap-2">
          <span class="badge badge-outline badge-accent">📧</span>{{ email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props
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
  premium: {
    type: Boolean,
    required: true,
  },
});

// Phase 1 on déclare les events
const emit = defineEmits(["mon-event-premium-update", "delete-friend"]);
const uneData = ref(props.id);

// Phase 2 on émet les events avec l'id de l'ami
function updatePremium() {
  console.log("updatePremium : émission pour l'id", uneData.value);

  emit("mon-event-premium-update", uneData.value);
}

function deleteFriend() {
  console.log("deleteFriend : émission pour l'id", uneData.value);

  emit("delete-friend", uneData.value);
}

// Affiche ou masque les détails (état local)
const showDetails = ref(false);
const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};
</script>
