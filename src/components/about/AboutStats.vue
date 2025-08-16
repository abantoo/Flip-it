<template>
  <section class="py-16 bg-white border-y border-slate-100">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div v-for="stat in stats" :key="stat.label" class="text-center group">
          <div
            class="inline-flex p-4 rounded-2xl bg-slate-50 text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2"
          >
            <component :is="stat.icon" :size="32" weight="duotone" />
          </div>
          <p class="text-4xl font-black text-slate-900 mb-2">{{ stat.value }}</p>
          <p class="text-sm font-bold text-slate-500 uppercase tracking-widest">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhUsersThree, PhCpu, PhShieldCheck, PhHandshake } from '@phosphor-icons/vue';

const stats = [
  { label: 'Happy Users', value: '15k+', icon: PhUsersThree },
  { label: 'Verified Items', value: '8k+', icon: PhCpu },
  { label: 'Secure Trades', value: '25k+', icon: PhHandshake },
  { label: 'Expert Checks', value: '100%', icon: PhShieldCheck },
];
</script>
