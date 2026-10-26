<template>
  <h1 class="text-xl font-bold text-center mb-4">
    Exercice props (ici c'est le parent)
  </h1>
  <div class="flex flex-col items-center gap-4">
    <OneFriend
      v-for="friend in friendsList"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone="friend.phone"
      :email="friend.email"
      :statut="friend.statut"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import OneFriend from "../../components/OneFriend.vue";
const friendsList = ref([
  {
    id: "ami-1",
    name: "Camille Durand",
    phone: "0612345678",
    email: "camille.durand@example.com",
    statut: "Premium",
  },
  {
    id: "ami-2",
    name: "Karim Benali",
    phone: "0623456789",
    email: "karim.benali@example.com",
    statut: "Standard",
  },
  {
    id: "ami-3",
    name: "Inès Moreau",
    phone: "+33698765432",
    email: "ines.moreau@example.com",
    statut: "Premium",
  },
  {
    id: "ami-4",
    name: "Théo Lambert",
    phone: "0634567890",
    email: "theo.lambert@example.com",
    statut: "Standard",
  },
  {
    id: "ami-5",
    name: "Sofia Martins",
    phone: "+33745678901",
    email: "sofia.martins@example.com",
    statut: "Standard",
  },
  {
    id: "ami-6",
    name: "Léa Fontaine",
    phone: "0656789012",
    email: "lea.fontaine@example.com",
    statut: "Premium",
  },
]);
</script>
