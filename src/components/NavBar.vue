<template>
  <header class="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
    <!-- Top Bar -->
    <TopBar />

    <!-- Main Navigation -->
    <nav class="h-16 px-4 lg:px-10 flex items-center justify-center">
      <div class="max-w-[1440px] w-full flex items-center justify-between gap-8">
        <!-- Logo -->
        <RouterLink to="/" class="shrink-0 group relative">
          <img class="h-8 lg:h-10 transition-transform duration-300 group-hover:scale-105 contrast-125" src="../assets/logo.png" :alt="`${appConfig.appName}-bd`" />
          <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></div>
        </RouterLink>

        <!-- Search Bar -->
        <SearchBar />

        <!-- Navigation Links & Icons -->
        <div class="flex items-center gap-6 lg:gap-8">
          <NavLinks @open-contact="$emit('open-contact')" />

          <!-- Icons -->
          <div class="flex items-center gap-4 border-l border-slate-200 pl-6 h-6">
            <button class="relative group p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900" aria-label="Search mobile only md:hidden">
              <PhMagnifyingGlass :size="24" class="md:hidden" />
            </button>
            <button class="relative group p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900" aria-label="Account">
              <PhUserCircle :size="24" weight="duotone" />
              <span class="absolute top-10 right-1/2 translate-x-1/2 px-2 py-1 bg-white text-xs text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-200 shadow-md">Account</span>
            </button>
            <button class="relative group p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900" aria-label="Shopping Cart">
              <PhShoppingCart :size="24" weight="duotone" />
              <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white ring-2 ring-white">0</span>
              <span class="absolute top-10 right-1/2 translate-x-1/2 px-2 py-1 bg-white text-xs text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-200 shadow-md">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { appConfig } from '../config';
defineEmits(['open-contact']);
import {
  PhShoppingCart,
  PhUserCircle,
  PhMagnifyingGlass
} from '@phosphor-icons/vue';
import TopBar from './navbar/TopBar.vue';
import SearchBar from './navbar/SearchBar.vue';
import NavLinks from './navbar/NavLinks.vue';
</script>
