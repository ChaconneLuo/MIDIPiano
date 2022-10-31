<template>
  <div>
    <el-container class="fixed z-50 w-screen">
      <el-header class="p-0">
        <Header />
      </el-header>
    </el-container>
  </div>
  <div class="flex">
    <div class="inline h-screen w-1/2 bg-mainBgLight dark:bg-mainBgDark">
      <div class="flex justify-center flex-col h-full mx-auto text-center">
        <h1 class="text-3xl text-logoFontLight dark:text-logoFontDark">{{ t('test') }}</h1>
      </div>
    </div>
    <div
      class="triangle inline z-30 overflow-hidden border-l-mainBgLight border-b-mainBgLight dark:border-l-mainBgDark dark:border-b-mainBgDark"
    ></div>
    <div class="fixed right-0 z-20 w-1/2 h-screen bg-fileBgLight dark:bg-fileBgDark">
      <canvas class="absolute h-full w-full" id="canvas"></canvas>
      <div class="h-full z-50 flex flex-col justify-center">
        <FileUpload />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Header from '../components/GlobalComponents/Header.vue'
import FileUpload from '@/components/FileComponents/FileUpload.vue'
import { getCanvasElementById } from '@/utils/CanvasUtil'
import DrawInCanvas from '@/utils/DrawInCanvas'
import { onMounted, ref, watch } from 'vue'
import { useOptionStore } from '../stores/option'
import { useLocalStorage } from '@vueuse/core'

const { t } = useI18n()
onMounted(() => {
  let canvasElement = getCanvasElementById('canvas')
  if (!canvasElement) {
    return
  }
  const draw = new DrawInCanvas(ref<HTMLCanvasElement>(canvasElement), useOptionStore())
  watch(
    () => useLocalStorage('useDark', 'light'),
    (newValue) => {
      if (newValue.value === 'dark') {
        draw.switch('dark')
      } else {
        draw.switch('light')
      }
    },
    { immediate: true, deep: true }
  )
  draw.draw()
})
</script>
<style scoped>
.triangle {
  border-left: 7.5vw solid #f1fafa;
  border-right: 7.5vw solid transparent;
  border-top: 50vh solid transparent;
  border-bottom: 50vh solid #f1fafa;
}
</style>
