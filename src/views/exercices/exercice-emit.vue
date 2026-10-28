<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="flex flex-col gap-4 max-w-md mx-auto">
      <NewFriend @add-friend="handleAddFriend" />
      <OneFriendEmit
        v-for="unAmi in lesAmis"
        :key="unAmi.id"
        :id="unAmi.id"
        :name="unAmi.name"
        :phone="unAmi.phone"
        :email="unAmi.email"
        :premium="unAmi.premium"
        @delete-friend="handleDeleteFriend"
        @mon-event-premium-update="handlePremiumUpdate"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OneFriendEmit from "../../components/OneFriendEmit.vue";
import NewFriend from "../../components/NewFriend.vue";

const lesAmis = ref([
  {
    id: "001",
    name: "Janine De La Vega",
    phone: "01234 5678 991",
    email: "janine@delavega.com",
    premium: false,
  },
  {
    id: "002",
    name: "Eric Reptile",
    phone: "01234 5678 991",
    email: "eric@reptile.com",
    premium: true,
  },
  {
    id: "003",
    name: "Jean Kreps",
    phone: "+338765477",
    email: "jean@kreps.com",
    premium: true,
  },
  {
    id: "004",
    name: "Goulive",
    phone: "+338765477",
    email: "goulive@seagal.com",
    premium: true,
  },
  {
    id: "005",
    name: "JAROD",
    phone: "+338765477",
    email: "jarod@seagal.com",
    premium: true,
  },
  {
    id: "006",
    name: "GussDX",
    phone: "+338765477",
    email: "gussdx@seagal.com",
    premium: true,
  },
]);

function handleDeleteFriend(unId) {
  console.log("Le parent a reçu :", unId);
  lesAmis.value = lesAmis.value.filter((unAmi) => unAmi.id !== unId);
}
function handlePremiumUpdate(unId) {
  console.log("Le parent a reçu :", unId);
  const unAmi = lesAmis.value.find((ami) => ami.id === unId);
  if (unAmi) {
    unAmi.premium = !unAmi.premium;
  }
}
function handleAddFriend(newName, newPhone, newEmail) {
  //console.log("Le parent a reçu :", newName, newPhone, newEmail);
  const id = crypto.randomUUID();
  lesAmis.value.push({
    id: id,
    name: newName,
    phone: newPhone,
    email: newEmail,
    premium: false,
  });
}
</script>
