import { defineStore } from 'pinia'
import type { KeyStatus } from '@/types/KeyStatus'

export const useKeyStore = defineStore('Key', {
  state: (): KeyStatus => {
    return {
      keyDown: false
    }
  }
})
