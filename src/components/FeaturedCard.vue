<template>
    <div class="border h-42 border-amber-300 flex flex-col gap-4 rounded-md p-4">
        <img class="w-32" :src="props.image" alt="">   
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
    
})
</script>