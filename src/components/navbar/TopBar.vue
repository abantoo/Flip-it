<template>
  <div class="bg-slate-950 text-white py-1.5 px-4 lg:px-10 hidden md:block">
    <div
      class="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] lg:text-xs font-medium tracking-wide uppercase"
    >
      <div class="flex gap-4">
        <span
          class="flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-default transition-opacity"
        >
          <PhTruck :size="14" weight="bold" /> Free Shipping Over ৳1,500
        </span>
        <span
          class="flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-default transition-opacity"
        >
          <PhArrowsCounterClockwise :size="14" weight="bold" /> 30-Day Returns
        </span>
      </div>
      <div class="flex gap-6">
        <a href="#" class="opacity-70 hover:opacity-100 transition-opacity">Track Order</a>
        <a href="#" class="opacity-70 hover:opacity-100 transition-opacity">Store Locator</a>
        <a
          href="#"
          class="opacity-70 hover:opacity-100 transition-opacity font-bold text-brand-primary"
          >Join Rewards</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhTruck, PhArrowsCounterClockwise } from '@phosphor-icons/vue';
</script>
