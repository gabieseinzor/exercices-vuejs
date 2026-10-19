<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body">
      <h1 class="card-title">Event Binding Mode : Composition</h1>

      <div class="flex items-center justify-center gap-4 py-8">
        <button
          @click="decrement"
          class="px-4 py-2 rounded bg-red-500 text-white font-bold"
        >
          -
        </button>

        <span class="text-xl font-bold">le nombre : {{counter }}</span>

        <button
          @click="increment"
          class="px-4 py-2 rounded bg-green-500 text-white font-bold"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Données pour la section de base
const counter = ref(0);
const message = ref('');

// Données pour la section avancée
const uneString = ref('Hello');
const submitted = ref(false);
const clickCoords = ref({ x: 0, y: 0 });

// Fonctions de la section de base
function increment() {
    counter.value++;
}
function showMessage(msg) {
    message.value = msg;
}

// Fonctions de la section avancée
function capterInput(event) {
    console.log('event');
    console.log(event);
    uneString.value = event.target.value;
}
function capterClickEvent(event) {
    console.log(event);
    
    clickCoords.value.x = event.clientX;
    clickCoords.value.y = event.clientY;
}
function submitForm() {
    submitted.value = true;
}
</script>
