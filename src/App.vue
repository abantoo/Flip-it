<template>
  <div class="flex flex-col items-center min-h-screen font-montserrat" data-theme="light">
    <NavBar class="sticky top-0"/>
    <div class="container pt-14">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

