<template>
  <div class="flex flex-col items-start group">
    <span class="text-2xl font-black text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-400">
      {{ value }}
    </span>
    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
}>();
</script>
