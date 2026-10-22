// Dans ce fichier on va lister toutes les routes de notre application
import { createRouter, createWebHistory } from "vue-router";
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Cette route n'est pas en lazy loading, elle est directement importée en haut du fichier
    {
      path: "/home",
      alias: "/",
      component: Home,
    },
    // ! Ces routes sont en lazy loading, elle sera chargée uniquement quand on ira sur la page /about
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/lesson-attribute-binding",
      component: () => import("../views/lessons/lesson-attribute-binding.vue"),
    },
    {
      path: "/lesson-setup",
      component: () => import("../views/lessons/lesson-setup.vue"),
    },
    {
      path: "/lesson-introduction",
      component: () => import("../views/lessons/lesson-introduction.vue"),
    },
    {
      path: "/lesson-syntax",
      component: () => import("../views/lessons/lesson-syntax.vue"),
    },
    {
      path: "/lesson-text-interpolation",
      component: () => import("../views/lessons/lesson-text-interpolation.vue"),
    },
    {
      path: "/exercice-text-interpolation",
      component: () =>
        import("../views/exercices/exercice-text-interpolation.vue"),
    },
    {
      path: "/exercice-attribute-binding",
      component: () =>
        import("../views/exercices/exercice-attribute-binding.vue"),
    },
    {
      path: "/exercice-event-binding",
      component: () => import("../views/exercices/exercice-event-binding.vue"),
    },
    {
      path: "/tp-data-binding",
      component: () => import("../views/tp/tp-data-binding.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/not-found.vue"),
    },
    {
      path: "/lesson-dynamic-style",
      component: () => import("../views/lessons/lesson-dynamic-styling.vue"),
    },
    {
      path: "/lesson-two-way-binding",
      component: () => import("../views/lessons/lesson-two-way-binding.vue"),
    },
    {
      path: "/lesson-conditional-rendering",
      component: () =>
        import("../views/lessons/lesson-conditional-rendering.vue"),
    },
    {
      path: "/exercice-dynamic-styling",
      component: () =>
        import("../views/exercices/exercice-dynamic-styling.vue"),
    },
    {
      path: "/tp-dynamic-styling",
      component: () => import("../views/tp/tp-dynamic-styling.vue"),
    },
    {
      path: "/exercice-v-if",
      component: () => import("../views/exercices/exercice-v-if.vue"),
    },
    {
      path: "/exercice-bug-computed",
      component: () => import("../views/exercices/exercice-computed-bug.vue"),
    },
    {
      path: "/exercice-compteur-watcher",
      component: () =>
        import("../views/exercices/exercice-compteur-watcher.vue"),
    },
    {
      path: "/tp-reactivite",
      component: () => import("../views/tp/tp-reactivite.vue"),
    },
    {
      path: "/exercice-lifecycle-api",
      component: () => import("../views/exercices/exercice-lifecycle-api.vue"),
    },
  ],
});
export default router;
