<template>
  <div class="flex bg-slate-950 flex-col items-center min-h-screen font-montserrat" data-theme="dark">
    <NavBar @open-contact="showContactModal = true" />
    <div class="container py-8">
      <RouterView/>
    </div>
    <MainFooter @open-contact="showContactModal = true" />

    <!-- Global Contact Modal -->
    <ContactModal :show="showContactModal" @close="showContactModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import MainFooter from './components/MainFooter.vue';
import ContactModal from './components/contact/ContactModal.vue';

const showContactModal = ref(false);
</script>
