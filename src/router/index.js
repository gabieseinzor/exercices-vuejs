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
  ],
});
export default router;
