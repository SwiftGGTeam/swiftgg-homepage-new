<script setup>
  import { ref } from 'vue'
  import Container from './Container.vue'
  import NavLink from './NavLink.vue'
  import SwiftGGLogo from '../assets/swiftgg-logo.png'
  import { useGGStore } from '../Store'
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

  import { 
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon
  } from '@heroicons/vue/20/solid'

const gg = useGGStore()
</script>

<template>
  <header class="relative py-5">
    <container>
      <nav class="relative flex justify-between">
        
        <div class="flex lg:grow lg:basis-0 z-20">
          <button @click='gg.toggleMobileMenu' class="relative flex-1 mr-4 md:hidden">
            <Bars3Icon v-if="!gg.isMobileOpen" class="w-6 inline z-1 text-slate-700" />
            <XMarkIcon v-else class="w-6 inline text-slate-100"/>
          </button>
          
          <a href='/'><img :src="SwiftGGLogo" class="h-12 w-auto"></a>
        </div>

        <!-- Desktop menu start-->
        <div class="hidden md:flex md:items-center">
          <nav-link href="/" class="font-bold px-3 rounded-full">首页</nav-link>
          <nav-link href="https://board.swiftgg.team/" class="font-bold px-3 rounded-full">公告板</nav-link>
          <nav-link href="#Manual" class="font-bold px-3 rounded-full">Swift 中文官方文档</nav-link>
          <nav-link href="#Playground" class="font-bold px-3 rounded-full">WWDC.playground</nav-link>
          <nav-link href="https://talk.swift.gg/" target="_blank" class="font-bold px-3 rounded-full">GGTalk</nav-link>

          <Menu as="div" class="relative inline-block text-left z-20">
            <div>
              <MenuButton class="rounded-lg px-2 py-1 font-bold text-sm md:text-xs lg:text-sm text-slate-700 hover:bg-violet-950 hover:text-slate-100">
                归档项目 <ChevronDownIcon class="inline -ml-1 -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
            </div>
            
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            
              <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem as="div" v-slot="{ active }">
                    <a href="https://swift.gg"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">旧版 SwiftGG 网站</a>
                  </MenuItem>
                  <MenuItem as="div" v-slot="{ active }">
                    <a href="https://github.com/atConf"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">@Swift 大会</a>
                  </MenuItem>
                  <MenuItem as="div" v-slot="{ active }">
                    <a href="https://github.com/SwiftGGTeam/COSMOS"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">COSMOS 教程</a>
                  </MenuItem>
                  <MenuItem as="div" v-slot="{ active }">
                    <a href="https://numbbbbb.gitbooks.io/ios-accessibility-programming-guide-in-chinese/content/index.html"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">无障碍开发指导</a>
                  </MenuItem>
                  <MenuItem as="div" v-slot="{ active }">
                    <a href="https://github.com/SwiftGGTeam/google-swift-style-guide-in-chinese"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Google Swift Style 中文版</a>
                  </MenuItem>
                </div>
              </MenuItems>

            </transition>
            
          </Menu>

          <nav-link href="#Partners" class="font-bold px-3 rounded-full">合作伙伴</nav-link>
          <nav-link href="#Social" class="font-bold px-3 rounded-full">关于我们</nav-link>
        </div>
        <!-- Desktop menu end-->
      </nav>
    </container>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
