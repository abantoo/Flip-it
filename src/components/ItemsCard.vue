<template>
  <div class="border border-amber-300 flex flex-col gap-4 rounded-md p-4">
    <h1>{{ props.title }}</h1>
    <div class="w-full flex justify-between gap-2">
      <div class="">
        <img class="h-48 lg:w-52 w-36 md:w-48" :src="props.image" alt="" />
      </div>
      <div class="flex flex-col">
        <h1
          class="text-right border border-emerald-500 bg-emerald-500 text-black rounded px-4"
        >
          Price: {{ props.price }}
        </h1>
        <h1 class="text-right">Condition: {{ props.condition }}</h1>
      </div>
    </div>
    <h1 class="text-center">{{ props.description }}</h1>
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
  price: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
});
</script>
