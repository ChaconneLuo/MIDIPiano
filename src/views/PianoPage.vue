<template>
  <div class="z-0 h-screen w-screen bg-fixed bg-no-repeat bg-center overflow-hidden">
    <img draggable="false" :src="loadBackground()" alt="" />
  </div>
  <div class="fixed bottom-1/5">
    <Piano :sound="sound" />
  </div>
  <PlaySlider />
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { getBackgroundFromLocalStorage } from '@/utils/FileUtil'
import defaultBackground from '@/assets/img/defaultBackground.png'
import { useMIDIStore } from '@/stores/file'
import { onMounted, ref, watch } from 'vue'
import type { Sound } from '@/types/Piano'
import PlaySlider from '@/components/PianoComponents/PlaySlider.vue'
import Soundfont from 'soundfont-player'
const ac = new AudioContext()
const sound = ref<Sound>()
const loadBackground = () => {
  const background = useLocalStorage('background', 'undefined').value
  if (background != 'undefined') {
    return getBackgroundFromLocalStorage('background')!
  } else {
    return defaultBackground
  }
}
const loadMIDIFile = () => {
  const midi = useMIDIStore().base64
}

onMounted(() => {
  Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
    sound.value = {
      player: piano
    }
  })
})
</script>

<style scoped></style>
