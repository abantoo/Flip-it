<template>
  <header class="w-full sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-xl">
    <!-- Top Bar -->
    <div class="bg-slate-950 text-white py-1.5 px-4 lg:px-10 hidden md:block">
      <div class="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] lg:text-xs font-medium tracking-wide uppercase">
        <div class="flex gap-6">
          <span class="flex items-center gap-1.5 opacity-80">
            <PhTruck :size="14" weight="bold" /> Free Shipping Over $150
          </span>
          <span class="flex items-center gap-1.5 opacity-80">
            <PhArrowsCounterClockwise :size="14" weight="bold" /> 30-Day Returns
          </span>
        </div>
        <div class="flex gap-6">
          <a href="#" class="opacity-70 text-xs">Track Order</a>
          <a href="#" class="opacity-70 text-xs">Store Locator</a>
          <a href="#" class="opacity-70 text-xs font-bold text-amber-400">Join Rewards</a>
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

        <!-- Search Bar -->
        <div class="hidden md:flex flex-1 max-w-2xl items-center relative group">
          <div class="absolute left-4 z-10 text-slate-400 group-focus-within:text-amber-400 transition-colors">
            <PhMagnifyingGlass :size="18" weight="bold" />
          </div>
          <input 
            type="search" 
            class="w-full h-11 bg-slate-800/50 border border-slate-700 rounded-full pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm"
            placeholder="What are you looking for today?" 
          />
        </div>

        <!-- Navigation Links & Icons -->
        <div class="flex items-center gap-6 lg:gap-8">
          <div class="hidden lg:flex items-center gap-6 font-semibold text-sm tracking-wide uppercase text-slate-100">
            <RouterLink
              to="/"
              class="relative py-2 transition-colors hover:text-amber-300"
              :class="{ 'text-amber-300': router.currentRoute.value.name == 'home' }"
            >
              Home
              <span v-if="router.currentRoute.value.name == 'home'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"></span>
            </RouterLink>
            <RouterLink
              to="/offers"
              class="relative py-2 transition-colors hover:text-amber-300"
              :class="{ 'text-amber-300 font-bold': router.currentRoute.value.name == 'offers' }"
            >
              Offers
            </RouterLink>
            <RouterLink
              to="/about"
              class="relative py-2 transition-colors hover:text-amber-300"
              :class="{ 'text-amber-300': router.currentRoute.value.name == 'about' }"
            >
              About
            </RouterLink>
          </div>

          <div class="flex items-center gap-4 border-l border-slate-700 pl-6 h-8 text-white">
            ICONS
          </div>
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
  PhTruck,
  PhArrowsCounterClockwise,
  PhMagnifyingGlass
} from '@phosphor-icons/vue';
const router = useRouter();
</script>
