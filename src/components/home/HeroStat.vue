<template>
  <div class="flex flex-col items-start group">
    <span class="text-2xl font-black text-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:translate-x-0.5">
      {{ value }}
    </span>
    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-primary/80 transition-colors">
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
