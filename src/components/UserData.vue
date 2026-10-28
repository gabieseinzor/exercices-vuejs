<template>
  <div class="card w-full max-w-md bg-neutral text-neutral-content shadow-xl">
    <form class="card-body gap-4" @submit.prevent="handleUpdate">
      <h2 class="card-title">Composant Formulaire d'édition 📝</h2>

      <label class="flex flex-col gap-1">
        <span>Votre nom</span>
        <input
          v-model="enteredName"
          type="text"
          class="input w-full text-base-content"
          placeholder="Entrez votre nom"
        />
      </label>

      <label class="flex flex-col gap-1">
        <span>Votre âge</span>
        <input
          v-model="enteredAge"
          type="number"
          class="input w-full text-base-content"
          placeholder="Entrez votre âge"
        />
      </label>

      <button type="submit" class="btn btn-primary w-full">
        Mettre à jour
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const enteredName = ref("");
const enteredAge = ref(null);

const emit = defineEmits(["user-data-emit-update"]);

// On émet le nom et l'âge saisis vers le parent
function handleUpdate() {
  if (
    enteredName.value.trim() === "" ||
    enteredAge.value === null ||
    enteredAge.value === ""
  ) {
    return;
  }

  emit("user-data-emit-update", {
    name: enteredName.value.trim(),
    age: enteredAge.value,
  });

  // on vide les input
  enteredName.value = "";
  enteredAge.value = null;
}
</script>
