<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'outline';
  glow?: boolean;
}>();

const variant = props.variant || 'outline';

const variants = {
  primary: 'bg-amber-400 text-slate-900 border-amber-400 animate-pulse',
  secondary: 'bg-slate-700 text-white border-slate-600',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  info: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  outline: 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500',
};

const glowClasses = {
  primary: 'shadow-[0_0_15px_rgba(251,191,36,0.4)]',
  secondary: 'shadow-[0_0_15px_rgba(71,85,105,0.4)]',
  success: 'shadow-[0_0_15px_rgba(16,185,129,0.3)]',
  warning: 'shadow-[0_0_15px_rgba(245,158,11,0.3)]',
  info: 'shadow-[0_0_15px_rgba(14,165,233,0.3)]',
  outline: 'shadow-none',
};
</script>

<template>
  <span 
    class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all duration-200"
    :class="[variants[variant], glow ? glowClasses[variant] : '']"
  >
    <slot />
  </span>
</template>
