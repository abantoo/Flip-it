<template>
  <div class="text-white">
    <h3 class="text-xl font-black mb-4 tracking-tight">Stay in the Loop</h3>
    <p class="text-slate-300 text-sm mb-6 leading-relaxed">
      Subscribe for the latest tech arrivals and market insights.<br />
      No spam, just premium components.
    </p>

    <div class="flex flex-col sm:flex-row gap-3 max-w-md">
      <div class="relative flex-1 group">
        <div class="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <input 
          type="email" 
          class="w-full h-12 bg-slate-900 border border-slate-800 rounded-xl px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all relative z-10" 
          placeholder="Enter your email"
        >
      </div>
      <button class="h-12 px-8 bg-primary text-slate-950 font-black rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/10">
        Subscribe
      </button>
    </div>
  </div>
</template>