<template>
    <div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">Gabie.vue</a>
  <router-link to="/home" class="btn btn-ghost">Home</router-link>
  <router-link to="/about" class="btn btn-ghost">About</router-link>
  <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
</div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>