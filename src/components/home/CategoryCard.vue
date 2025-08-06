<template>
  <RouterLink
    :to="to"
    class="group relative h-40 overflow-hidden rounded-2xl bg-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
  >
    <!-- Background Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-900/80 z-10 transition-all duration-500 group-hover:opacity-60 group-hover:backdrop-blur-[2px]"
    ></div>

    <!-- Image -->
    <img
      :src="image"
      :alt="title"
      class="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
    />

    <!-- Content -->
    <div class="absolute inset-0 z-20 flex flex-col justify-end p-5">
      <div
        class="mb-1 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary opacity-0 transition-all duration-500 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
      >
        Browse Collection
      </div>
      <h3
        class="text-xl font-black text-white transition-all duration-500 group-hover:translate-x-1"
      >
        {{ title }}
      </h3>
    </div>

    <!-- Decorative Corner Element -->
    <div
      class="absolute top-0 right-0 p-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <div
        class="p-1.5 rounded-full bg-primary text-slate-900 transition-transform duration-500 group-hover:rotate-45"
      >
        <PhArrowUpRight :size="16" weight="bold" />
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue';

defineProps<{
  title: string;
  image: string;
  to: string;
}>();
</script>
