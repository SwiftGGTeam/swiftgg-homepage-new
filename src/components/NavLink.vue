<script setup>
const props = defineProps({
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <a :href="props.href" class="inline-block rounded-lg w-full md:w-auto px-2 py-2 md:py-1 text-md md:text-xs lg:text-sm text-slate-200 md:text-slate-700 hover:bg-violet-950 hover:text-slate-100">
    <slot />
  </a>
</template>