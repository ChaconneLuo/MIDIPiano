<template>
  <PlaySlider />
  <div class="h-screen w-screen bg-fixed bg-no-repeat bg-center overflow-hidden">
    <img :src="loadBackground()" alt="" />
  </div>
  <div class="fixed bottom-1/5">
    <Piano />
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { getBackgroundFromLocalStorage } from '@/utils/FileUtil'
import defaultBackground from '@/assets/img/defaultBackground.png'
import PlaySlider from '@/components/PianoComponents/PlaySlider.vue'
import Piano from '@/components/PianoComponents/Piano.vue'

const loadBackground = () => {
  const background = useLocalStorage('background', 'undefined').value
  if (background != 'undefined') {
    return getBackgroundFromLocalStorage('background')!
  } else {
    return defaultBackground
  }
}
</script>

<style scoped></style>
