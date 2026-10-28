<template>
  <div class="navbar bg-base-100 shadow-sm">
    <RouterLink to="/home" class="btn btn-ghost text-xl">Gabie.vue</RouterLink>

    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn btn-ghost">Leçons</div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-100 rounded-box z-10 w-64 max-h-80 overflow-y-auto flex-nowrap p-2 shadow-sm"
      >
        <li v-for="lesson in lessons" :key="lesson.to">
          <RouterLink :to="lesson.to">{{ lesson.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn btn-ghost">Exercices</div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-100 rounded-box z-10 w-64 max-h-80 overflow-y-auto flex-nowrap p-2 shadow-sm"
      >
        <li v-for="exercice in exercices" :key="exercice.to">
          <RouterLink :to="exercice.to">{{ exercice.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn btn-ghost">TP</div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-100 rounded-box z-10 w-64 p-2 shadow-sm"
      >
        <li v-for="tp in tps" :key="tp.to">
          <RouterLink :to="tp.to">{{ tp.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <RouterLink to="/about" class="btn btn-ghost">À propos</RouterLink>
    <RouterLink to="/contact" class="btn btn-ghost">Contact</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const lessons = [
  { label: "Introduction", to: "/lesson-introduction" },
  { label: "Setup", to: "/lesson-setup" },
  { label: "Syntax", to: "/lesson-syntax" },
  { label: "Text interpolation", to: "/lesson-text-interpolation" },
  { label: "Attribute binding", to: "/lesson-attribute-binding" },
  { label: "Event binding", to: "/lesson-event-binding" },
  { label: "Dynamic styling", to: "/lesson-dynamic-style" },
  { label: "Two-way binding", to: "/lesson-two-way-binding" },
  { label: "Conditional rendering", to: "/lesson-conditional-rendering" },
  { label: "List rendering", to: "/lesson-list-rendering" },
  { label: "Computed properties", to: "/lesson-computed-properties" },
  { label: "Watchers", to: "/lesson-watchers" },
  { label: "Lifecycle", to: "/lesson-lifecycle" },
  { label: "Props", to: "/lesson-props" },
  { label: "Emit", to: "/lesson-emit" },
  { label: "Router", to: "/lesson-router" },
];

const exercices = [
  { label: "Text interpolation", to: "/exercice-text-interpolation" },
  { label: "Attribute binding", to: "/exercice-attribute-binding" },
  { label: "Event binding", to: "/exercice-event-binding" },
  { label: "Dynamic styling", to: "/exercice-dynamic-styling" },
  { label: "v-if", to: "/exercice-v-if" },
  { label: "Bug computed", to: "/exercice-bug-computed" },
  { label: "Compteur watcher", to: "/exercice-compteur-watcher" },
  { label: "Lifecycle API", to: "/exercice-lifecycle-api" },
  { label: "Vue Chart.js", to: "/exercice-vuechartjs" },
  { label: "Props", to: "/exercice-props" },
  { label: "Lifecycle API + props", to: "/exercice-lifecycle-api-props" },
  { label: "Emit", to: "/exercice-emit" },
];

const tps = [
  { label: "Data binding", to: "/tp-data-binding" },
  { label: "Dynamic styling", to: "/tp-dynamic-styling" },
  { label: "Réactivité", to: "/tp-reactivite" },
  { label: "Conditional rendering", to: "/tp-conditional-rendering" },
  { label: "Router + props", to: "/tp-router-props" },
  { label: "Communication Composants", to: "/tp-communication" },
  { label: "Gestion ticketing", to: "/gestion-tickets" },
];
</script>
