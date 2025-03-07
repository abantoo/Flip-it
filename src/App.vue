<template>
  <div class="flex bg-violet-50 flex-col items-center min-h-screen font-montserrat" data-theme="light">
    <NavBar />
    <div class="container py-8">
      <RouterView/>
    </div>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import MainFooter from './components/MainFooter.vue';
</script>

