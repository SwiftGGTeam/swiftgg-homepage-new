<script setup>
import Container from './Container.vue'
import ManualIconImg from '../assets/swift-manual-icon.png'
import PlaygroundIconImg from '../assets/playground-icon.png'
import GGTalkIconImg from '../assets/ggtalk-icon.png'
</script>

<template>
  <container id="Projects" class="pt-20 relative">
    <div class="py-16 mx-2 rounded-md bg-purple-950">
      <div class="flex flex-col lg:flex-row justify-center gap-10 px-10">
        <div>
          <a target="_blank" href="https://gitbook.swiftgg.team/swift/">
            <div class="flex gap-4 items-top pb-2">
              <img :src="ManualIconImg" class="w-16 h-16">

              <div>
                <p class="font-bold text-lg text-slate-200 pb-2">中文版 Swift 官方文档</p>
                <p class="text-slate-400 text-sm">地道的中文版《The Swift Programming Language》教程 ，获得过 Apple 的官方推荐，是学习 Swift 语言的不二之选！</p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a target="_blank" href="#Playground">
            <div class="flex gap-4 items-top pb-2">
              <img :src="PlaygroundIconImg" class="w-16 h-16">

              <div>
                <p class="font-bold text-lg text-slate-200 pb-2">WWDC.playground</p>
                <p class="text-slate-400 text-sm">超有意思的线上交流会，活动期间会连线国内外的开发者，设计师和产品经理等各个领域的佼佼者。聊聊各自体验到的 WWDC。</p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a target="_blank" href="https://talk.swift.gg/">
            <div class="flex gap-4 items-top pb-2">
              <img :src="GGTalkIconImg" class="w-16 h-16">

              <div>
                <p class="font-bold text-lg text-slate-200 pb-2">GGTalk 播客</p>
                <p class="text-slate-400 text-sm">接地气、有价值的闲聊节目。一帮程序员，在无尽的接需求写代码改 bug 加班上线循环中开辟出来的一块空地，想想过去，聊聊现在，偶尔也展望一下未来。</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </container>
</template>
