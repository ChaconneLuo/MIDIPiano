import type { UploadRawFile } from 'element-plus'

export const fileToBase64 = (file: UploadRawFile | string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // @ts-ignore
    reader.readAsDataURL(file)
    reader.onload = () => {
      // @ts-ignore
      resolve(reader.result)
    }
  })
}

export const saveBase64ToLocalStorage = (key: string, file: UploadRawFile): boolean => {
  fileToBase64(file).then((res) => {
    localStorage.setItem(key, res)
    return true
  })
  return false
}

export const getBackgroundFromLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}
export const loadBase64FromLocalStorage = (key: string): ArrayBuffer => {
  const item = localStorage.getItem(key)
  const base64Parts = item?.split(',')
  const base64Content = base64Parts !== undefined ? base64Parts[1] : null
  if (base64Content) {
    const binary = window.atob(base64Content)
    const arr = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      arr[i] = binary.charCodeAt(i)
    }
    return arr.buffer
  }
  return new ArrayBuffer(1)
}
