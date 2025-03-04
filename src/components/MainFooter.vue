<template>
  <div
    class="bg-slate-900 w-full flex flex-col items-center justify-center py-4"
  >
    <div class="container px-8 py-4 mb-4 flex justify-between text-white grow">
      <div class="px-2">
        <img class="w-32" src="../../public/flip_it.png" alt="Flip It" />
      </div>
      <!-- Subscribe -->
      <NewsLetter class="max-w-96" />

      <!-- About Us -->
      <AboutUs />
      <!-- Contact Us -->
      <StayConnected />
    </div>
    <p class="text-gray-300 text-sm">
      ©{{ new Date().getFullYear() }} Flip-IT bd Ltd | All rights reserved.
    </p>
  </div>
</template>

<script lang="ts" setup>
import StayConnected from "./Footer/StayConnected.vue";
import AboutUs from "./Footer/AboutUs.vue";
import NewsLetter from "./Footer/NewsLetter.vue";
</script>
