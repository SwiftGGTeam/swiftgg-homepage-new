import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGGStore = defineStore('gg', () => {
  const isMobileOpen = ref(false)

  function toggleMobileMenu() {
    isMobileOpen.value = !isMobileOpen.value
    console.log("isMobileOpen: " + isMobileOpen.value)
  }

  return { isMobileOpen, toggleMobileMenu }
})