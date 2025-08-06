<template>
  <div
    class="absolute inset-0 z-[5] overflow-hidden pointer-events-none flex flex-col justify-center opacity-[0.08] select-none"
  >
    <div class="marquee-row marquee-fill animate-marquee-right">
      <div class="flex shrink-0 min-w-full">
        <div class="relative px-4">
          <span class="absolute text-black translate-x-1.5 translate-y-1.5 opacity-40">
            {{ animationText }}
          </span>
          <span class="relative">{{ animationText }}</span>
        </div>
        <div class="relative px-4">
          <span class="absolute text-black translate-x-1.5 translate-y-1.5 opacity-40">
            {{ animationText }}
          </span>
          <span class="relative">{{ animationText }}</span>
        </div>
      </div>
    </div>
    <div class="marquee-row marquee-white animate-marquee-left">
      <div class="flex shrink-0 min-w-full">
        <div class="relative px-4">
          <span class="absolute text-black translate-x-1.5 translate-y-1.5 opacity-40">
            {{ animationText }}
          </span>
          <span class="relative">{{ animationText }}</span>
        </div>
        <div class="relative px-4">
          <span class="absolute text-black translate-x-1.5 translate-y-1.5 opacity-40">
            {{ animationText }}
          </span>
          <span class="relative">{{ animationText }}</span>
        </div>
      </div>
    </div>
    <div class="marquee-row marquee-fill animate-marquee-right">
      <div class="flex shrink-0 min-w-full">
        <div class="relative px-4">
          <span class="absolute text-black translate-x-1.5 translate-y-1.5 opacity-40">
            {{ animationText }}
          </span>
          <span class="relative">{{ animationText }}</span>
        </div>
        <div class="relative px-4">
          <span class="absolute text-black translate-x-1.5 translate-y-1.5 opacity-40">
            {{ animationText }}
          </span>
          <span class="relative">{{ animationText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const animationText = '.BUY.SELL.RIG.BUY.SELL.RIG.BUY.SELL.RIG.BUY.SELL.RIG';
</script>

<style scoped>
/* Marquee Animations */
.marquee-row {
  @apply whitespace-nowrap text-[120px] md:text-[200px] font-black uppercase;
  display: flex;
  width: max-content;
  letter-spacing: 0.1em;
  line-height: 1;
}

.marquee-fill {
  color: #50115f;
}

.marquee-outline {
  color: transparent;
  -webkit-text-stroke: 2px var(--color-primary);
}

.marquee-white {
  color: #fff;
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-marquee-left {
  animation: marquee-left 60s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 60s linear infinite;
}
</style>
