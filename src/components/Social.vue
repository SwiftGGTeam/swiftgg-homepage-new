<script setup>
import Container from './Container.vue'
import GGWeChatImg from '../assets/GGWeChat.png'
import GGWeiboImg from '../assets/GGWeibo.png'

import doubleCircleLeftImg from '../assets/double-circle-left.png'
import doubleCircleRightImg from '../assets/double-circle-right.png'
import curveArrowBImg from '../assets/curve-arrow-b.png'
import lightBulbBImg from '../assets/light-bulb-b.png'
import swiftGGBilibiliImg from '../assets/SwiftGGBilibili.png'
</script>

<template>
  <container id="Social" class="pt-20 relative">
    <div class="py-16 px-10 mx-2 md:mx-10 rounded-md bg-purple-950 relative overflow-hidden">
      <img :src="doubleCircleLeftImg" alt=""  class="hidden absolute -top-[6rem] -start-[6rem] lg:inline">
      <img :src="doubleCircleRightImg" alt="" class="hidden absolute -top-[6rem] -end-[6rem] lg:inline">
      <img :src="curveArrowBImg" alt=""       class="hidden absolute w-32 -bottom-4 start-[5rem] lg:inline">
      <img :src="lightBulbBImg" alt=""        class="hidden absolute w-32 bottom-[4rem] end-[2rem] lg:inline">

      <h1 class="text-5xl font-bold pb-10 text-center text-slate-100">欢迎关注我们</h1>

      <div class="flex flex-col md:flex-row items-center justify-center gap-20">
        <div>
          <p class="text-slate-100 text-lg text-center font-semibold pb-5">微信公众号</p>
          <img :src="GGWeChatImg" alt="" class="w-52 rounded-md">
        </div>

        <div>
          <p class="text-slate-100 text-lg text-center font-semibold pb-5">微博</p>
          <img :src="GGWeiboImg" alt="" class="w-52 rounded-md">
        </div>

        <div>
          <p class="text-slate-100 text-lg text-center font-semibold pb-5">B 站直播间</p>
          <img :src="swiftGGBilibiliImg" alt="" class="w-52 rounded-md">
        </div>
      </div>
    </div>
  </container>
</template>
