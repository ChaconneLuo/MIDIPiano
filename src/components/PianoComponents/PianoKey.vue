<template>
  <div
    v-if="props.color === 'white'"
    class="white_key"
    :id="props.id"
    :style="{
      position: 'absolute',
      width: props.whiteKeyWidth + 'px',
      height: props.height + 'px',
      left: props.pos_x + 'px',
      background: background
    }"
  ></div>
  <div
    v-else
    :id="props.id"
    class="black_key"
    :style="{
      position: 'absolute',
      width: props.whiteKeyWidth / 1.8 + 'px',
      height: props.height / 1.6 + 'px',
      left: props.pos_x + 'px',
      background: background
    }"
  ></div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue'
import type { BlockNote } from '@/types/Piano'

interface WhiteKeyProps {
  whiteKeyWidth: number
  pos_x: number
  data: undefined | Array<BlockNote>
  id: number
  sound: any
  height: number
  color: 'white' | 'black'
}

let props = defineProps<WhiteKeyProps>()
let background = ref<string>(props.color)
onMounted(() => {
  const defaultBackground: string = props.color! === 'white' ? '#fffff0' : '#000000'
  const wasDetectedBackground: string = '#5085f8'
  // props.data!.map((event) => {
  //   if (event.NoteNumber === props.id) {
  //     if (event.wasDetected) {
  //       background.value = wasDetectedBackground
  //       props.sound && props.sound.instrument.play(props.id).stop(props.sound.ac.currentTime + event.duration / 1000)
  //     } else {
  //       background.value = defaultBackground
  //     }
  //   }
  //   return null
  // })
})
</script>

<style scoped>
.white_key {
  border: 1px solid black;
  border-bottom: none;
  position: absolute;
  box-shadow: 0 4px 3px -3px black;
  background-color: rgb(255, 255, 240);
  z-index: 30;
  border-radius: 1px 1px 5px 5px;
}

.black_key {
  border: 1px solid black;
  background-color: black;
  position: absolute;
  box-shadow: 0px 1px 4px black;
  border-radius: 1px 1px 5px 5px;
  z-index: 33;
}
</style>
