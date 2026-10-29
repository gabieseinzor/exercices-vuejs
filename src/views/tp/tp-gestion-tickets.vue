<template>
  <section class="mx-auto max-w-4xl space-y-6 p-6">
    <h1 class="text-2xl font-bold">Dashboard de Support Technique</h1>

    <div class="stats w-full shadow">
      <div class="stat place-items-center">
        <div class="stat-title">Tickets affichés</div>
        <div class="stat-value">{{ totalDisplayedTickets }}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Part de tickets "Urgent"</div>
        <div class="stat-value text-error">{{ pourcentageHighPriority }}%</div>
      </div>
    </div>

    <div class="grid gap-4 rounded-box bg-base-200 p-4 md:grid-cols-2">
      <label class="flex flex-col gap-1">
        <span class="font-semibold">Rechercher un ticket :</span>

        <input
          v-model="searchedText"
          type="text"
          class="input w-full"
          placeholder="Ex: base de données..."
        />
      </label>

      <label class="flex flex-col gap-1">
        <span class="font-semibold">Filtrer par priorité :</span>
        <select class="select w-full" v-model="selectedPriority">
          <option value="">-- Toutes les priorités --</option>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
      </label>
    </div>

    <div class="space-y-3">
      <h2 class="font-semibold">
        Liste des incidents ({{ totalDisplayedTickets }})
      </h2>

      <TicketCard
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :titre="ticket.titre"
        :categorie="ticket.categorie"
        :priorite="ticket.priorite"
      />

      <p
        v-show="filteredTickets.length === 0"
        class="py-6 text-center opacity-70"
      >
        Aucun ticket ne correspond à votre recherche.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import TicketCard from "../../components/TicketCard.vue";

const searchedText = ref("");

// Priorité choisie dans le menu déroulant ("" = toutes)
const selectedPriority = ref("");

// 1° Données initiales (Mock de tickets)
const tickets = ref([
  {
    id: 1,
    titre: "Impossible de se connecter à la base de données",
    categorie: "Infrastructure",
    priorite: "Haute",
  },
  {
    id: 2,
    titre: "Erreur 500 lors de la validation du panier",
    categorie: "Backend",
    priorite: "Haute",
  },
  {
    id: 3,
    titre: "Le bouton de déconnexion est mal aligné sur mobile",
    categorie: "UI/UX",
    priorite: "Basse",
  },
  {
    id: 4,
    titre: "Lenteur excessive sur l'affichage du tableau de bord",
    categorie: "Performance",
    priorite: "Moyenne",
  },
  {
    id: 5,
    titre: "Le formulaire de contact n'envoie pas d'email",
    categorie: "Backend",
    priorite: "Moyenne",
  },
  {
    id: 6,
    titre: "Mettre à jour le logo dans le header",
    categorie: "UI/UX",
    priorite: "Basse",
  },
]);

// Tickets filtrés par texte (titre) et par priorité
const filteredTickets = computed(() => {
  return tickets.value.filter((ticket) => {
    // Le titre contient le texte saisi (sans tenir compte des majuscules)
    const matchedText = ticket.titre
      .toLowerCase()
      .includes(searchedText.value.toLowerCase());

    // Toutes les priorités, ou celle qui correspond au choix
    const matchedPriority =
      selectedPriority.value === "" ||
      ticket.priorite === selectedPriority.value;

    return matchedText && matchedPriority;
  });
});

// Nombre de tickets affichés après filtrage
const totalDisplayedTickets = computed(() => filteredTickets.value.length);

// Tickets affichés dont la priorité est "Haute"
const highPriorityTickets = computed(() => {
  return filteredTickets.value.filter((ticket) => ticket.priorite === "Haute");
});

// Part de tickets "Haute" parmi les tickets affichés, arrondie à l'entier inférieur (0 si la liste est vide)
const pourcentageHighPriority = computed(() => {
  if (totalDisplayedTickets.value !== 0) {
    return Math.floor(
      (highPriorityTickets.value.length / totalDisplayedTickets.value) * 100,
    );
  } else {
    return 0;
  }
});
</script>
