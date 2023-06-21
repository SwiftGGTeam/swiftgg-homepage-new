<script setup>
import Container from './Container.vue'
import SwiftManualImg from '../assets/swift-manual.png'
import SwiftCnManualImg from '../assets/swift-cn-manual.png'
import SwiftApiDesignImg from '../assets/swift-api-design.png'
</script>

<template>
  <div id="Manual" class="bg-orange-100">
    <container class="py-10 flex justify-center items-center gap-10">
      <img :src="SwiftManualImg" class="hidden md:inline md:w-1/2 relative top-32" alt="">

      <div class="flex flex-col gap-2">
        <h1 class="text-4xl md:text-5xl font-bold pb-6">
          <p class="pb-3">地道的<span class="text-orange-500">中文版</span></p>
          <p>Swift 语言官方文档</p> 
        </h1>

        <a target="_blank" href="https://swiftgg.gitbook.io/swift/">
          <div class="flex gap-2 items-center pb-2">
            <img :src="SwiftCnManualImg" class="w-16 h-16">

            <div>
              <p class="font-bold text-lg">Swift 语言编程手册</p>
              <p class="text-slate-600">学习和理解 Swift 语言，感受编程的魅力和乐趣。</p>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://github.com/SketchK/the-swift-api-design-guidelines-in-chinese">
          <div class="flex gap-2 items-center">
            <img :src="SwiftApiDesignImg" class="w-16 h-16">

            <div>
              <p class="font-bold text-lg">Swift 语言 API 设计手册</p>
              <p class="text-slate-600">帮助开发者设计出更地道的 Swift API。</p>
            </div>
          </div>
        </a>
      </div>
    </container>
  </div>
</template>
