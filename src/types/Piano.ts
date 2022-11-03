export interface WhiteKeyProps {
  whiteKeyWidth: number
  pos_x: number
  data: undefined | Array<BlockNote>
  id: number
  sound: any
  height: number
  color: 'white' | 'black'
}

export interface AllKeysProps {
  wh: number
  whiteKeyWidth: number
  data: Array<BlockNote>
  sound: any
  height: number
}

export interface BlockNote {
  color: string
  width: number
  NoteNumber: number
  Velocity: number
  pos_y: number
  pos_x: number
  height?: number
  creationTime: number
  pauseTime?: number
  playingTime?: number
  duration: number
  detectTime?: number
  timeWasTaken?: boolean
  wasDetected: boolean
}
