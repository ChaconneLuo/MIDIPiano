import { useLocalStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'
import zhCN from './config/zh-CN'
import enUS from './config/en-US'

function getLocale(): string {
  return useLocalStorage('locale', 'en-US').value
}

const i18n = createI18n({
  locale: getLocale(),
  globalInjection: true,
  allowComposition: true,
  legacy: false,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
