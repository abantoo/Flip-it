<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="flex flex-col md:flex-row">
      <!-- Left Side: Header & Form -->
      <div class="flex-1 min-w-0">
        <ContactHeader />
        <div class="px-6 pb-8 md:px-8">
          <ContactForm />
        </div>
      </div>

      <!-- Right Side: Info Card -->
      <div class="w-full md:w-80 lg:w-96 bg-slate-800/30">
        <ContactInfoCard />
      </div>
    </div>

    <!-- Footer: Social Links -->
    <div class="px-8 py-2 bg-slate-50 border-t border-slate-100">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Follow our journey</span>
        <div class="flex gap-3">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            href="#" 
            class="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-amber-600 hover:border-amber-500/50 hover:bg-amber-50 transition-all duration-300 shadow-sm"
          >
            <component :is="social.icon" :size="18" weight="bold" />
          </a>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '../ui/BaseModal.vue';
import ContactHeader from './ContactHeader.vue';
import ContactForm from './ContactForm.vue';
import ContactInfoCard from './ContactInfoCard.vue';
import { 
  PhFacebookLogo, 
  PhTwitterLogo, 
  PhInstagramLogo, 
  PhLinkedinLogo 
} from '@phosphor-icons/vue';

defineProps<{
  show: boolean;
}>();

defineEmits(['close']);

const socialLinks = [
  { name: 'Facebook', icon: PhFacebookLogo },
  { name: 'Twitter', icon: PhTwitterLogo },
  { name: 'Instagram', icon: PhInstagramLogo },
  { name: 'LinkedIn', icon: PhLinkedinLogo }
];
</script>
