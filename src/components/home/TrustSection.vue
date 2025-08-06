<template>
  <section
    class="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-slate-200/10 relative overflow-hidden"
  >
    <!-- Background Glow for "Pop" -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none"
    ></div>

    <div
      v-for="prop in trustProps"
      :key="prop.title"
      class="group relative flex flex-col items-center text-center p-8 rounded-[2rem] bg-[var(--color-surface)] border border-slate-200/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-[var(--color-surface)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary-rgb)]/10"
    >
      <!-- Icon Container with Animated Gradient -->
      <div class="relative mb-6">
        <div
          class="absolute inset-0 bg-primary blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"
        ></div>
        <div
          class="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-primary border border-slate-200 dark:border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-500 ring-4 ring-primary/10"
        >
          <component :is="prop.icon" :size="32" weight="duotone" />
        </div>
      </div>

      <!-- Content -->
      <h3
        class="text-[var(--color-text)] text-xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors italic"
      >
        {{ prop.title }}
      </h3>
      <p class="text-[var(--color-text)] opacity-70 text-sm leading-relaxed max-w-[240px]">
        {{ prop.description }}
      </p>

      <!-- Bottom Interactive Element -->
      <div
        class="mt-6 w-8 h-1 bg-slate-200 dark:bg-slate-700 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhShieldCheck, PhLightning, PhCurrencyCircleDollar } from '@phosphor-icons/vue';

const trustProps = [
  {
    title: 'Verified Quality',
    description: 'Every 2nd-hand item is checked by our expert technicians.',
    icon: PhShieldCheck,
  },
  {
    title: 'Instant Delivery',
    description: 'Lightning fast shipping across all 64 districts of Bangladesh.',
    icon: PhLightning,
  },
  {
    title: 'Best Value',
    description: 'Get the highest performance for every Taka you spend.',
    icon: PhCurrencyCircleDollar,
  },
];
</script>
