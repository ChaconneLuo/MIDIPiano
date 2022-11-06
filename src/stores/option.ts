import { defineStore } from 'pinia'
import type { Configs } from '@/types/Configs'

export const useOptionStore = defineStore('Option', {
  state: (): Configs => {
    return {
      playSpeed: 15,
      colorList: ['#d0b3df'],
      darkPieceColor: '#8EF971',
      lightPieceColor: '#0DA8D8',
      shadowColor: '#000',
      blockRadius: 10
    }
  }
})
