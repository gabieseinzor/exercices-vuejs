<template>
  <footer
    class="footer sm:footer-horizontal bg-base-300 text-base-content p-10"
  >
    <nav>
      <h6 class="footer-title">Gabie.vue</h6>
      <p class="max-w-xs text-sm">
        Hub d'apprentissage de Vue.js, construit pendant la formation CDA à
        l'ADRAR Toulouse.
      </p>
    </nav>

    <nav>
      <h6 class="footer-title">Navigation</h6>
      <RouterLink to="/home" class="link link-hover">Accueil</RouterLink>
      <RouterLink to="/about" class="link link-hover">À propos</RouterLink>
      <RouterLink to="/contact" class="link link-hover">Contact</RouterLink>
    </nav>

    <nav>
      <h6 class="footer-title">Légal</h6>
      <RouterLink to="/mentions-legales" class="link link-hover"
        >Mentions légales</RouterLink
      >
      <RouterLink to="/confidentialite" class="link link-hover"
        >Confidentialité</RouterLink
      >
    </nav>

    <nav>
      <h6 class="footer-title">Liens</h6>
      <a
        href="https://github.com/gabieseinzor/gabie-vue-hub"
        target="_blank"
        rel="noopener"
        class="link link-hover"
        >GitHub</a
      >
      <a
        href="https://www.linkedin.com/in/gabie-seinzor/"
        target="_blank"
        rel="noopener"
        class="link link-hover"
        >LinkedIn</a
      >
    </nav>
  </footer>
  <div
    class="footer footer-center bg-base-300 text-base-content border-base-content/10 border-t p-4"
  >
    <p class="text-sm">Construit avec ❤️ par Gabie Seinzor · © 2026</p>
  </div>
</template>
