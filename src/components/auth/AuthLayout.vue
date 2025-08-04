<template>
  <div class="flex items-center justify-center bg-slate-50 relative overflow-hidden p-4">
    <!-- Main Container -->
    <div
      class="max-w-5xl w-full relative z-10 flex flex-col lg:flex-row bg-white border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] overflow-hidden min-h-[550px]"
    >
      <!-- Left Column: Branding -->
      <div
        class="lg:w-1/2 p-8 lg:p-12 bg-slate-50 text-slate-900 flex flex-col justify-between relative overflow-hidden"
      >
        <!-- Topography Background -->
        <TopographyPattern color="var(--color-primary)" :opacity="0.12" size="500px" />

        <div class="relative z-10">
          <RouterLink to="/" class="inline-block mb-12 group">
            <img
              class="h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105"
              src="../../assets/logo.png"
              alt="FlipIt Logo"
            />
          </RouterLink>

          <div class="space-y-4">
            <h2 class="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
              {{ title }}
            </h2>
            <p class="text-lg text-slate-600 font-medium max-w-sm">
              {{ subtitle }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column: Form -->
      <div class="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center bg-white">
        <!-- Slot for Form Content -->
        <div class="w-full">
          <slot></slot>
        </div>

        <!-- Footer Area -->
        <div v-if="$slots.footer" class="mt-8 pt-6 border-t-2 border-slate-100">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopographyPattern from '../ui/TopographyPattern.vue';

defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
