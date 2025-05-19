<template>
  <section 
    class="w-full mb-16 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-sm flex flex-col min-h-[600px] lg:h-[700px] hero-patterns"
  >
    <div class="flex-grow flex flex-col items-center justify-center px-6 text-center pt-16">
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-4 max-w-4xl">
        Level Up Your Rig with <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Flip-it</span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-600 font-medium mb-8 max-w-2xl leading-relaxed">
        Premium 2nd-hand and brand new components verified by experts. The smartest way to build your dream PC in Bangladesh.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md animate-float">
        <button class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 flex items-center justify-center gap-2 group">
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
    radial-gradient(circle at 50% 120%, rgba(251, 191, 36, 0.1), transparent),
    linear-gradient(to right, #e2e8f0 1px, transparent 1px),
    linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
    radial-gradient(circle at 0% 0%, rgba(251, 191, 36, 0.05), transparent 400px),
    radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.05), transparent 400px);
  background-size: 100% 100%, 4rem 4rem, 4rem 4rem, 100% 100%, 100% 100%;
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
