import { parseArrayBuffer } from 'midi-json-parser'
import type { IMidiFile } from 'midi-json-parser-worker'

export const readMIDI = (midi: ArrayBuffer) => {
  return new Promise<IMidiFile>((resolve, reject) => {
    parseArrayBuffer(midi).then((json) => {
      return resolve(json)
    })
  })
}
