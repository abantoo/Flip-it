<template>
  <div class="px-8">
    <h1 class="text-center text-2xl">Welcome to <span class="text-amber-300">Flip it BD</span></h1>
    <h1 class="text-xl text-amber-300">Featured</h1>
    <div class="w-full h-0.5 bg-amber-300 mt-2"></div>
    <div class="flex items-center justify-center w-full pt-4 gap-2 md:gap-6">
      <FeaturedCard class="w-1/5"
        image="https://computerimporter.com/wp-content/uploads/2022/03/VENG_LPX_BLK_01-500x500-1.png" title="Rams" />
      <FeaturedCard class="w-1/5"
        image="https://www.startech.com.bd/image/cache/catalog/casing-cooler/deepcool/xfan-80/xfan-80-01-228x228.jpg"
        title="Cooler" />
      <FeaturedCard class="w-1/5"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDoP85dOoSYHDziDfVxfhJEk-9HDN8wCKNg&usqp=CAU"
        title="Mobo" />
      <FeaturedCard class="w-1/5"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Vv4hL1snfGCgnH2QAgkjvti9wpwmArvIm97updWAaWzjauLjmkXc9zWmLgEE_gN3W1w&usqp=CAU"
        title="Processors" />
    </div>
    <h1 class="text-xl text-amber-300 mt-8">Our Products</h1>
    <div class="w-full h-0.5 bg-amber-300 mt-2"></div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4 gap-3">
      <ItemsCard
        image="https://scontent.fdac138-2.fna.fbcdn.net/v/t1.15752-9/348354742_166665499705694_4901285852113542858_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=NVXJiEjR6sgAX-9OXNl&_nc_ht=scontent.fdac138-2.fna&oh=03_AdQUQUxVWcb4davj7fvS9vjA77aWL_bfT_uOXr-1Nlup-g&oe=64A60047"
        title="Full PC" price="35000 tk" condition="Used"
        description="Used for 4 years, verified by our team at Flip it BD" :verified="true" />
      <ItemsCard image="https://www.reckoncomputers.co.in/assets/uploads/25f8e52f7a1057b4.webp"
        title="Cooler Master MWE GOLD 650 FULLY MODULAR" price="5000 tk" condition="Used"
        description="Used for around 1 year." :verified="true" />

      <ItemsCard
        image="https://www.getsview.com/wp-content/uploads/2019/07/Source-List-of-Used-pc-parts-buy-and-sell-in-Bangladesh.jpg"
        title="Sapphire HD 7770" price="7000 tk" condition="Used"
        description="Used for 2 years, collected and fixed by our expert team at Flip it BD" :verified="true" />



      <ItemsCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFraYrzBhZqQ8NJg0J8BQxpmaSeaIgu3PL1TF_XNuEbXpP9tnsb7dmPyCThwAbwmqIoI&usqp=CAU"
        title="2x HyperX fury" price="5000 tk" condition="Used" description="Used for 1 year, fixed recently"
        :verified="true" />

      <ItemsCard
        image="https://media.karousell.com/media/photos/products/2022/12/7/used_pc_parts_lot_1670430167_c469d146_progressive"
        title="Intel i3-10100f" price="4000 tk" condition="Used" description="Used for 3 years, overheats frequently"
        :verified="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemsCard from '../components/ItemsCard.vue';
import FeaturedCard from '../components/FeaturedCard.vue';
</script>