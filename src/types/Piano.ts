import type { Player } from 'soundfont-player'

export interface KeyProps {
  noteId: string
  keyWidth: number
  height: number
  posX: number
  color: 'white' | 'black'
  sound: Sound
}

export interface PianoProps {
  sound: Sound
}

export interface Sound {
  player: Player
}
