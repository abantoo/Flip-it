<template>
  <div class="h-full bg-slate-50/50 backdrop-blur-md border border-slate-200 p-8 rounded-2xl">
    <h3 class="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
    
    <div class="space-y-6">
      <div v-for="item in contactDetails" :key="item.label" class="flex items-start gap-4 group cursor-default">
        <div class="p-3 rounded-xl bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
          <component :is="item.icon" :size="24" weight="duotone" />
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">{{ item.label }}</p>
          <p class="text-slate-800 font-semibold group-hover:text-amber-600 transition-colors">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <h4 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Follow Us</h4>
      <div class="flex gap-4">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          href="#" 
          class="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-amber-600 hover:border-amber-500/50 hover:bg-amber-50 transition-all duration-300 shadow-sm"
        >
          <component :is="social.icon" :size="20" weight="bold" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  PhEnvelope, 
  PhPhone, 
  PhMapPin, 
  PhFacebookLogo, 
  PhTwitterLogo, 
  PhInstagramLogo, 
  PhLinkedinLogo 
} from '@phosphor-icons/vue';

const contactDetails = [
  { label: 'Email', value: 'support@flipit.bd', icon: PhEnvelope },
  { label: 'Phone', value: '+880 1234-567890', icon: PhPhone },
  { label: 'Office', value: 'Gulshan, Dhaka, Bangladesh', icon: PhMapPin }
];

const socialLinks = [
  { name: 'Facebook', icon: PhFacebookLogo },
  { name: 'Twitter', icon: PhTwitterLogo },
  { name: 'Instagram', icon: PhInstagramLogo },
  { name: 'LinkedIn', icon: PhLinkedinLogo }
];
</script>
