<template>
  <div
    class="relative h-full bg-slate-50/50 backdrop-blur-md border-y border-r border-slate-200 p-6 rounded-tr-2xl rounded-l-none rounded-br-none overflow-hidden"
  >
    <TopographyPattern color="var(--color-primary)" :opacity="0.1" size="300px" />

    <div class="relative z-10 space-y-4">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>

      <div
        v-for="item in contactDetails"
        :key="item.label"
        class="flex items-start gap-3 group cursor-default"
      >
        <div
          class="p-2.5 rounded-xl bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300"
        >
          <component :is="item.icon" :size="22" weight="duotone" />
        </div>
        <div>
          <p class="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
            {{ item.label }}
          </p>
          <p
            class="text-sm text-slate-800 font-semibold group-hover:text-amber-600 transition-colors"
          >
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhEnvelope, PhPhone, PhMapPin } from '@phosphor-icons/vue';
import TopographyPattern from '../ui/TopographyPattern.vue';
import { appConfig } from '../../config';

const contactDetails = [
  { label: 'Email', value: appConfig.supportEmail, icon: PhEnvelope },
  { label: 'Phone', value: appConfig.supportPhone, icon: PhPhone },
  { label: 'Office', value: appConfig.headOffice, icon: PhMapPin },
];
</script>
