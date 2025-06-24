<template>
  <div class="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
    <!-- Image Container -->
    <div class="relative h-64 overflow-hidden bg-slate-800">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <!-- Badges Overlay -->
      <div class="absolute top-4 left-4 flex flex-col gap-2 z-20">
        <BaseBadge :variant="condition === 'Used' ? 'warning' : 'success'">
          {{ condition }}
        </BaseBadge>
        <BaseBadge v-if="verified" variant="primary">
          Verified
        </BaseBadge>
      </div>

      <!-- Quick Action Overlay -->
      <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <button class="px-6 py-2.5 bg-white text-slate-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary">
          View Details
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex items-start justify-between gap-4 mb-3">
        <h3 class="font-bold text-white text-lg leading-tight group-hover:text-primary transition-colors">
          {{ title }}
        </h3>
      </div>
      
      <p class="text-slate-400 text-sm line-clamp-2 mb-6 h-10">
        {{ description }}
      </p>

      <div class="flex items-center justify-between border-t border-slate-800 pt-5">
        <PriceTag :value="price" :old-price="oldPrice" :discount-percent="discountPercent" size="lg" />
        <button class="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:bg-primary hover:text-slate-900 transition-all duration-300">
          <PhShoppingCart :size="20" weight="bold" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhShoppingCart } from '@phosphor-icons/vue';
import BaseBadge from '../ui/BaseBadge.vue';
import PriceTag from '../ui/PriceTag.vue';

defineProps<{
  image: string;
  title: string;
  price: number | string;
  oldPrice?: number | string;
  discountPercent?: number | string;
  condition: 'Used' | 'Intek';
  description: string;
  verified?: boolean;
}>();
</script>
