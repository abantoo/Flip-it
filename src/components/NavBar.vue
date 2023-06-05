<template>
    <nav>
        <div class="flex items-center justify-between h-18 py-4 px-8">
            <RouterLink 
                    to="/"
                > 
                <img class="w-16" src="../../public/flip_it.png" alt="">
            </RouterLink>
            <div class="text-xl flex items-center justify-between gap-8 text-white">
                <RouterLink 
                    to="/" 
                    class="hover:text-amber-300 hover:border hover:border-amber-300 hover:rounded p-2 hover:transition-all"
                    :class="{'text-amber-300':router.currentRoute.value.name == 'home'}"
                > 
                    Home
                </RouterLink>
                <RouterLink 
                    to="/about" 
                    class="hover:text-amber-300 hover:border hover:border-amber-300 hover:rounded p-2 hover:transition-all"
                    :class="{'text-amber-300':router.currentRoute.value.name == 'about'}"
                > 
                    About
                </RouterLink>
             </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter();
</script>