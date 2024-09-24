<template>
  <div class="flex flex-col gap-4">
    <div 
      v-for="section in sections"
      class="flex flex-col gap-4 p-8 rounded-3xl bg-slate-800"
    >
      <h1 class="text-amber-300 text-4xl">{{ section.question }}</h1>
      
      <h2 class="text-xl text-white"> {{ section.answer }} </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sections = [
  {
    question: 'Who are we?',
    answer: 'The company is based on a concept of using recycled, used PC (personal computer) parts to create a complete PC set up making it sustainable and affordable for everyone who wants to buy it. This is an era of technology, and PCs are used more or less for a lot of purposes (business, education, entertainment) making it the right time to enter the market. A lot of people want to buy a PC but can’t afford one since they are expensive. Our company makes various categories of PCs according to customer needs and it is affordable since it is 30%-40% cheaper compared to a new PC since our products are recycled and the warranty of 1 year provided by our company makes sure that the customers don’t suffer from buyer’s guilt. This warranty is not given by any used PC sellers and we hope this will help build customer trust with our new venture. Customer service is our priority and we have a team for dedicated customer support at any time.'
  },
  {
    question: 'Contact us',
    answer: 'Contact is not available at this moment. Sorry :)'
  }
]
</script>
