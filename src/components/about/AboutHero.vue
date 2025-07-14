<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background Accents -->


    <div class="container relative z-10 mx-auto px-6 text-center">

      
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
        Empowering Bangladesh's <br/>
        <span class="text-primary">Tech Enthusiasts</span>
      </h1>
      
      <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
        {{ `${appConfig.appName}` }} is more than just a marketplace. We are a community dedicated to sustainable tech, 
        ensuring everyone has access to verified, high-quality components.
      </p>


    </div>
  </section>
</template>

<script setup lang="ts">
import { appConfig } from '../../config';

</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}
</style>
