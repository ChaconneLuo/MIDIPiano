<template>
  <div>
    <PianoKeyBoard :white-key-width="whiteWidth" :sound="sound" :height="height" :data="undefined" :wh="20" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import soundFont from 'soundfont-player'
import PianoKeyBoard from '@/components/PianoComponents/PianoKeyBoard.vue'

const whiteWidth = ref<number>(window.innerWidth / 52)
const height = ref<number>(window.innerHeight / 5)
const sound = ref<any>()
const handleResize = () => {
  whiteWidth.value = window.innerWidth / 52
  height.value = window.innerHeight / 5
}

const keysPosition = (type: 'black' | 'all'): Array<any> => {
  let Return: Array<any> = []
  let idCounter = 21 //钢琴最低音对应 midi 的note id。
  for (let i = 0; i < 52; i++) {
    type === 'all' && Return.push({ position: whiteWidth.value * i, width: whiteWidth, noteId: idCounter })
    let num = idCounter % 12 //判断黑键位置
    if (num == 0 || num == 2 || num == 5 || num == 7 || num == 9) {
      idCounter++
      if (idCounter < 109) {
        type === 'all' &&
          Return.push({
            position: whiteWidth.value * i + whiteWidth.value / 1.4,
            width: whiteWidth.value / 1.8,
            noteId: idCounter
          })
        type === 'black' && Return.push(idCounter)
      }
    }
    idCounter++
  }
  return Return
}
onMounted(() => {
  addEventListener('resize', handleResize)
  const audioContext = new AudioContext()
  soundFont.instrument(audioContext, 'acoustic_grand_piano').then(function (piano) {
    sound.value = {
      instrument: piano,
      ac: audioContext
    }
  })
})
onUnmounted(() => {
  removeEventListener('resize', handleResize)
})
</script>

<style scoped></style>
