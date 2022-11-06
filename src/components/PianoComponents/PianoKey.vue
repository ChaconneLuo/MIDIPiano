<template>
  <div>
    <div
      v-if="props.color === 'white'"
      class="white_key"
      v-on:mousedown.self="keyDown"
      v-on:mouseover.self="keyMove"
      v-on:mouseout.self="keyDefault"
      :id="props.noteId"
      :style="{
        position: 'absolute',
        width: props.keyWidth + 'px',
        height: props.height + 'px',
        left: props.posX + 'px',
        background: background
      }"
    ></div>
    <div
      v-else
      class="black_key"
      v-on:mousedown.self="keyDown"
      v-on:mouseover.self="keyMove"
      v-on:mouseout.self="keyDefault"
      :id="props.noteId"
      :style="{
        position: 'absolute',
        width: props.keyWidth / 1.8 + 'px',
        height: props.height / 1.6 + 'px',
        left: props.posX + 'px',
        background: background
      }"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Sound } from '@/types/Piano'
import { useKeyStore } from '@/stores/keyStatus'

interface KeyProps {
  noteId: string
  keyWidth: number
  height: number
  posX: number
  color: 'white' | 'black'
  sound: Sound
}

const props = defineProps<KeyProps>()
const keyStatus = useKeyStore()
const getColor = () => {
  return props.color === 'white' ? '#fffff0' : '#000000'
}
const getTriggerColor = () => {
  return props.color === 'white' ? '#FACC94' : '#75C3ED'
}
const background = ref<string>(getColor())
const keyTrigger = () => {
  background.value = getTriggerColor()
  props.sound.player.play(props.noteId)
}
const keyDown = () => {
  keyStatus.keyDown = true
  keyTrigger()
}
const keyMove = () => {
  if (keyStatus.keyDown) {
    keyTrigger()
  }
}
const keyDefault = () => {
  background.value = getColor()
}
const keyUp = () => {
  keyStatus.keyDown = false
  background.value = getColor()
}
onMounted(() => {
  addEventListener('mouseup', keyUp)
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
