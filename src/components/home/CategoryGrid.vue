<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    <CategoryCard 
      v-for="cat in categories" 
      :key="cat.id"
      :title="cat.title"
      :image="cat.image"
      :to="cat.to"
    />
  </div>
</template>

<script setup lang="ts">
import CategoryCard from './CategoryCard.vue';

const categories = [
  { id: 1, title: 'Processors', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400', to: '/category/processors' },
  { id: 2, title: 'Graphics Cards', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400', to: '/category/gpu' },
  { id: 3, title: 'Motherboards', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400', to: '/category/motherboards' },
  { id: 4, title: 'PC Builds', image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400', to: '/category/builds' },
];
</script>
