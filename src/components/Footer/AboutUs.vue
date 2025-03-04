<template>
  <div>
    <h1 class="text-2xl font-bold">About Us</h1>
    <div class="grid grid-cols-2 gap-12 py-2">
      <ul class="flex flex-col gap-2">
        <li v-for="(option, index) in firstColumn" :key="index">
          <a href="" class="hover:underline">{{ option.name }}</a>
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li v-for="(option, index) in secondColumn" :key="index">
          <a href="" class="hover:underline">{{ option.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const options = [
  { 
    name: 'Our Team'
  },
  { 
    name: 'Career'
  },
  { 
    name: 'Online Delivery'
  },
  { 
    name: 'Blog'
  },
  { 
    name: 'Community'
  },
  { 
    name: 'Partners'
  },
  { 
    name: 'Events'
  },
  { 
    name: 'Deals'
  },
];

const middleIndex = Math.ceil(options.length / 2);
const firstColumn = computed(() => options.slice(0, middleIndex));
const secondColumn = computed(() => options.slice(middleIndex));
</script>
