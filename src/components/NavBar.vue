<template>
  <nav class="flex items-center justify-center bg-slate-900 shadow-md shadow-slate-400 w-full h-16 px-4">
    <div class="container flex items-center justify-between bg-slate-900 shadow-md w-full">
      <RouterLink to="/">
        <img class="h-12" src="/flip_it_text.png" alt="flip-it-bd" />
      </RouterLink>
      <div class="text-lg flex items-center justify-between gap-4 text-white">
        <RouterLink
          to="/"
          class="hover:text-amber-300 border border-transparent hover:border-amber-300 hover:rounded p-1 hover:transition-all"
          :class="{
            'text-amber-300': router.currentRoute.value.name == 'home',
          }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:text-amber-300 border border-transparent hover:border-amber-300 hover:rounded p-1 hover:transition-all"
          :class="{
            'text-amber-300': router.currentRoute.value.name == 'about',
          }"
        >
          About
        </RouterLink>
        <div>
          <PhShoppingCart :size="28" />
        </div>
        <div>
          <PhUserCircle :size="28" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  PhShoppingCart,
  PhUserCircle,
} from '@phosphor-icons/vue';
const router = useRouter();
</script>
