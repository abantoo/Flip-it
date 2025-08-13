<template>
  <div class="flex flex-col gap-8">
    <div>
      <h4 class="text-white font-bold mb-6">Connect With Us</h4>
      <div class="flex flex-col gap-4">
        <div v-for="office in offices" :key="office.name" class="flex items-start gap-3 group">
          <div
            class="w-10 h-10 shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all duration-300"
          >
            <component :is="office.logo" :size="20" weight="bold" />
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-0.5">{{
              office.name
            }}</span>
            <span class="text-slate-400 text-sm leading-relaxed">{{ office.location }}</span>
          </div>
        </div>

        <div class="flex items-start gap-3 group mt-2">
          <div
            class="w-10 h-10 shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all duration-300"
          >
            <PhEnvelopeSimple :size="20" weight="bold" />
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-0.5"
              >Contact Support</span
            >
            <span class="text-slate-400 text-sm leading-relaxed">{{ email }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Socials -->
    <div class="flex items-center gap-3">
      <a
        v-for="social in socials"
        :key="social.name"
        href="#"
        class="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        :class="{
          'hover:bg-[#1877F2]': social.name === 'facebook',
          'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]':
            social.name === 'instagram',
          'hover:bg-black': social.name === 'x',
        }"
      >
        <component :size="22" :is="social.logo" weight="bold" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { appConfig } from '../../config';
import {
  PhInstagramLogo,
  PhFacebookLogo,
  PhXLogo,
  PhMapPin,
  PhEnvelopeSimple,
} from '@phosphor-icons/vue';

const offices = [
  {
    name: 'Head Office',
    location: appConfig.headOffice,
    logo: PhMapPin,
  },
  {
    name: 'Corporate Office',
    location: appConfig.corporateOffice,
    logo: PhMapPin,
  },
];

const socials = [
  {
    name: 'facebook',
    logo: PhFacebookLogo,
  },
  {
    name: 'instagram',
    logo: PhInstagramLogo,
  },
  {
    name: 'x',
    logo: PhXLogo,
  },
];

const email = appConfig.supportEmail;
</script>
