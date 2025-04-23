<template>
  <div class="text-white">
    <h3 class="text-xl font-black mb-4 tracking-tight">Stay in the Loop</h3>
    <p class="text-slate-400 text-sm mb-6 leading-relaxed">
      Subscribe for the latest tech arrivals and market insights.<br />
      No spam, just premium components.
    </p>

    <div class="flex flex-col sm:flex-row gap-3 max-w-md">
      <div class="relative flex-1 group">
        <div class="absolute inset-0 bg-amber-400/20 blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <input 
          type="email" 
          class="w-full h-12 bg-slate-900 border border-slate-800 rounded-xl px-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all relative z-10" 
          placeholder="Enter your email"
        >
      </div>
      <button class="h-12 px-8 bg-amber-400 text-slate-950 font-black rounded-xl hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/10">
        Subscribe
      </button>
    </div>
  </div>
</template>