<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
    <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';

interface Product {
  id: number;
  title: string;
  price: number | string;
  oldPrice?: number | string;
  discountPercent?: number | string;
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
    description:
      'Binned for stable 5.8GHz. 8 months warranty remaining. Box and original receipt included.',
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 2,
    title: 'ASUS ROG Strix RTX 4080 OC',
    price: 135000,
    condition: 'Intek',
    description: 'Brand new, sealed pack. Official warranty from Global Brand.',
    image:
      'https://images.unsplash.com/photo-1591405351990-41005ca3863d?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 3,
    title: 'Corsair Vengeance RGB 32GB DDR5',
    price: 11500,
    condition: 'Used',
    description: '6000MHz CL36. Used for 3 months only. Lighting fast performance.',
    image:
      'https://images.unsplash.com/photo-1562976540-1502bc7645ad?auto=format&fit=crop&q=80&w=600',
    verified: false,
  },
  {
    id: 4,
    title: 'Lian Li PC-O11 Dynamic Razer Edition',
    price: 14000,
    condition: 'Used',
    description: 'Mint condition. All glass intact. Original fans included.',
    image:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 5,
    title: 'Seagate IronWolf 8TB NAS HDD',
    price: 18500,
    condition: 'Intek',
    description: '7200 RPM, 256MB Cache. Perfect for storage and plex servers.',
    image:
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 6,
    title: 'G.Skill Trident Z5 RGB 6400MHz',
    price: 15000,
    condition: 'Used',
    description: 'Used for extreme overclocking testing. Stable at 6600MHz.',
    image:
      'https://images.unsplash.com/photo-1562976540-1502bc7645ad?auto=format&fit=crop&q=80&w=600',
    verified: false,
  },
  {
    id: 7,
    title: 'NZXT Kraken Z73 RGB 360mm',
    price: 22000,
    condition: 'Used',
    description: 'Includes animated LCD screen. 1 year used, no leaks.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 8,
    title: 'Logitech G Pro X Superlight 2',
    price: 15500,
    oldPrice: 18500,
    discountPercent: 16,
    condition: 'Intek',
    description: "The world's fastest gaming mouse. Brand new, factory sealed.",
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
];
</script>
