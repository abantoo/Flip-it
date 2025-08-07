<template>
  <div class="flex items-center justify-between mb-8">
    <div class="group cursor-default">
      <h2
        class="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2 transition-colors duration-300 group-hover:text-brand-primary"
      >
        <span
          class="w-1.5 h-6 bg-brand-primary rounded-full transition-all duration-300 group-hover:h-8 group-hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]"
        ></span>
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="mt-1 text-slate-400 text-sm font-medium ml-3.5 italic opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      >
        {{ subtitle }}
      </p>
      <p v-if="description" class="mt-2 text-slate-500 text-xs max-w-md ml-3.5 leading-relaxed">
        {{ description }}
      </p>
    </div>

    <RouterLink
      v-if="to"
      :to="to"
      class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-accent transition-colors group"
    >
      View All
      <PhCaretRight
        :size="14"
        weight="bold"
        class="transition-transform duration-300 group-hover:translate-x-1"
      />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue';

defineProps<{
  title: string;
  subtitle?: string;
  description?: string;
  to?: string;
}>();
</script>
