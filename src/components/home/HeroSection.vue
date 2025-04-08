<template>
  <section class="relative w-full h-[500px] mb-16 overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl">
    <!-- Abstract Background Pattern -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.15),transparent)]"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-amber-400/10 blur-[100px] rounded-full"></div>
      <div class="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
        <PhSparkle :size="14" weight="fill" /> Bangladesh's Elite Tech Marketplace
      </div>
      
      <h1 class="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 max-w-4xl">
        Level Up Your Rig with <span class="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Flip-it</span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-2xl leading-relaxed">
        Premium 2nd-hand and brand new components verified by experts. The smartest way to build your dream PC in Bangladesh.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md animate-float">
        <button class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20 flex items-center justify-center gap-2 group">
          Browse items 
          <PhArrowRight :size="20" weight="bold" class="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <button class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg transition-all duration-300 border border-slate-700">
          Sell Your Gear
        </button>
      </div>

      <!-- Quick Stats -->
      <div class="absolute bottom-10 left-10 right-10 hidden lg:flex justify-between items-center px-10">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-start">
          <span class="text-2xl font-black text-white">{{ stat.value }}</span>
          <span class="text-xs font-bold uppercase tracking-widest text-slate-500">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight, PhSparkle } from '@phosphor-icons/vue';

const stats = [
  { label: 'Verified Tech', value: '1,200+' },
  { label: 'Happy Builders', value: '4.9/5' },
  { label: 'Expert Checks', value: '100%' },
  { label: 'Safe Escrow', value: 'Instant' },
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
