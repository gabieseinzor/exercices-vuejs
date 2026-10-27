<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-xl w-full max-w-3xl mx-auto">
      <div class="card-body gap-4">
        <h1 class="text-lg md:text-xl font-bold text-center">
          Exemple de route dynamique (avec paramètres en props) :
        </h1>

        <ul class="flex flex-col divide-y divide-base-300">
          <!-- À compléter : le v-for, avec sa key -->
          <UserProfileCard
            class=""
            v-for="user in users"
            :key="user.id"
            :id="user.id"
            :name="user.name"
            :slug="user.slug"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import UserProfileCard from "../../components/UserProfileCard.vue";

const users = ref([
  { id: "1", name: "Steven Vandamme", slug: "Steven-Vandamme" },
  { id: "2", name: "Jean-Luc Godard", slug: "Jean-Luc-Godard" },
  { id: "3", name: "BicVeleda", slug: "BicVeleda" },
  { id: "4", name: "Savage Henry", slug: "Savage-Henry" },
]);
</script>
