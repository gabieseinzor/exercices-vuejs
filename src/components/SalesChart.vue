<template>
  <div class="flex flex-col gap-4">
    <!-- Zone du graphique : hauteur fixe, largeur fluide -->
    <div class="relative h-64 sm:h-80 w-full">
      <Bar :data="chartData" :options="chartOptions" />
    </div>

    <!-- Boutons -->
    <div class="flex flex-col sm:flex-row gap-3">
      <button
        type="button"
        class="btn btn-primary w-full sm:w-auto"
        @click="addFifty"
      >
        ➕ Ajouter +50
      </button>
      <button
        type="button"
        class="btn btn-outline w-full sm:w-auto"
        @click="setRandomValue"
      >
        🎲 Valeur aléatoire
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// enregistrement
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

// tableau des mois affichés sous les barres
const months = ["Janvier", "Février", "Mars", "Avril", "Mai"];

// tableau des ventes réalisées
const sales = ref([1200, 1500, 900, 2000, 1800]);

// objet des données
const chartData = computed(() => ({
  labels: months,
  datasets: [
    {
      label: "Ventes (€)",
      data: sales.value,
      backgroundColor: "#2563eb",
    },
  ],
}));

// ajoute 50 à la dernière vente (Mai)
const addFifty = () => {
  const lastIndex = sales.value.length - 1;
  sales.value = sales.value.map((value, index) =>
    index === lastIndex ? value + 50 : value,
  );
};
//console.log(sales.value);

// remplace une vente tirée au hasard par une valeur aléatoire
const setRandomValue = () => {
  const randomIndex = Math.floor(Math.random() * sales.value.length);
  const randomValue = Math.floor(Math.random() * 2001);
  sales.value = sales.value.map((value, index) =>
    index === randomIndex ? randomValue : value,
  );
};
</script>
