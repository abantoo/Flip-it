<template>
  <div 
    class="flex flex-col items-center min-h-screen font-montserrat" 
    :style="themeStyles"
  >
    <NavBar @open-contact="showContactModal = true" />
    <div class="container py-8 flex-grow">
      <RouterView/>
    </div>
    <MainFooter @open-contact="showContactModal = true" />

    <!-- Global Contact Modal -->
    <ContactModal :show="showContactModal" @close="showContactModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { appConfig } from './config';
import NavBar from './components/NavBar.vue';
import MainFooter from './components/MainFooter.vue';
import ContactModal from './components/contact/ContactModal.vue';

const showContactModal = ref(false);

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

const themeStyles = computed(() => {
  const theme = appConfig.theme;
  const themeData = appConfig.themes[theme];
  
  if (!themeData) return {};

  return {
    '--color-primary': themeData.primary,
    '--color-primary-rgb': hexToRgb(themeData.primary),
    '--color-secondary': themeData.secondary,
    '--color-secondary-rgb': hexToRgb(themeData.secondary),
    '--color-tertiary': themeData.tertiary,
    '--color-tertiary-rgb': hexToRgb(themeData.tertiary),
    '--color-accent': themeData.accent,
    '--color-accent-rgb': hexToRgb(themeData.accent),
    '--color-success': themeData.success,
    '--color-success-rgb': hexToRgb(themeData.success),
    '--color-warning': themeData.warning,
    '--color-warning-rgb': hexToRgb(themeData.warning),
    '--color-info': themeData.info,
    '--color-info-rgb': hexToRgb(themeData.info),
    '--color-background': themeData.background,
    '--color-surface': themeData.surface,
    '--color-text': themeData.text,
    '--gradient-primary': themeData.gradient,
    'background-color': 'var(--color-background)',
    'color': 'var(--color-text)',
  };
});
</script>
