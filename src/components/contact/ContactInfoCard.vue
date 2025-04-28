<template>
  <div class="h-full bg-slate-800/20 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl">
    <h3 class="text-xl font-bold text-white mb-6">Contact Information</h3>
    
    <div class="space-y-6">
      <div v-for="item in contactDetails" :key="item.label" class="flex items-start gap-4 group">
        <div class="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300">
          <component :is="item.icon" :size="24" weight="duotone" />
        </div>
        <div>
          <p class="text-sm font-medium text-slate-400">{{ item.label }}</p>
          <p class="text-white font-semibold group-hover:text-amber-400 transition-colors">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <h4 class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Follow Us</h4>
      <div class="flex gap-4">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          href="#" 
          class="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
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
