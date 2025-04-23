<template>
  <footer class="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
    <div class="container mx-auto px-4 lg:px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand Section -->
        <div class="flex flex-col gap-6">
          <RouterLink to="/" class="w-fit">
            <img class="h-10 transition-transform duration-300 hover:scale-105" src="/flip_it.png" alt="Flip It" />
          </RouterLink>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
            Bangladesh's premier marketplace for verified tech components. Build your dream setup with confidence.
          </p>
        </div>

        <!-- NewsLetter -->
        <NewsLetter class="lg:col-span-2" />

        <!-- Stay Connected -->
        <StayConnected />
      </div>

      <!-- About Us & Links -->
      <div class="border-t border-slate-900 pt-12 mt-12">
        <AboutUs />
      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-900/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          ©{{ new Date().getFullYear() }} Flip-IT bd Ltd | All rights reserved.
        </p>
        <div class="flex gap-8 text-slate-500 text-sm">
          <a href="#" class="hover:text-amber-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-amber-400 transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-amber-400 transition-colors">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import StayConnected from "./Footer/StayConnected.vue";
import AboutUs from "./Footer/AboutUs.vue";
import NewsLetter from "./Footer/NewsLetter.vue";
</script>
