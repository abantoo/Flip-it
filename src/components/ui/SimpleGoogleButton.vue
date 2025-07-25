<template>
  <button
    type="button"
    @click="$emit('click')"
    class="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-slate-200 hover:border-slate-900 transition-all duration-200 text-slate-700 font-bold"
  >
    <GoogleIcon />
    <span>Sign in with Google</span>
  </button>
</template>

<script setup lang="ts">
import GoogleIcon from './icons/GoogleIcon.vue';

defineEmits(['click']);
</script>
