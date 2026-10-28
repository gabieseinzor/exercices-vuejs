<template>
  <div class="card w-full bg-sky-400 shadow-md">
    <div class="card-body gap-3">
      <h2 class="card-title text-2xl text-sky-950">Ajouter un nouvel ami</h2>

      <form @submit.prevent="addNewFriend" class="flex flex-col gap-3">
        <label class="flex flex-col gap-1 text-sm text-sky-950">
          Nom
          <input
            type="text"
            placeholder="Votre nom"
            class="input input-sm w-full bg-white text-black"
            v-model="newName"
          />
        </label>

        <label class="flex flex-col gap-1 text-sm text-sky-950">
          Téléphone
          <input
            type="tel"
            placeholder="Votre Tél (ex: 06 00 00 00 00)"
            class="input input-sm w-full bg-white text-black"
            v-model="newPhone"
          />
        </label>

        <label class="flex flex-col gap-1 text-sm text-sky-950">
          Email
          <input
            type="email"
            placeholder="Votre email"
            class="input input-sm w-full bg-white text-black"
            v-model="newEmail"
          />
        </label>

        <button type="submit" class="btn btn-sm btn-primary w-full mt-2">
          Ajouter Ami
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const newName = ref("");
const newPhone = ref("");
const newEmail = ref("");

const emit = defineEmits(["add-friend"]);

function addNewFriend() {
  if (
    newName.value.trim() !== "" &&
    newPhone.value.trim() !== "" &&
    newEmail.value.trim() !== ""
  ) {
    // console.log(
    //   "addNewFriend : envoi de",
    //   newName.value,
    //   newPhone.value,
    //   newEmail.value,
    // );
    emit("add-friend", newName.value, newPhone.value, newEmail.value);
    newName.value = "";
    newPhone.value = "";
    newEmail.value = "";
  }
}
</script>
