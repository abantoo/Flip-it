<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'outline';
  glow?: boolean;
}>();

const variant = props.variant || 'outline';
</script>

<template>
  <span
    class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all duration-200"
    :class="[
      {
        'bg-brand-primary text-slate-900 border-brand-primary animate-pulse': variant === 'primary',
        'bg-brand-secondary text-white border-slate-600': variant === 'secondary',
        'bg-emerald-500/10 text-emerald-400 border-emerald-500/20': variant === 'success',
        'bg-brand-accent/10 text-brand-accent border-brand-accent/20': variant === 'warning',
        'bg-sky-500/10 text-sky-400 border-sky-500/20': variant === 'info',
        'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500':
          variant === 'outline',
      },
      glow && {
        'shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)]': variant === 'primary',
        'shadow-[0_0_15px_rgba(var(--color-secondary-rgb),0.4)]': variant === 'secondary',
        'shadow-[0_0_15px_rgba(16,185,129,0.3)]': variant === 'success',
        'shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.3)]': variant === 'warning',
        'shadow-[0_0_15px_rgba(14,165,233,0.3)]': variant === 'info',
      },
    ]"
  >
    <slot />
  </span>
</template>
