<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-100/50 rounded-full blur-[120px]"></div>
    </div>

    <div class="container relative z-10 mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-sm font-bold mb-8 animate-fade-in-down">
        <PhRocketLaunch :size="20" weight="duotone" />
        <span>Since 2024</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
        Empowering Bangladesh's <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Tech Enthusiasts</span>
      </h1>
      
      <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
        Flip-it is more than just a marketplace. We are a community dedicated to sustainable tech, 
        ensuring everyone has access to verified, high-quality components.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-6">
        <BaseButton @click="scrollToMission">Our Mission</BaseButton>
        <BaseButton variant="secondary" @click="scrollToValues">Core Values</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhRocketLaunch } from '@phosphor-icons/vue';
import BaseButton from '../ui/BaseButton.vue';

const scrollToMission = () => {
  document.getElementById('about-mission')?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToValues = () => {
  document.getElementById('about-values')?.scrollIntoView({ behavior: 'smooth' });
};
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
