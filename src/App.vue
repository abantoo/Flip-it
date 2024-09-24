<template>
  <div class="flex flex-col items-center min-h-screen font-montserrat" data-theme="light">
    <NavBar class="container"/>
    <div class="container">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

