<script setup>
import Container from './Container.vue'
import { ggTalkComments } from '../GGTalkComments.js'
import twineChromeImg from '@/assets/twine-chrome.png'
import twineAppleImg from '@/assets/twine-apple.png'
</script>

<template>
  
  <container id="GGTalk" class="py-32">
    <div class="px-5 lg:px-52 flex flex-col">
      <h1 class="text-5xl text-center font-bold pb-6">Twine by SwiftGG</h1>
      <p class="text-slate-600 text-center">Twine by SwiftGG 是一款功能强大的翻译浏览器插件，为 Apple 生态技术学习而打造。</p>
    </div>
    
    <div style="display: flex; justify-content: center; align-items: center;">
      <div style="margin-right: 20px;">
        <p>
          <br>它具有以下核心功能和特点:<br><br>
          - 简单易用：安装方便，无需任何设置就可以立即使用，轻松获取双语学习体验。<br>
          - 智能识别：能够智能将所支持的教程文档中的英文自动翻译为你熟悉的语言。<br>
          - 社区力量：翻译内容由SwiftGG成员以及社区贡献提供，质量高且本地化程度深。<br>
          - 多种翻译模式：可以根据自己的喜好切换不同的对照翻译模式，自定义程度高。<br>
          - 免费开源：插件完全免费，代码开源，安全可靠。<br>
          <br>欢迎大家下载使用，或是加入社区参与贡献。
        </p>
      </div>
      <div>
        <a href="https://apps.apple.com/app/id6451390893" target="_blank">
          <img :src="twineAppleImg" style="display: block; max-height: 77px; margin-bottom: 10px;">
        </a>
        <a href="https://chromewebstore.google.com/detail/twine-by-swiftgg/kelkibamnlfhadhkaonlpplfiidhbofk" target="_blank">
          <img :src="twineChromeImg" style="display: block; max-height: 77px;">
        </a>
      </div>
    </div>
  </container>
  
  
</template>

<style scoped>
.comment-container {
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
}
</style>
