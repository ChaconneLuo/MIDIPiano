import { defineStore } from 'pinia'
import type { MIDIFile } from '@/types/MIDIFile'
export const useMIDIStore = defineStore('MIDI', {
  state: (): MIDIFile => {
    return {
      base64: '',
      url: ''
    }
  }
})
