<script setup>
import Container from '../Container.vue'
import Activity from './Activity.vue'
import lightBulbImg from '@/assets/light-bulb.png'
import curveArrowImg from '@/assets/curve-arrow.png'

import { activities } from '@/atSwift.js'
</script>

<template>
  <section id="atSwift" class="py-20">
    <container>
      <div class="relative flex flex-col items-center justify-center">
        <img :src="lightBulbImg" class="hidden lg:inline lg:absolute lg:top-0 lg:start-0 w-30" alt="">

        <div class="flex flex-col items-center px-4">
          <h1 class="text-4xl md:text-5xl text-orange-500 font-bold pb-8">@Swift 大会</h1>
          <p class="text-slate-600 md:max-w-2xl">
            Swift 中国开发者大会。
          </p>
        </div>

        <img :src="curveArrowImg" class="hidden lg:inline lg:absolute lg:top-0 lg:right-0 w-30" alt="">
      </div>

      <div class="flex flex-col md:flex-row overflow-x-auto gap-10 py-10 px-2">
        <activity v-for="activity in activities" :activity="activity"></activity>
      </div>
      
    </container>
  </section>
</template>
