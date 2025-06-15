<template>
  <section id="about-mission" class="py-24 bg-slate-50/50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Image Area -->
        <div class="w-full lg:w-1/2 relative group">
          <div class="absolute inset-0 bg-[var(--gradient-primary)] rounded-3xl rotate-3 group-hover:rotate-1 transition-transform duration-500 scale-[0.98]"></div>
          <div class="relative aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <!-- Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-slate-400">
              <PhImage :size="64" weight="thin" />
            </div>
          </div>
          <!-- Decorative Badge -->
          <div class="absolute -bottom-6 -right-6 p-6 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-subtle">
            <div class="p-3 bg-success/10 text-success rounded-xl">
              <PhShieldCheck :size="24" weight="fill" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Quality Assurance</p>
              <p class="text-slate-900 font-black">100% Verified</p>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-lg font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Mission</h2>
          <h3 class="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Building a <span class="underline decoration-primary/30 underline-offset-8">Sustainable</span> Tech Ecosystem
          </h3>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Our mission is to reduce electronic waste and empower the local tech community in Bangladesh. 
            By providing a secure, verified marketplace for second-hand items, we ensure that every piece of 
            technology lives its longest possible life.
          </p>
          <ul class="space-y-4">
            <li v-for="item in missionPoints" :key="item" class="flex items-center gap-3 text-slate-700 font-medium">
              <PhCheckCircle :size="24" class="text-primary" weight="fill" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhImage, PhCheckCircle, PhShieldCheck } from '@phosphor-icons/vue';

const missionPoints = [
  'Rigorous quality control for every item',
  'Transparent pricing based on condition',
  'Secure and fast local delivery',
  'Dedicated community support'
];
</script>

<style scoped>
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-subtle {
  animation: bounce-subtle 3s ease-in-out infinite;
}
</style>
