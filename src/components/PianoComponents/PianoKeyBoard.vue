<template>
  <div>
    <PianoKey
      v-for="key in keysPosition()"
      :key="key"
      :id="key.id"
      :color="key.color"
      :data="key.data"
      :height="key.height"
      :pos_x="key.pos_x"
      :sound="key.sound"
      :white-key-width="key.whiteKeyWidth"
    />
  </div>
</template>

<script lang="ts" setup>
import PianoKey from '@/components/PianoComponents/PianoKey.vue'
import type { BlockNote, WhiteKeyProps } from '@/types/Piano'

interface AllKeysProps {
  wh: number
  whiteKeyWidth: number
  data: Array<BlockNote>
  sound: any
  height: number
}

let props = defineProps<AllKeysProps>()

const keysPosition = (): Array<WhiteKeyProps> => {
  const { wh, whiteKeyWidth, data, sound, height } = props
  const Returning: Array<WhiteKeyProps> = []
  let counter_ids: number = 21

  function drawWhitePianoKey(pos_x: number, id: number) {
    Returning.push({ whiteKeyWidth, pos_x, data, id, sound, height, color: 'white' })
  }

  function drawBlackPianoKey(pos_x: number, id: number) {
    Returning.push({ whiteKeyWidth, pos_x, data, id, sound, height, color: 'black' })
  }

  for (let x = 0; x < 52; x++) {
    drawWhitePianoKey(whiteKeyWidth * x, counter_ids)
    const num = counter_ids % 12
    if (num === 0 || num === 2 || num === 5 || num === 7 || num === 9) {
      counter_ids++
      if (counter_ids < 109) {
        drawBlackPianoKey(whiteKeyWidth * x + whiteKeyWidth / 1.4, counter_ids)
      }
    }
    counter_ids++
  }
  return Returning
}
</script>

<style scoped></style>
