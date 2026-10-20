<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body">
      <h1 class="card-title">Event Binding Mode : Composition</h1>

      <div class="flex items-center justify-center gap-4 py-8">
        <button
          @click="enlever(77)"
          class="px-4 py-2 rounded bg-red-500 text-white font-bold"
        >
          -
        </button>

        <span class="text-xl font-bold">le nombre : {{counter }}</span>

        <button
          @click="ajouter(10000)"
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

const counter = ref(0);

const ajouter = (val) =>{
  return counter.value += val;
}

const enlever = (val) =>{
  return counter.value -= val;
}



function increment() {
    counter.value++;
}

function decrement() {
    counter.value--;
}

</script>
