<script setup>
import NavHeader from './components/NavHeader.vue'
import MobileMenu from './components/MobileMenu.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import WWDCPlayground from './components/wwdc_pg/WWDCPlayground.vue'
import atSwift from './components/atswift/atSwift.vue'
import xrOS from './components/xros/xrOS.vue'
import SwiftManual from './components/SwiftManual.vue'
import GGTalk from './components/GGTalk.vue'
import Partner from './components/Partner.vue'
import Social from './components/Social.vue'
import Footer from './components/Footer.vue'
import { inject } from '@vercel/analytics';


import orangeArrow from './assets/orange-arrow-left.png'
import orangePlanet from './assets/orange-planet-right.png'

inject();
</script>

<template>
  <NavHeader />
  <div class="relative">
    <MobileMenu />
    <Hero />
  </div>
  <Projects />
  <WWDCPlayground />
  <atSwift />
  <xrOS />
  <SwiftManual />
  <GGTalk />
  <Partner />
  <Social />
  <Footer />
</template>
