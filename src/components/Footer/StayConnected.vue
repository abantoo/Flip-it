<template>
  <div>
    <!-- Title -->
    <h1 class="text-2xl font-bold">Stay Connected</h1>

    <!-- Locations -->
    <div 
      v-for="office in offices" 
      :key="office.name"
      class="py-2"
    >
      <h2 class="text-lg font-medium">{{ office.name }}</h2>
      <div class="flex items-center gap-1">
        <component :is="office.logo" />
        <p class="text-sm">{{ office.location }}</p>
      </div>
    </div>

    <!-- Email -->
    <div class="flex items-center gap-2 mt-2"> 
      <PhEnvelopeSimple :size="24" /> 
      {{ email }}
    </div>

    <!-- Socials -->
    <button 
      type="button" 
      v-for="social in socials"
      class="py-4"
    >
      <component 
        :size="32"
        :is="social.logo"
        class="transition-colors rounded border 
        border-transparent hover:border-white hover:bg-slate-200"
        :class="{
          'hover:text-black' : social.name === 'x',
          'hover:text-[#8a3ab9] mx-2': social.name === 'instagram',
          'hover:text-[#1877F2]': social.name === 'facebook',
        }"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
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
    location: 'Nowhere, Dhaka, Bangladesh',
    logo: PhMapPin,
  },
  {
    name: 'Corporate Office',
    location: 'Nowhere, Dhaka, Bangladesh',
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
  }
];

const email = "random-email@email.com";
</script>
