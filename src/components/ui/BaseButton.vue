<template>
  <component
    :is="componentTag"
    v-bind="componentProps"
    :class="[
      'relative group inline-flex items-center justify-center font-bold transition-all duration-300',
      'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
      sizeClasses[size],
      className
    ]"
    @click="$emit('click', $event)"
  >
    <!-- Background Offset Shadow -->
    <span 
      :class="[
        'absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform -translate-x-2 -translate-y-2',
        variantClasses[variant].bg,
        disabled || loading ? '' : 'group-hover:translate-x-0 group-hover:translate-y-0'
      ]"
    ></span>
    
    <!-- Border Frame -->
    <span 
      :class="[
        'absolute inset-0 w-full h-full border-2 border-slate-900',
        variantClasses[variant].border
      ]"
    ></span>
    
    <!-- Content Area -->
    <span class="relative flex items-center justify-center gap-2 text-slate-900 whitespace-nowrap">
      <template v-if="loading">
        <svg class="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </template>
      <template v-else>
        <component 
          v-if="icon && iconPosition === 'left'" 
          :is="icon" 
          :size="iconSize" 
          weight="bold" 
          class="transition-transform group-hover:scale-110"
        />
        <slot>Button Text</slot>
        <component 
          v-if="icon && iconPosition === 'right'" 
          :is="icon" 
          :size="iconSize" 
          weight="bold" 
          class="transition-transform group-hover:translate-x-1"
        />
      </template>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  to?: string | object;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  icon?: any;
  iconPosition?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  iconPosition: 'right',
  class: ''
});

defineEmits(['click']);

const componentTag = computed(() => {
  if (props.to) return 'RouterLink';
  if (props.href) return 'a';
  return 'button';
});

const componentProps = computed(() => {
  const p: any = {};
  if (props.to) p.to = props.to;
  if (props.href) p.href = props.href;
  if (componentTag.value === 'button') {
    p.type = props.type;
    p.disabled = props.disabled || props.loading;
  }
  return p;
});

const className = computed(() => props.class);

const iconSize = computed(() => {
  const sizes = { sm: 16, md: 20, lg: 24, xl: 28 };
  return sizes[props.size];
});

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
};

const variantClasses = {
  primary: {
    bg: 'bg-primary',
    border: 'border-slate-900'
  },
  secondary: {
    bg: 'bg-secondary',
    border: 'border-slate-900'
  },
  accent: {
    bg: 'bg-accent',
    border: 'border-slate-900'
  },
  outline: {
    bg: 'bg-white',
    border: 'border-slate-900'
  },
  ghost: {
    bg: 'bg-slate-50',
    border: 'border-slate-200 shadow-sm translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:-translate-y-1'
  },
  success: {
    bg: 'bg-success',
    border: 'border-slate-900'
  }
};
</script>

<style scoped>
/* Individual transition for shadow */
.transform {
  will-change: transform;
}
</style>
