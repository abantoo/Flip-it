<template>
  <section 
    class="w-full mb-16 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-sm flex flex-col min-h-[600px] lg:h-[700px] hero-patterns"
  >
    <div class="flex-grow flex flex-col items-center justify-center px-6 text-center pt-16">
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-4 max-w-4xl">
        Level Up Your Rig with 
        <span class="text-transparent bg-clip-text bg-[var(--gradient-primary)] mt-4">
          <img class="mt-4" src="../../assets/logo.png" alt="">
        </span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-600 font-medium mb-8 max-w-2xl leading-relaxed">
        Premium 2nd-hand and brand new components verified by experts. The smartest way to build your dream PC in Bangladesh.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md animate-float">
        <button class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary hover:bg-accent text-white font-black text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2 group">
          Browse items 
          <PhArrowRight :size="20" weight="bold" class="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <button class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-lg transition-all duration-300 border border-slate-200 shadow-sm">
          Sell Your Gear
        </button>
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

const stats = [
  { label: 'Verified Tech', value: '1,200+' },
  { label: 'Happy Builders', value: '4.9/5' },
  { label: 'Safe Escrow', value: 'Instant' },
  { label: 'Expert Checks', value: '100% Guaranteed' },
];
</script>

<style scoped>
.hero-patterns {
  background-image:
    radial-gradient(circle at 50% 120%, rgba(var(--color-primary-rgb), 0.1), transparent),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 45.4C1.5 45.3 3.1 45.2 4.6 45.1C23.6 43.6 40.5 32.7 48.7 15.1C50 12.3 51 9.4 51.7 6.4C52 5 52.3 3.6 52.5 2.1C52.7 0.7 52.8-0.7 53 0.7C53.2 2.1 53.5 3.5 53.8 4.9C54.8 9.1 56.4 13.1 58.7 16.7C67.5 30.5 82.2 39.5 98.2 41.5C98.8 41.6 99.4 41.6 100 41.7V42.3C99.4 42.2 98.8 42.2 98.2 42.1C82 40.1 67 31 58 17.1C55.7 13.5 54.1 9.5 53.1 5.3C52.8 3.9 52.5 2.5 52.3 1.1C52.1 2.5 51.8 3.9 51.5 5.3C50.8 8.4 49.8 11.4 48.5 14.3C40.2 32.2 23.1 43.2 3.9 44.7C2.6 44.8 1.3 44.8 0 44.9V45.4Z' fill='%230f172a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"),
    radial-gradient(circle at 0% 0%, rgba(var(--color-primary-rgb), 0.05), transparent 400px),
    radial-gradient(circle at 100% 50%, rgba(var(--color-primary-rgb), 0.05), transparent 400px);
  background-size: 100% 100%, 10rem 10rem, 100% 100%, 100% 100%;
}

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
