<template>
  <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-400 to-amber-300 p-1">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12 bg-slate-900 rounded-[2.3rem]">
      <div class="max-w-md text-center md:text-left">
        <h2 class="text-3xl font-black text-white mb-3">Don't Miss a Flip</h2>
        <p class="text-slate-400 font-medium">
          Get notified about the latest used gear and exclusive intek deals before anyone else.
        </p>
      </div>

      <div class="flex-1 w-full max-w-md">
        <form @submit.prevent class="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="your@email.com" 
            class="flex-1 px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
          />
          <button class="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold transition-all duration-300 transform hover:scale-105 active:scale-95">
            Subscribe
          </button>
        </form>
        <p class="mt-4 text-[10px] text-slate-500 text-center sm:text-left uppercase tracking-widest font-bold">
          No spam, just tech. Unsubscribe any time.
        </p>
      </div>

      <!-- Decorative Element -->
      <div class="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/5 blur-[60px] rounded-full pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic needed for now
</script>
