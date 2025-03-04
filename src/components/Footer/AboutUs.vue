<template>
  <div>
    <h1 class="text-2xl font-bold">About Us</h1>
    <ul class="flex flex-col gap-2 py-2">
      <li v-for="option in options">
        <a href="">{{ option.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
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
]
</script>