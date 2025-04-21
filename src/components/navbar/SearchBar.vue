<template>
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
</template>

<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
</script>
