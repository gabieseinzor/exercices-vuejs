# Gabie.vue

Hub d'apprentissage de Vue.js : leçons, exercices et travaux pratiques réunis dans une seule application, construite pas à pas pendant ma formation Concepteur Développeur d'Applications (CDA) à l'ADRAR Toulouse.

**Site en ligne : https://gabie-vue-hub.vercel.app**

## Encadrement et contenus

Ce projet s'appuie sur la formation dispensée par **Jefffff**, mon formateur à l'**ADRAR Toulouse**, dans le cadre du titre CDA :

- **Leçons** : les cours (pages et contenus) sont produits par Jefffff.
- **Exercices et TP** : les énoncés sont fournis par Jefffff. Les solutions, le code des composants et l'intégration dans le hub sont réalisés par mes soins.
- **Hub** : l'architecture, la navigation, la mise en page et le déploiement sont mon travail.

## Contenu du hub

- **Leçons** : les notions du module, classées par thème
- **Exercices** : une mise en pratique après chaque notion
- **TP** : des mises en situation plus complètes qui combinent plusieurs notions

## Notions mises en pratique

- Interpolation, `v-bind`, `v-on`, `v-model`, `v-if` / `v-show`, `v-for`
- Style et classes dynamiques
- `ref`, `computed`, `watch` et cycle de vie (`onMounted`)
- Appels d'API avec `fetch` (PokéAPI, Open-Meteo, Digi-API)
- Graphique avec `vue-chartjs`
- Composants, props et événements (`defineProps`, `defineEmits`)
- Vue Router : routes, lazy loading, routes dynamiques avec paramètres transmis en props

## Technologies

Vue 3 (Composition API), Vite, Vue Router, Tailwind CSS, DaisyUI, vue-chartjs et Chart.js. Déploiement sur Vercel.

## Lancer le projet en local

```bash
git clone https://github.com/gabieseinzor/gabie-vue-hub.git
cd gabie-vue-hub
npm install
npm run dev
```

Pour produire la version de production : `npm run build`.

## Structure

```
src/
├── router/        routes de l'application
├── views/         pages (leçons, exercices, TP)
└── components/    composants réutilisables
```

## Améliorations prévues

Pour passer d'un recueil d'exercices à un vrai projet Vue :

- **Navigation** : menu avec trois sections déroulantes (Leçons, Exercices, TP) et pages d'accueil de chaque section
- **Pages** : accueil, à propos, contact et pages légales
- **Gestion d'état** : Pinia pour partager des données entre les pages
- **Persistance** : sauvegarde avec `localStorage`, puis base de données Firebase avec un CRUD complet
- **Structure du code** : composables pour réutiliser la logique, découpage plus fin des composants
- **Qualité** : gestion des états de chargement et d'erreur pour les appels d'API, tests
- **Interface** : page 404 soignée, titre et icône propres à l'onglet
- **Une vraie application** : transformer un TP (par exemple la liste de courses) en application complète présentée dans le hub

## Auteure

**Gabrielle Kibouka Seinzor** (Gabie Seinzor) : [GitHub](https://github.com/gabieseinzor)
