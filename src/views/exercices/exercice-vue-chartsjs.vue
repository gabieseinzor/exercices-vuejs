<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
      <div class="card-body gap-4">
        <h1 class="text-2xl md:text-3xl font-bold text-center text-indigo-900">
          📊 Exemple Chart.js dynamique
        </h1>

        <SalesChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import SalesChart from "../../components/SalesChart.vue";
</script>
