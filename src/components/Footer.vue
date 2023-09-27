<script setup>
import Container from './Container.vue'
import SwiftGGLogo from '../assets/swiftgg-logo.png'


</script>

<template>
  <div class="mt-12 py-20 bg-orange-100">
    <container>
      <div class="px-10 flex flex-col md:flex-row">
        <div class="pb-8 md:w-2/5">
          <img :src="SwiftGGLogo" class="h-12 mb-4">
          <p class="text-slate-600 font-normal leading-6 w-56">SwiftGG 是一个 NGO 组织，一直尝试将社区里有前瞻性的、有价值的内容呈现到大家视野中。</p>
        </div>

        <div class="md:w-3/5 flex flex-col md:flex-row gap-6 justify-end">
          <div class="flex flex-col gap-1.5">
            <p class="font-bold text-lg">Project</p>
            <a target="_blank" href="https://gitbook.swiftgg.team/swift/" class="text-slate-500 text-sm">Swift 官方文档</a>
            <a href="#Playground" class="text-slate-500 text-sm">WWDC.playground</a>
            <a target="_blank" href="https://talk.swift.gg/" class="text-slate-500 text-sm">GGTalk 播客</a>
          </div>

          <div class="flex flex-col gap-1.5">
            <p class="font-bold text-lg">Support</p>
            <a href="#Social" class="text-slate-500 text-sm">关于 SwiftGG</a>
            <a href="#Partners" class="text-slate-500 text-sm">合作伙伴</a>
          </div>

          <div class="flex flex-col gap-1.5">
            <p class="font-bold text-lg">Contact Info</p>
            <a href="mailto:zhangsiqi1988@gmail.com" class="text-slate-500 text-sm">zhangsiqi1988[AT]gmail.com</a>
          </div>
        </div>
      </div>

      <div class="px-1 my-5 border-t border-gray-300"></div>
      <div class="flex flex-col justify-center items-center text-sm text-slate-500 italic gap-2">
        <p class="font-mono">Copyright &copy; SwiftGG <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2023104442号-1</a></p>
        <p class="font-mono">11 crafted by  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="inline w-4 h-4 text-red-600">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>.
        </p>
      </div>
      
    </container>
  </div>
</template>
