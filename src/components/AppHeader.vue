<template>
  <div class="navbar bg-base-100 shadow-sm">
    <a class="btn btn-ghost text-xl">Gabie.vue</a>
    <RouterLink to="/home" class="btn btn-ghost">Home</RouterLink>

    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn btn-ghost">Leçons</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 w-64 p-2 shadow-sm">
        <li v-for="lesson in lessons" :key="lesson.to">
          <RouterLink :to="lesson.to">{{ lesson.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <RouterLink to="/about" class="btn btn-ghost">About</RouterLink>
    <RouterLink to="/contact" class="btn btn-ghost">Contact</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const lessons = [
  { label: 'Introduction', to: '/lesson-introduction' },
  { label: 'Setup', to: '/lesson-setup' },
  { label: 'Syntax', to: '/lesson-syntax' },
  { label: 'Text interpolation', to: '/lesson-text-interpolation' },
  { label: 'Attribute binding', to: '/lesson-attribute-binding' },
  { label: 'Event binding', to: '/lesson-event-binding' },
  { label: 'Two-way binding', to: '/lesson-two-way-binding' },
  { label: 'Conditional rendering', to: '/lesson-conditional-rendering' },
  { label: 'List rendering', to: '/lesson-list-rendering' },
  { label: 'Dynamic styling', to: '/lesson-dynamic-style' },
]
</script>