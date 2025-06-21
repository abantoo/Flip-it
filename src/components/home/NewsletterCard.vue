<template>
  <div class="relative overflow-hidden rounded-[2.5rem] bg-[var(--gradient-primary)] p-1 shadow-2xl shadow-primary/10">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12 bg-slate-900 rounded-[2.3rem]">
      <div class="max-w-md text-center md:text-left">
        <h2 class="text-3xl font-black text-white mb-3 tracking-tight">Don't Miss a Flip</h2>
        <p class="text-slate-300 font-medium leading-relaxed">
          Get notified about the latest used gear and exclusive deals before anyone else.
        </p>
      </div>

      <div class="flex-1 w-full max-w-md transition-all duration-500">
        <form v-if="!subscribed" @submit.prevent="subscribed = true" class="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="your@email.com" 
            required
            class="flex-1 px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
          />
          <button type="submit" class="px-8 py-4 rounded-2xl bg-primary text-slate-950 font-extrabold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Subscribe
          </button>
        </form>
        
        <div v-else class="flex flex-col items-center sm:items-start animate-fade-in">
          <div class="flex items-center gap-3 text-primary mb-2">
            <PhCheckCircle :size="32" weight="fill" />
            <span class="text-xl font-black text-white">You're on the list!</span>
          </div>
          <p class="text-slate-300 text-sm font-medium ml-1">Check your inbox for a confirmation. Welcome to the club.</p>
        </div>

        <p v-if="!subscribed" class="mt-4 text-[10px] text-slate-400 text-center sm:text-left uppercase tracking-widest font-bold opacity-60">
          No spam, just tech. Unsubscribe any time.
        </p>
      </div>

      <!-- Decorative Element -->
      <div class="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 blur-[60px] rounded-full pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PhCheckCircle } from '@phosphor-icons/vue';

const subscribed = ref(false);
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
