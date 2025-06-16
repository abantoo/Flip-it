<template>
  <section 
    class="w-full mb-16 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-sm flex flex-col min-h-[600px] lg:h-[700px] relative"
  >
    <TopographyPattern color="var(--color-primary)" :opacity="0.08" size="600px" />
    
    <div class="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center pt-16">
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-4 max-w-4xl">
        Level Up Your Rig with 
        <span class="text-transparent bg-clip-text bg-[var(--gradient-primary)] mt-4">
          <img class="mt-4" src="../../assets/logo.png" alt="">
        </span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-600 font-medium mb-8 max-w-2xl leading-relaxed">
        Premium 2nd-hand and brand new components verified by experts. The smartest way to build your dream PC in Bangladesh.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-8 w-full max-w-md animate-float pt-4">
        <BaseButton 
          variant="primary" 
          size="lg" 
          class="w-full sm:w-auto"
          :icon="PhArrowRight"
        >
          Browse items
        </BaseButton>
        <BaseButton 
          variant="outline" 
          size="lg" 
          class="w-full sm:w-auto"
        >
          Sell Your Gear
        </BaseButton>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="mt-auto hidden lg:flex justify-between items-center px-20 pb-14">
      <HeroStat 
        v-for="stat in stats" 
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue';
import HeroStat from './HeroStat.vue';
import BaseButton from '../ui/BaseButton.vue';
import TopographyPattern from '../ui/TopographyPattern.vue';

const stats = [
  { label: 'Verified Tech', value: '1,200+' },
  { label: 'Happy Builders', value: '4.9/5' },
  { label: 'Safe Escrow', value: 'Instant' },
  { label: 'Expert Checks', value: '100% Guaranteed' },
];
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
