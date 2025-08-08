<template>
  <div
    class="hidden lg:flex items-center gap-6 font-semibold text-sm tracking-wide uppercase text-slate-800"
  >
    <RouterLink
      v-for="link in navLinks"
      :key="link.path"
      :to="link.path"
      class="relative py-2 transition-all duration-300 hover:text-brand-accent group"
      :class="{ 'text-brand-accent': isActive(link.name) }"
    >
      {{ link.label }}
      <!-- Hover/Active Underline -->
      <span
        class="absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300"
        :class="isActive(link.name) ? 'w-full' : 'w-0 group-hover:w-full'"
      ></span>
    </RouterLink>

    <!-- Contact Link -->
    <button
      class="relative py-2 transition-all duration-300 hover:text-brand-accent group"
      @click="$emit('open-contact')"
    >
      Contact
      <span
        class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineEmits(['open-contact']);

const router = useRouter();

const navLinks = [
  { name: 'home', path: '/', label: 'Home' },
  { name: 'offers', path: '/offers', label: 'Offers' },
  { name: 'about', path: '/about', label: 'About' },
];

const isActive = (name: string) => {
  return router.currentRoute.value.name === name;
};
</script>
