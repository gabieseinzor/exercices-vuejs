<template>
  <section>
    <h2 class="text-lg font-bold text-pink-600 mb-3">Digimons :</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
      <div class="rounded-box bg-base-200 p-3 text-center">
        <img
          :src="digiUrlImage"
          :alt="digiName"
          class="w-full aspect-square object-contain rounded-box bg-white"
        />
        <p class="mt-2 font-semibold">{{ digiName }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { onMounted, ref } from "vue";

const url = "https://digi-api.com/api/v1/digimon/2";
const digiUrlImage = ref("");
const digiName = ref("");

onMounted(() => {
  async function digimonData() {
    try {
      const response = await fetch(url);
      const dataStructured = await response.json();
      //console.log(dataStructured.images);

      digiName.value = dataStructured.name;

      // images est un tableau, on prend la première image
      digiUrlImage.value = dataStructured.images[0].href;
    } catch (er) {
      console.log(er);
    }
  }
  digimonData();
});
</script>

<style scoped lang="css"></style>
