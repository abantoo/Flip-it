<template>
  <nav class="flex items-center justify-between h-18 py-4 px-8 bg-black my-2 rounded-3xl">
    <RouterLink to="/">
      <img class="w-12" src="/flip_it.png" alt="flip-it-bd" />
    </RouterLink>
    <div class="text-xl flex items-center justify-between gap-8 text-white">
      <RouterLink
        to="/"
        class="hover:text-amber-300 border border-transparent hover:border-amber-300 hover:rounded p-2 hover:transition-all"
        :class="{
          'text-amber-300': router.currentRoute.value.name == 'home',
        }"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="hover:text-amber-300 border border-transparent hover:border-amber-300 hover:rounded p-2 hover:transition-all"
        :class="{
          'text-amber-300': router.currentRoute.value.name == 'about',
        }"
      >
        About
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>
