<script setup>
import Container from './Container.vue'
import { partners } from '../Partners.js'

import orangeArrow from '../assets/orange-arrow-left.png'
import orangePlanet from '../assets/orange-planet-right.png'

import lightBulbImg from '@/assets/light-bulb.png'
import curveArrowImg from '@/assets/curve-arrow.png'
</script>

<template>
  <container id="Partners" class="py-20 relative">
    <div class="relative">
      <div class="relative flex flex-col items-center justify-center pb-10">
        <img :src="lightBulbImg" class="hidden lg:inline lg:absolute lg:-top-16 lg:start-0 w-30" alt="">

        <div class="flex flex-col items-center px-4">
          <h1 class="text-4xl md:text-5xl font-bold pb-10 text-center shrink-0">合作伙伴</h1>
        </div>

        <img :src="curveArrowImg" class="hidden lg:inline lg:absolute lg:-top-16 lg:right-0 w-30" alt="">
      </div>

      <div class="grid md:grid-cols-4 gap-4 px-5 md:px-10">
        <div v-for="p in partners" class="grow-0 px-2 py-2 rounded-md bg-white partner-container">
          <a :href="p.url">
            <div class="flex flex-col">
              <img :src="p.cover" class="rounded-md mb-4">

              <p class="font-semibold text-xl pb-1">{{ p.name }}</p>
              <p class="text-base text-slate-500 pb-2">{{ p.slogan }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </container>
</template>

<style scoped>
.partner-container {
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
}
</style>
