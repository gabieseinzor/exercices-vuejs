<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="w-full max-w-xl mx-auto flex flex-col gap-6">
      <h1 class="text-2xl md:text-3xl font-bold text-center">
        Détails de l'élément
        <span class="text-primary">{{ name }}</span>
      </h1>

      <div class="card bg-base-100 shadow-md">
        <div class="card-body gap-4">
          <p class="font-bold text-lg">
            Identifiant (ID) :
            <span class="badge badge-success text-white ml-1">{{ id }}</span>
          </p>

          <p class="opacity-80">
            Ceci est une page de détail dynamique pour l'élément identifié par
            l'ID <strong>{{ id }}</strong> (Nom : <strong>{{ name }}</strong
            >).
          </p>

          <RouterLink
            to="/tp-router-props"
            class="btn btn-outline btn-info btn-sm self-start"
          >
            ← Retour à la liste
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
