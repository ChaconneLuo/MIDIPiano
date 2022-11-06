<template>
  <div class="absolute">
    <PianoKey
      v-for="key in keysPosition()"
      :key="key"
      :id="key.noteId"
      :note-id="key.noteId"
      :color="key.color"
      :height="key.height"
      :pos-x="key.posX"
      :sound="key.sound"
      :key-width="key.keyWidth"
    />
  </div>
</template>
<script lang="ts" setup>
import PianoKey from './PianoKey.vue'
import type { KeyProps, Sound } from '@/types/Piano'
import { onMounted, onUnmounted, ref } from 'vue'

interface PianoProps {
  sound: Sound
}

const props = defineProps<PianoProps>()
const keyWidth = ref<number>(window.innerWidth / 52)
const keyHeight = ref<number>(window.innerHeight / 5)

const handleResize = () => {
  keyHeight.value = window.innerWidth / 52
  keyWidth.value = window.innerWidth / 5
}

const keysPosition = (): Array<KeyProps> => {
  const Keys: Array<KeyProps> = []
  let countNoteId = 21
  const drawKey = (position: number, noteId: number, color: 'white' | 'black') => {
    Keys.push({
      noteId: noteId.toString(),
      keyWidth: keyWidth.value,
      posX: position,
      height: keyHeight.value,
      color,
      sound: props.sound
    })
  }
  for (let i = 0; i < 52; i++) {
    drawKey(keyWidth.value * i, countNoteId, 'white')
    const num = countNoteId % 12
    if (num === 0 || num === 2 || num === 5 || num === 7 || num === 9) {
      countNoteId++
      if (countNoteId < 109) {
        drawKey(keyWidth.value * i + keyWidth.value / 1.4, countNoteId, 'black')
      }
    }
    countNoteId++
  }
  return Keys
}
onMounted(() => {
  addEventListener('resize', handleResize)
})
onUnmounted(() => {
  removeEventListener('resize', handleResize)
})
</script>
<style scoped></style>
