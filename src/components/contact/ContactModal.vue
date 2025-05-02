<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="flex flex-col md:flex-row">
      <!-- Left Side: Header & Form -->
      <div class="flex-1 min-w-0">
        <ContactHeader />
        <div class="px-8 pb-12 md:px-12">
          <ContactForm />
        </div>
      </div>

      <!-- Right Side: Info Card -->
      <div class="w-full md:w-80 lg:w-96 bg-slate-800/30">
        <ContactInfoCard />
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '../ui/BaseModal.vue';
import ContactHeader from './ContactHeader.vue';
import ContactForm from './ContactForm.vue';
import ContactInfoCard from './ContactInfoCard.vue';

defineProps<{
  show: boolean;
}>();

defineEmits(['close']);
</script>
