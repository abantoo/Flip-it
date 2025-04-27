<template>
  <button
    :type="type"
    :disabled="disabled"
    class="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 rounded-xl group overflow-hidden"
    :class="[
      variant === 'primary' 
        ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500' 
        : 'bg-slate-800 hover:bg-slate-700 border border-slate-700',
      disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 shadow-lg hover:shadow-amber-500/25'
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
