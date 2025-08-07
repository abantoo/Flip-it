<template>
  <component
    :is="componentTag"
    v-bind="componentProps"
    :class="[
      'relative group inline-flex items-center justify-center font-bold transition-all duration-300',
      'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
        'px-10 py-5 text-xl': size === 'xl',
      },
      className,
    ]"
    @click="$emit('click', $event)"
  >
    <!-- Background Offset Shadow -->
    <span
      :class="[
        'absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-1 translate-y-1',
        {
          'bg-[#50115F]':
            variant === 'primary' ||
            variant === 'secondary' ||
            variant === 'accent' ||
            variant === 'outline',
          'bg-brand-primary/20': variant === 'ghost',
          'bg-brand-success': variant === 'success',
        },
        disabled || loading ? '' : 'group-hover:translate-x-0 group-hover:translate-y-0',
      ]"
    ></span>

    <!-- Border Frame (Main Button Body) -->
    <span
      :class="[
        'absolute inset-0 w-full h-full border-2 transition-transform duration-300 ease-out',
        {
          'bg-[#FF707A] border-slate-900': variant === 'primary',
          'bg-[#50115F] border-slate-900': variant === 'secondary',
          'bg-brand-accent border-slate-900': variant === 'accent',
          'bg-white border-slate-900': variant === 'outline',
          'bg-slate-50 border-slate-200 shadow-sm': variant === 'ghost',
          'bg-brand-success border-slate-900': variant === 'success',
        },
        disabled || loading ? '' : 'group-hover:-translate-x-0 group-hover:-translate-y-0',
      ]"
    ></span>

    <!-- Content Area -->
    <span
      :class="[
        'relative flex items-center justify-center gap-2 text-slate-900 whitespace-nowrap transition-transform duration-300 ease-out',
        disabled || loading ? '' : 'group-hover:-translate-x-0 group-hover:-translate-y-0',
      ]"
    >
      <template v-if="loading">
        <LoadingIcon />
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
import { computed, type Component } from 'vue';
import LoadingIcon from './icons/LoadingIcon.vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  to?: string | object;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  icon?: Component;
  iconPosition?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  iconPosition: 'right',
  class: '',
});

defineEmits(['click']);

const componentTag = computed(() => {
  if (props.to) return 'RouterLink';
  if (props.href) return 'a';
  return 'button';
});

const componentProps = computed(() => {
  const p: Record<string, string | object | boolean | undefined> = {};
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
  const sizes: Record<string, number> = { sm: 16, md: 20, lg: 24, xl: 28 };
  return sizes[props.size];
});
</script>
<style scoped>
/* Individual transition for shadow */
.transform {
  will-change: transform;
}
</style>
