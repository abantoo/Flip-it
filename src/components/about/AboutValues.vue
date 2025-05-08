<template>
  <section id="about-values" class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-lg font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Core Values</h2>
      <h3 class="text-4xl md:text-5xl font-black text-slate-900 mb-16">What We Stand For</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="value in values" :key="value.title" class="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group">
          <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-8 mx-auto transform group-hover:rotate-6 transition-transform">
            <component :is="value.icon" :size="32" weight="duotone" />
          </div>
          <h4 class="text-2xl font-bold text-slate-900 mb-4">{{ value.title }}</h4>
          <p class="text-slate-600 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhEye, PhLightbulb, PhHandshake } from '@phosphor-icons/vue';

const values = [
  { 
    title: 'Transparency', 
    description: 'We believe in honest condition reports and clear pricing. No hidden costs, no surprises.', 
    icon: PhEye 
  },
  { 
    title: 'Innovation', 
    description: 'Continuously improving our verification processes to provide the safest trading experience.', 
    icon: PhLightbulb 
  },
  { 
    title: 'Integrity', 
    description: 'Trust is our currency. We stand by every verified item and every transaction on our platform.', 
    icon: PhHandshake 
  }
];
</script>
