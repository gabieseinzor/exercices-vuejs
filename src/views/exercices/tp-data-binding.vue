<template>
  <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <div class="card-body items-center text-center">
      <h1 class="card-title self-start">
        Tp-Databinding : Profil utilisateur (interpolation + v-bind)
      </h1>

      <!-- Avatar -->
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img :src="profilUtilisateur.image" :alt="profilUtilisateur.nom" />
        </div>
      </div>

      <!-- Nom -->
      <h2 class="text-2xl font-bold">{{ profilUtilisateur.nom }}</h2>

      <!-- Champ de saisie -->
      <input
        v-model="profilUtilisateur.nom"
        type="text"
        placeholder="Votre nom"
        class="input input-bordered w-full max-w-sm"
      />

      <!-- Infos -->
      <div class="flex flex-col items-center gap-3 mt-2">
        <p>
          Âge :
          <span class="px-3 py-1 rounded bg-primary text-white">{{ profilUtilisateur.age }} ans</span>
        </p>
        <p>
          Âge + 10 :
          <span class="px-3 py-1 rounded bg-pink-500 text-white">{{ ajouterDix(profilUtilisateur.age) }} ans</span>
        </p>
        <p>
          NB Fétiche :
          <span class="px-3 py-1 rounded bg-success text-gray-700">{{ nbreFetiche() }}</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const profilUtilisateur = ref ({
    "nom" : "Dr Mario",
    "age": 30,
    "image": 'https://mario.nintendo.com/static/0f10f738d1f9aa8292fa7d93c35f2a07/02be2/mario.png'
});

function ajouterDix(age){
    return age + 10;
}

function nbreFetiche(){
    return Math.random();
}
</script>
