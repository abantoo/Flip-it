<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div class="lg:col-span-1">
      <h4 class="text-white font-bold mb-6 flex items-center gap-2">
        <PhInfo :size="20" class="text-amber-400" />
        About Flip-IT
      </h4>
      <p class="text-slate-500 text-sm leading-relaxed">
        We are Bangladesh's first dedicated marketplace for verified second-hand tech. Our mission is to make high-end computing accessible to everyone while ensuring quality through expert verification.
      </p>
    </div>

    <div class="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      <div>
        <h4 class="text-white font-bold mb-6">Company</h4>
        <ul class="flex flex-col gap-3">
          <li v-for="option in companyLinks" :key="option.name">
            <a href="#" class="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
              <span class="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-amber-400 transition-colors"></span>
              {{ option.name }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6">Support</h4>
        <ul class="flex flex-col gap-3">
          <li v-for="option in supportLinks" :key="option.name">
            <a href="#" class="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
              <span class="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-amber-400 transition-colors"></span>
              {{ option.name }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6">Resources</h4>
        <ul class="flex flex-col gap-3">
          <li v-for="option in resourceLinks" :key="option.name">
            <a href="#" class="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
              <span class="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-amber-400 transition-colors"></span>
              {{ option.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhInfo } from '@phosphor-icons/vue';

const companyLinks = [
  { name: 'Our Team' },
  { name: 'Career' },
  { name: 'Partners' },
];

const supportLinks = [
  { name: 'Online Delivery' },
  { name: 'Help Center' },
  { name: 'Contact Us' },
];

const resourceLinks = [
  { name: 'Blog' },
  { name: 'Community' },
  { name: 'Events' },
  { name: 'Deals' },
];
</script>
