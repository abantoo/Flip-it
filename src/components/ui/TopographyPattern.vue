<template>
  <div
    class="absolute inset-0 pointer-events-none topography-pattern-container"
    :style="containerStyle"
  >
    <div class="w-full h-full topography-pattern-mask" :style="maskStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  color?: string;
  opacity?: number;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'var(--color-primary)',
  opacity: 0.08,
  size: '600px',
});

const containerStyle = computed(() => ({
  opacity: props.opacity,
  zIndex: 0,
}));

const maskStyle = computed(() => ({
  backgroundColor: props.color,
  maskImage: `url('/src/assets/topography.svg')`,
  maskRepeat: 'repeat',
  maskSize: props.size,
  WebkitMaskImage: `url('/src/assets/topography.svg')`,
  WebkitMaskRepeat: 'repeat',
  WebkitMaskSize: props.size,
}));
</script>

<style scoped>
.topography-pattern-container {
  overflow: hidden;
}
.topography-pattern-mask {
  width: 100%;
  height: 100%;
}
</style>
