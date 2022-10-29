<template>
  <el-dropdown @command="switchLanguage">
    <div class="flex justify-center mx-8 flex-col">
      <LanguageIcon style="height: 35px; width: 35px" />
    </div>
    <template #dropdown>
      <el-dropdown-menu @change="switchLanguage">
        <el-dropdown-item v-for="locale in availableLocales" :key="locale" :command="locale">{{ languageComputing(locale) }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import LanguageIcon from '../Icons/LanguageIcon.vue'

const { availableLocales, locale, getLocaleMessage } = useI18n()

const languageComputing = computed(() => {
  return (lang: string) => {
    let language = getLocaleMessage(lang)
    if (language) {
      return language['lang']
    } else {
      return ''
    }
  }
})

const switchLanguage = (lang: string) => {
  if (availableLocales.includes(lang)) {
    useLocalStorage('locale', 'en-US').value = lang
    locale.value = lang
  }
}
</script>

<style scoped></style>
