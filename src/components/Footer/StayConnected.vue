<template>
  <h1 class="text-2xl font-bold">Stay Connected</h1>
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

  <div><span class="font-semibold">Email: </span> random-email@email.com</div>
</template>

<script lang="ts" setup>
import {
  PhInstagramLogo,
  PhFacebookLogo,
  PhXLogo,
  PhMapPin,
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
]
</script>
