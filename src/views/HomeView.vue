<template>
  <div class="px-4 lg:px-10 py-10 max-w-[1440px] mx-auto">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Categories -->
    <section class="mb-20">
      <SectionHeader 
        title="Browse by Category" 
        subtitle="Find exactly what your build needs"
        to="/categories"
      />
      <CategoryGrid />
    </section>

    <!-- Featured Products -->
    <section class="mb-20">
      <SectionHeader 
        title="Featured Gear" 
        subtitle="Hand-picked premium components"
        to="/products"
      />
      <ProductGrid />
    </section>

    <!-- Value Propositions -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-slate-800">
      <div v-for="prop in props" :key="prop.title" class="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/50 border border-slate-800">
        <div class="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
          <component :is="prop.icon" :size="24" weight="bold" />
        </div>
        <h3 class="text-white font-bold mb-2">{{ prop.title }}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">{{ prop.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue';
import CategoryGrid from '../components/home/CategoryGrid.vue';
import ProductGrid from '../components/home/ProductGrid.vue';
import SectionHeader from '../components/ui/SectionHeader.vue';
import { PhShieldCheck, PhLightning, PhCurrencyCircleDollar } from '@phosphor-icons/vue';

const props = [
  { 
    title: 'Verified Quality', 
    description: 'Every 2nd-hand item is checked by our expert technicians.', 
    icon: PhShieldCheck 
  },
  { 
    title: 'Instant Delivery', 
    description: 'Lightning fast shipping across all 64 districts of Bangladesh.', 
    icon: PhLightning 
  },
  { 
    title: 'Best Value', 
    description: 'Get the highest performance for every Taka you spend.', 
    icon: PhCurrencyCircleDollar 
  },
];
</script>