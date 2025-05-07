<template>
  <button
    :type="type"
    :disabled="disabled"
    class="relative inline-flex items-center justify-center px-8 py-3 font-bold transition-all duration-300 rounded-xl group overflow-hidden"
    :class="[
      variant === 'primary' 
        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-amber-200' 
        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm',
      disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 shadow-lg hover:shadow-amber-500/20'
    ]"
    @click="$emit('click', $event)"
  >
    <!-- Shine Effect -->
    <div class="absolute inset-0 w-full h-full transition-all duration-300 group-hover:bg-white/10"></div>
    
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  disabled: false
});

defineEmits(['click']);
</script>
