<script setup>
import { computed } from 'vue';
import { CalendarDaysIcon, MicrophoneIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
  activity: {
    type: Object,
    required: true
  }
})

const activityOpacity = computed(() => {
  return props.activity.btnText === '隐藏' ? 0 : 1;
});
</script>

<template>
  <div :style="{ opacity: activityOpacity, pointerEvents: activity.btnText === '隐藏' ? 'none' : 'auto' }" class="px-2 py-2 bg-white rounded-md activity-container">
    <div class="flex flex-col">
      <img :src="activity.coverUrl" class="w-full rounded-md pb-2" alt="">
      <p class="font-semibold text-lg pb-1 "> {{ activity.title }}</p>
      <p class="font-medium text-orange-500 pb-2"> {{ activity.slogan }}</p>

      <div class="px-1 pb-2 border-t border-gray-200"></div>
      
      <div class="text-sm flex">
        <p class="flex items-center text-slate-500 gap-1 flex-grow"> <CalendarDaysIcon class="w-6"/> {{ activity.leftWidget }}</p>
        <p class="flex items-center justify-end text-slate-500 gap-1"> <MicrophoneIcon class="w-5"/>{{ activity.rightWidget }}</p>
      </div>

      <div class="text-center">
        <a :href="activity.btnUrl" class="bg-orange-500 text-white font-medium px-9 py-2 rounded-full relative top-5">
          {{ activity.btnText  }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity-container {
  box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.1), 0 2px 6px 4px rgba(0, 0, 0, 0.08);
}
</style>
