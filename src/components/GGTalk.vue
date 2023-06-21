<script setup>
import Container from './Container.vue'
import { ggTalkComments } from '../GGTalkComments.js'
</script>

<template>
  
  <container id="GGTalk" class="py-32">
    <div class="px-5 lg:px-52 text-center flex flex-col">
      <h1 class="text-5xl font-bold pb-6">GGTalk 播客</h1>
      <p class="text-slate-600">接地气、有价值的闲聊节目。一帮程序员，在无尽的接需求写代码改 bug 加班上线循环中开辟出来的一块空地，想想过去，聊聊现在，偶尔也展望一下未来。</p>
    </div>
    
    <div class="flex flex-col md:flex-row overflow-x-auto gap-6 py-10 px-6">
      <div v-for="comment in ggTalkComments" class="flex-1 px-3 py-3 flex flex-col gap-3 bg-white rounded-sm comment-container">
        <div class="text-slate-400">
          {{ comment.content }}
        </div>

        <div class="flex items-center">
          <img :src="comment.avatar" class="w-12 h-12 mr-1">

          <div>
            <p class="font-semibold">{{ comment.name }}</p>
            <p class="text-sm text-slate-500 font-mono">{{ comment.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </container>
  
  
</template>

<style scoped>
.comment-container {
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
}
</style>
