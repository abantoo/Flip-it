<template>
  <section id="about-values" class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-lg font-bold text-primary uppercase tracking-[0.2em] mb-4">Core Values</h2>
      <h3 class="text-4xl md:text-5xl font-black text-slate-900 mb-16">What We Stand For</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="p-10 rounded-[2.5rem] bg-white border-2 border-slate-100 hover:border-primary transition-all duration-500 group text-left"
        >
          <div
            class="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg shadow-primary/20"
          >
            <component :is="value.icon" :size="40" weight="duotone" />
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4">{{ value.title }}</h4>
          <p class="text-lg text-slate-600 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhLightbulb, PhHandshake, PhUsersThree } from '@phosphor-icons/vue';

const values = [
  {
    title: 'Trust-First Trading',
    description:
      'Every listing is verified by our experts. We eliminate the guesswork and risk from second-hand tech trading.',
    icon: PhHandshake,
  },
  {
    title: 'Modern Sustainability',
    description:
      "Extending the lifecycle of technology is our core mission. We're building a future where no tech goes to waste.",
    icon: PhLightbulb,
  },
  {
    title: 'Local Empowerment',
    description:
      "We are democratizing access to high-end hardware for Bangladesh's students, creators, and professionals.",
    icon: PhUsersThree,
  },
];
</script>
