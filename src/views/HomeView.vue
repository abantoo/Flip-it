<template>
  <div class="px-4 lg:px-10 pb-4 pt-4 max-w-[1440px] mx-auto animate-fade-in">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Categories -->
    <section class="mb-20">
      <SectionHeader 
        title="Browse by Category" 
        subtitle="Find exactly what your build needs"
        description="From the latest CPUs to high-performance GPUs, explore our verified collection of premium components."
        to="/categories"
      />
      <CategoryGrid />
    </section>

    <!-- Featured Products -->
    <section class="mb-20">
      <SectionHeader 
        title="Latest Arrivals" 
        subtitle="Recently added premium components"
        description="Don't miss out on these newly listed gems. Every item is verified for quality and performance."
        to="/products"
      />
      <ProductGrid />
    </section>

    <!-- Newsletter Section -->
    <section class="mb-20">
      <NewsletterCard />
    </section>

    <!-- Value Propositions -->
    <TrustSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue';
import CategoryGrid from '../components/home/CategoryGrid.vue';
import ProductGrid from '../components/home/ProductGrid.vue';
import NewsletterCard from '../components/home/NewsletterCard.vue';
import SectionHeader from '../components/ui/SectionHeader.vue';
import TrustSection from '../components/home/TrustSection.vue';
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.7s ease-out forwards;
}
</style>