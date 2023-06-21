<script setup>
import Container from './Container.vue'
import heroImg from '../assets/hero-img.png'
</script>

<template>
  <div id="Hero" class="flex flex-col justify-center md:hero-bg-icons bg-orange-100">
    <container class="py-40 px-2 flex">
      <!-- Title and slogan start-->
      <div class="flex flex-col items-center justify-center">
        
        <h1 class="pb-8 text-4xl md:text-5xl font-bold">
          <p class="pb-2">一个专注 <span class="text-orange-600">Apple</span></p>
          <p>生态的<span class="text-orange-600">创作者</span>社区</p>
        </h1>
        
        <p class="text-slate-600 font-normal leading-6 max-w-xl">SwiftGG 是一个 NGO 组织，一直尝试将社区里有前瞻性的，有价值的内容呈现到大家视野中，除了会邀请国内各个领域的大牛，还会努力成为与国外优秀创作者建立联系的纽带，以更宽广，更国际化的视角来丰富创作者们的视野。</p>
      </div>
      <!-- Title and slogan end-->

      <!-- Hero image start-->
      <div class="hidden md:inline">
        <img :src="heroImg" class="mx-auto" alt="hero image">
      </div>
      <!-- Hero image end-->
    </container>
  </div>
</template>

<style scoped>
.hero-bg-icons {
  background-image: url('../assets/hero-bg-icons.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>