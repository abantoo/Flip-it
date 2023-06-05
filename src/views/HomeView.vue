<template>
    <div class="px-8">
        <h1 class="text-center text-2xl">Welcome to <span class="text-amber-300">Flip it BD</span></h1>
        <h1 class="text-xl text-amber-300">Featured</h1>
        <div class="w-full h-0.5 bg-amber-300 mt-2"></div>
        <div class="flex items-center justify-center w-full pt-4 gap-3">
            <div class="w-1/3 h-36 bg-amber-300 rounded">1</div>
            <div class="w-1/3 h-36 bg-red-500 rounded">1</div>
            <div class="w-1/3 h-36 bg-sky-300 rounded">1</div>
            <div class="w-1/3 h-36 bg-amber-300 rounded">1</div>
            <div class="w-1/3 h-36 bg-amber-300 rounded">1</div>
        </div>
        <h1 class="text-xl text-amber-300 mt-8">Our Products</h1>
        <div class="w-full h-0.5 bg-amber-300 mt-2"></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4 gap-3">
            <ItemsCard 
                image="https://cdn.gaminggorilla.com/wp-content/uploads/2022/06/Gigabyte-X570-AORUS-Pro-WIFI-Motherboard-Review.jpg"
                title="Gigabyte X570 AORUS Pro WIFI Motherboard"
                price="23000 tk"
                condition="Used"
                description="Almost new item, collected and verified by our expert team at Flip it BD"
                :verified="true"
            />
            <ItemsCard 
                image="https://www.getsview.com/wp-content/uploads/2019/07/Source-List-of-Used-pc-parts-buy-and-sell-in-Bangladesh.jpg"
                title="Sapphire HD 7770"
                price="11000 tk"
                condition="Used"
                description="Used for 2 years, collected and fixed by our expert team at Flip it BD"
                :verified="true"
            />

            <ItemsCard 
                image="https://images.olx.com.kw/thumbnails/1058879-240x180.jpeg"
                title="Evga GPU"
                price="9000 tk"
                condition="Used"
                description="Used for 6 years, dead, died because of a lightning strike"
                :verified="false"
            />

            <ItemsCard 
                image="https://www.reckoncomputers.co.in/assets/uploads/25f8e52f7a1057b4.webp"
                title="Cooler Master MWE GOLD 650 FULLY MODULAR"
                price="9500 tk"
                condition="New"
                description="New item"
                :verified="true"
            />

            <ItemsCard 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFraYrzBhZqQ8NJg0J8BQxpmaSeaIgu3PL1TF_XNuEbXpP9tnsb7dmPyCThwAbwmqIoI&usqp=CAU"
                title="2x HyperX fury"
                price="5000 tk"
                condition="Used"
                description="Used for 1 year, fixed recently"
                :verified="true"
            />

            <ItemsCard 
                image="https://media.karousell.com/media/photos/products/2022/12/7/used_pc_parts_lot_1670430167_c469d146_progressive"
                title="Intel i3-10100f"
                price="7000 tk"
                condition="Used"
                description="Used for 3 years, overheats frequently"
                :verified="false"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ItemsCard from '../components/ItemsCard.vue';
</script>