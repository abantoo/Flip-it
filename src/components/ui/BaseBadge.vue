<template>
  <span 
    class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all duration-200"
    :class="variants[variant]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'outline';
}>();

const variant = props.variant || 'outline';

const variants = {
  primary: 'bg-amber-400 text-slate-900 border-amber-400 shadow-sm shadow-amber-400/20 animate-pulse',
  secondary: 'bg-slate-700 text-white border-slate-600',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  info: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  outline: 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500',
};
</script>
