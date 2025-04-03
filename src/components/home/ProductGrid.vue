<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
    <ProductCard 
      v-for="product in products" 
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';

interface Product {
  id: number;
  title: string;
  price: number | string;
  condition: 'Used' | 'Intek';
  description: string;
  image: string;
  verified?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Intel Core i9-13900K Processor',
    price: 52000,
    condition: 'Used',
    description: 'Binned for stable 5.8GHz. 8 months warranty remaining. Box and original receipt included.',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 2,
    title: 'ASUS ROG Strix RTX 4080 OC',
    price: 135000,
    condition: 'Intek',
    description: 'Brand new, sealed pack. Official warranty from Global Brand.',
    image: 'https://images.unsplash.com/photo-1591405351990-41005ca3863d?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 3,
    title: 'Corsair Vengeance RGB 32GB DDR5',
    price: 11500,
    condition: 'Used',
    description: '6000MHz CL36. Used for 3 months only. Lighting fast performance.',
    image: 'https://images.unsplash.com/photo-1562976540-1502bc7645ad?auto=format&fit=crop&q=80&w=600',
    verified: false
  },
  {
    id: 4,
    title: 'Lian Li PC-O11 Dynamic Razer Edition',
    price: 14000,
    condition: 'Used',
    description: 'Mint condition. All glass intact. Original fans included.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=600',
    verified: true
  }
];
</script>
