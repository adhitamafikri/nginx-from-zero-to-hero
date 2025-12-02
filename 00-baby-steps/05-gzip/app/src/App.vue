<template>
  <h1>Hello to the Vue3 SPA</h1>
  <nav>
    <div>
      <RouterLink to="/">Navigate to Home Page</RouterLink>
    </div>
    <div>
      <RouterLink to="/about">Navigate to About Page</RouterLink>
    </div>
    <div>
      <RouterLink to="/posts">Navigate to Posts Page</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
