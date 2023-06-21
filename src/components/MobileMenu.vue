<script setup>
import NavLink from './NavLink.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import { 
  ChevronRightIcon
} from '@heroicons/vue/20/solid'

import { useGGStore } from '../Store';
const gg = useGGStore();
</script>

<template>
  <div class="w-screen h-screen absolute -top-[5.5rem] bg-gray-900 bg-opacity-80 backdrop-blur-sm md:hidden z-10 transform transition-transform duration-500 ease-in-out" 
    :class="{ 'translate-x-0': gg.isMobileOpen, '-translate-x-full': !gg.isMobileOpen }">
    <div class="relative top-[6.5rem] px-3" >
      <div class="flex flex-col items-start md:hidden">
        <nav-link @click="gg.toggleMobileMenu()" href="/" class="font-bold px-3 rounded-md py-2">首页</nav-link>
        <nav-link @click="gg.toggleMobileMenu()" href="#Manual" class="font-bold px-3 rounded-md py-2">Swift 中文官方文档</nav-link>
        <nav-link @click="gg.toggleMobileMenu()" href="#Playground" class="font-bold px-3 rounded-md py-2">WWDC.playground</nav-link>
        <nav-link @click="gg.toggleMobileMenu()" href="https://talk.swift.gg/" target="_blank" class="font-bold px-3 rounded-md py-2">GGTalk</nav-link>

        <Disclosure as="div" v-slot="{ active }" class="w-screen px-3 py-2">
          <DisclosureButton class="text-slate-200 flex w-full">
            <ChevronRightIcon class="h-5 w-5 shrink-0"></ChevronRightIcon>
            <span class="font-bold text-md px-3 rounded-md">归档项目</span>
          </DisclosureButton>

          <DisclosurePanel as="ul" class="mt-1">
            <a @click="gg.toggleMobileMenu()" href="https://archive.swift.gg" :class="[active ? 'bg-violet-950 text-slate-100' : 'text-slate-200', 'block px-4 py-2 text-md']">旧版 Swift.gg 网站</a>
            <a @click="gg.toggleMobileMenu()" href="https://github.com/atConf" :class="[active ? 'bg-violet-950 text-slate-100' : 'text-slate-200', 'block px-4 py-2 text-md']">@Swift 大会</a>
            <a @click="gg.toggleMobileMenu()" href="https://github.com/SwiftGGTeam/COSMOS" :class="[active ? 'bg-violet-950 text-slate-100' : 'text-slate-200', 'block px-4 py-2 text-md']">COSMOS 教程</a>
            <a @click="gg.toggleMobileMenu()" href="https://numbbbbb.gitbooks.io/ios-accessibility-programming-guide-in-chinese/content/index.html" :class="[active ? 'bg-violet-950 text-slate-100' : 'text-slate-200', 'block px-4 py-2 text-md']">无障碍开发指导</a>
            <a @click="gg.toggleMobileMenu()" href="https://github.com/SwiftGGTeam/google-swift-style-guide-in-chinese" :class="[active ? 'bg-violet-950 text-slate-100' : 'text-slate-200', 'block px-4 py-2 text-md']">Google Swift Style 中文版</a>
          </DisclosurePanel>
        </Disclosure>

        <nav-link @click="gg.toggleMobileMenu()" href="#Partners" class="font-bold px-3 py-2 rounded-full">合作伙伴</nav-link>
        <nav-link @click="gg.toggleMobileMenu()" href="#Social" class="font-bold px-3 py-2 rounded-full">关于我们</nav-link>
      </div>
    </div>
  </div>
</template>