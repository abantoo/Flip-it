<template>
  <nav class="flex items-center justify-center bg-slate-900 shadow-md shadow-slate-400 container mt-3 rounded h-[70px] lg:px-10">
    <div class="flex items-center justify-between bg-slate-900 shadow-md w-full">
      <RouterLink to="/">
        <img class="h-12" src="/flip_it_text.png" alt="flip-it-bd" />
      </RouterLink>

      <div class="flex items-center justify-center">
          <input type="search" class="input !grow lg:w-[500px] h-8 mr-2 input-warning" placeholder="Search for product" />
          <button 
            type="button" 
            class="btn btn-warning min-h-8 h-[34px] flex items-center justify-center"
          >
            <svg
              class="size-4" 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g>
            </svg>
          </button>
      </div>

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
          to="/offers"
          class="hover:text-amber-300 border border-transparent hover:border-amber-300 hover:rounded p-1 hover:transition-all"
          :class="{
            'text-amber-300': router.currentRoute.value.name == 'about',
          }"
        >
          Offers
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
