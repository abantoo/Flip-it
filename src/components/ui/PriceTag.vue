<template>
  <div class="flex items-baseline gap-1 font-montserrat">
    <span class="text-xs font-bold text-amber-400">৳</span>
    <span :class="sizeClasses[size]" class="font-extrabold tracking-tight text-white">
      {{ formattedPrice }}
    </span>
    <span v-if="oldPrice" class="ml-2 text-xs text-slate-500 line-through decoration-slate-600">
      ৳{{ oldPrice.toLocaleString() }}
    </span>
    <span v-if="suffix" class="ml-1 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
      {{ suffix }}
    </span>
    <span v-if="discountPercent" class="ml-3 px-1.5 py-0.5 rounded-md bg-rose-500/10 text-rose-500 text-[10px] font-black uppercase tracking-wider border border-rose-500/20">
      -{{ discountPercent }}%
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: number | string;
  oldPrice?: number | string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  suffix?: string;
  discountPercent?: number | string;
}>();

const size = props.size || 'md';

const formattedPrice = computed(() => {
  const val = typeof props.value === 'string' ? parseFloat(props.value) : props.value;
  return val.toLocaleString();
});

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
  xl: 'text-4xl',
};
</script>
