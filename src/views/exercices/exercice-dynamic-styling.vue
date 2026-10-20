<template>
  <div class="container mx-auto p-4 md:p-8">
    <h1 class="text-2xl font-bold text-center mb-6">Dynamic Styling (Class)</h1>

    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <button
        type="button"
        class="w-full rounded-box px-4 py-3 text-center font-bold shadow-md cursor-pointer transition hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style="background-color: blue; color: white"
        @click="changeColor"
      >
        Carte 1 via style
      </button>

      <button
        type="button"
        class="w-full rounded-box px-4 py-3 text-center font-bold shadow-md cursor-pointer transition hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style="background-color: deeppink; color: white"
        @click="changeColor"
      >
        Carte 2 via style
      </button>

      <button
        type="button"
        class="w-full rounded-box px-4 py-3 text-center font-bold shadow-md cursor-pointer"
        :class="{ 'bg-emerald-400': isCard3Active, 'bg-white': !isCard3Active }"
        @click="changeCard3"
      >
        Carte 3 via class
      </button>

      <button
        type="button"
        class="w-full rounded-box px-4 py-3 text-center font-bold shadow-md cursor-pointer"
        :class="{ 'bg-blue-400': isCard4Active, 'bg-white': !isCard4Active }"
        @click="changeCard4"
      >
        Carte 4 via class
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

function changeColor(event) {
  const card = event.currentTarget;
  card.style.backgroundColor =
    card.style.backgroundColor === "blue" ? "deeppink" : "blue";
}
const isCard3Active = ref(false);
const isCard4Active = ref(false);

function changeCard3(event) {
  console.log(event);
  isCard3Active.value = !isCard3Active.value;
}

function changeCard4(event) {
  console.log(event);
  isCard4Active.value = !isCard4Active.value;
}
</script>
