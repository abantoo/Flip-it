<template>
  <BaseButton variant="outline" class="w-full" @click="$emit('click')">
    <div class="flex items-center justify-center gap-3">
      <GoogleIcon />
      <span>Sign in with Google</span>
    </div>
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import GoogleIcon from './icons/GoogleIcon.vue';

defineEmits(['click']);
</script>
