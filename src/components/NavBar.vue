<template>
  <header class="w-full sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-xl">
    <!-- Top Bar -->
    <div class="bg-slate-950 text-white py-1.5 px-4 lg:px-10 hidden md:block">
      <div class="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] lg:text-xs font-medium tracking-wide uppercase">
        <div class="flex gap-6">
          <span class="flex items-center gap-1.5 opacity-80">
            Free Shipping Over $150
          </span>
          <span class="flex items-center gap-1.5 opacity-80">
            30-Day Returns
          </span>
        </div>
        <div class="flex gap-6">
          <a href="#" class="opacity-70">Track Order</a>
          <a href="#" class="opacity-70">Store Locator</a>
          <a href="#" class="opacity-70 font-bold text-amber-400">Join Rewards</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="h-20 px-4 lg:px-10 flex items-center justify-center">
      <div class="max-w-[1440px] w-full flex items-center justify-between gap-8">
        <!-- Logo -->
        <RouterLink to="/" class="shrink-0 group relative">
          <img class="h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105" src="/flip_it_text.png" alt="flip-it-bd" />
          <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
        </RouterLink>

        <div class="flex-1"></div>

        <div class="flex items-center gap-8 text-white">
          ICONS
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  PhShoppingCart,
  PhUserCircle,
} from '@phosphor-icons/vue';
const router = useRouter();
</script>
