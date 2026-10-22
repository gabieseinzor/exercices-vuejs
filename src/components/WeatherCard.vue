<template>
  <section>
    <h2 class="text-lg font-bold text-pink-600 mb-3">Météo Toulouse :</h2>
    <ul class="flex flex-col gap-2">
      <li
        class="rounded-box bg-base-200 px-4 py-3 flex flex-wrap justify-between gap-2"
      >
        <span>🌡️ Température max :</span>
        <span class="font-bold">{{ maxTemperature }}°C</span>
      </li>
      <li
        class="rounded-box bg-base-200 px-4 py-3 flex flex-wrap justify-between gap-2"
      >
        <span>🌡️ Température min :</span>
        <span class="font-bold">{{ minTemperature }}°C</span>
      </li>
      <li
        class="rounded-box bg-base-200 px-4 py-3 flex flex-wrap justify-between gap-2"
      >
        <span>🌡️ Température actuelle :</span>
        <span class="font-bold">{{ currentTemperature }}°C</span>
      </li>
      <li
        class="rounded-box bg-base-200 px-4 py-3 flex flex-wrap justify-between gap-2"
      >
        <span>Condition météo :</span>
        <span class="font-bold">{{ weatherCondition }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="js">
import { onMounted, ref } from "vue";

// coordonnées de Toulouse
const coordinatesToulouse = {
  name: "Toulouse",
  latitude: 43.6,
  longitude: 1.433333,
};

// données du template
const maxTemperature = ref(0);
const minTemperature = ref(0);
const currentTemperature = ref(0);
const weatherCondition = ref("");

// url des données à récupérer
const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinatesToulouse.latitude}&longitude=${coordinatesToulouse.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_min,temperature_2m_max,weather_code&timezone=Europe%2FParis&forecast_days=1`;

// Table de correspondance : code météo WMO -> texte affiché

const weatherConditions = {
  0: "Ciel dégagé",
  1: "Plutôt dégagé",
  2: "Partiellement nuageux",
  3: "Fortement nuageux",
  45: "Brouillard",
  48: "Brouillard givrant",
  51: "Bruine légère",
  53: "Bruine modérée",
  55: "Bruine dense",
  56: "Bruine verglaçante légère",
  57: "Bruine verglaçante dense",
  61: "Pluie légère",
  63: "Pluie modérée",
  65: "Pluie forte",
  66: "Pluie verglaçante légère",
  67: "Pluie verglaçante forte",
  71: "Neige légère",
  73: "Neige modérée",
  75: "Neige forte",
  77: "Grains de neige",
  80: "Averses légères",
  81: "Averses modérées",
  82: "Averses violentes",
  85: "Averses de neige légères",
  86: "Averses de neige fortes",
  95: "Orage",
  96: "Orage avec grêle légère",
  99: "Orage avec grêle forte",
};

// Au montage du composant, on lance la requête
onMounted(() => {
  async function loadWeatherData() {
    try {
      const response = await fetch(url);
      // Si le statut HTTP n'est pas OK, on déclenche une erreur
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data = await response.json();

      maxTemperature.value = data.daily.temperature_2m_max[0];
      minTemperature.value = data.daily.temperature_2m_min[0];
      currentTemperature.value = data.current.temperature_2m;

      // Code météo traduit en texte, avec une valeur de secours
      weatherCondition.value =
        weatherConditions[data.current.weather_code] ?? "Condition inconnue";
    } catch (e) {
      alert(
        `Attention une erreur est survenue pour ${coordinatesToulouse.name} : ${e.message}`,
      );
    }
  }
  // Appel de la fonction pour charger les données
  loadWeatherData();
});
</script>

<style scoped lang="css"></style>
