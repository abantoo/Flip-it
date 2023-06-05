<template>
  <div class="bg-black h-screen w-screen">
    <NavBar/>
    <RouterView class="pt-4 text-white"/>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

