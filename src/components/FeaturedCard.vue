<template>
  <div class="border h-42 border-amber-300 flex justify-center rounded-md p-4">
    <img class="w-32" :src="props.image" alt="" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
