<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
    <!-- Background Patterns -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- Main Container -->
    <div class="max-w-md w-full relative z-10">
      <div class="bg-white border-4 border-slate-900 p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
        <!-- Logo/Header Area -->
        <div class="text-center mb-8">
          <RouterLink to="/" class="inline-block mb-6">
            <h1 class="text-4xl font-black text-slate-900 tracking-tighter">
              FLIP<span class="text-primary">IT</span>
            </h1>
          </RouterLink>
          <h2 class="text-2xl font-black text-slate-900">
            {{ title }}
          </h2>
          <p class="mt-2 text-slate-600 font-medium">
            {{ subtitle }}
          </p>
        </div>

        <!-- Slot for Form Content -->
        <slot></slot>

        <!-- Footer Area -->
        <div class="mt-8 pt-6 border-t-2 border-slate-100 text-center">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
