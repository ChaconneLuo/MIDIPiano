import { defineStore } from 'pinia'
import type { Options } from '@/types/Options'

export const useOptionStore = defineStore('Option', {
  state: (): Options => {
    return {
      PlaySpeed: 15,
      ColorList: ['#d0b3df'],
      DarkPieceColor: '#8EF971',
      LightPieceColor: '#0DA8D8',
      ShadowColor: '#000',
      BlockRadius: 10
    }
  }
})
