<template>
    <div class="bg-slate-900 w-full flex flex-col items-center justify-center">
        <div class="container flex items-center justify-between text-white">
            <!-- Subscribe -->
            <div class="text-white">
                <h1>Subscribe To Our Newsletter</h1>
                <h2>Want to stay updated about current listings and learn about current market?</h2>
                <h2>Subscribe to our NewsLetter today</h2>

                <button class="btn btn-warning">Subscribe</button>
            </div>

            <!-- About Us -->
            <div>
                <h1>About Us</h1>
                <a href="">Our Team</a>
                <a href="">Career</a>
                <a href="">Online Delivery</a>
                <a href="">Blog</a>
            </div>

            <!-- Contact Us -->
            <div>
                <StayConnected />
            </div>
        </div>
        <p class="text-gray-300 text-sm">
            ©{{ new Date().getFullYear() }} Flip-IT bd Ltd | All rights reserved.
        </p>
    </div>
</template>

<script lang="ts" setup>
import StayConnected from './Footer/StayConnected.vue';
</script>