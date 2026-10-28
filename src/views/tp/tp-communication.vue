<template>
  <section
    class="bg-linear-to-b from-orange-500 to-yellow-400 mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-box p-8"
  >
    <h1 class="text-2xl font-bold text-white">
      Composant Gestion de l'utilisateur
    </h1>
    <ActiveUser :name="oneUser.name" :age="oneUser.age" />

    <UserData @user-data-emit-update="updateUser()" />
  </section>
</template>
<script setup>
import { ref } from "vue";
import ActiveUser from "../../components/ActiveUser.vue";
import UserData from "../../components/UserData.vue";

const oneUser = ref({
  name: "John",
  age: 25,
});
function updateUser({ name, age }) {
  oneUser.value = {
    name: name,
    age: age,
  };
}
</script>
