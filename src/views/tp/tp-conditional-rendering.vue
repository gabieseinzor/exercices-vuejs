<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-md mx-auto">
    <div class="card-body gap-4">
      <h1 class="text-xl md:text-2xl font-bold text-center">
        TP : Conditional / List Rendering
      </h1>
      <h2 class="text-lg font-semibold">La liste des courses 🛍️</h2>

      <!-- Saisie et ajout -->
      <input
        v-model="newItem"
        type="text"
        placeholder="Ex : pommes (800 kg)"
        class="input input-bordered w-full"
      />
      <button
        type="button"
        class="btn btn-success text-white w-full sm:w-auto sm:self-start"
        @click="addItem"
      >
        Ajouter à votre liste de courses
      </button>

      <div class="divider my-0"></div>

      <!-- Liste de courses : masquée ou affichée -->
      <div v-show="isListVisible">
        <p v-if="shoppingList.length === 0" class="text-center opacity-70 py-4">
          Votre liste est vide. Ajoutez un article.
        </p>

        <ul v-else class="flex flex-col gap-2">
          <li v-for="(item, index) in shoppingList" :key="index">
            <span>{{ index }} - {{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Bouton masquer / afficher -->
      <button
        type="button"
        class="btn btn-info w-full sm:w-auto sm:self-start"
        @click="showHideList"
      >
        {{ isListVisible ? "Masquer liste" : "Afficher liste" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Texte tapé dans le champ (lié au v-model)
const newItem = ref("");

const shoppingList = ref([]);

// Liste visible ou masquée (utilisé par le v-show et le texte du bouton)
const isListVisible = ref(true);

// Ajoute le contenu du champ à la liste
const addItem = () => {
  shoppingList.value.push(newItem.value);
  newItem.value = "";
};
//console.log(shoppingList.value);

// Masque ou affiche la liste de courses
const showHideList = () => {
  return (isListVisible.value = !isListVisible.value);
};
</script>
