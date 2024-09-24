<template>
  <div class="bg-black w-screen font-montserrat">
    <NavBar/>
    <RouterView class="pt-4 text-white pb-4 min-h-[calc(100vh-125.5px)]"/>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

