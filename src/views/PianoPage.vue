<template>
  <div class="h-screen w-screen bg-fixed bg-no-repeat bg-center overflow-hidden">
    <img :src="loadBackground()" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { getBackgroundFromLocalStorage } from '@/utils/FileUtil'
import defaultBackground from '@/assets/img/defaultBackground.png'

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
