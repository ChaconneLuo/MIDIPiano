<template>
  <el-upload ref="upload" class="w-1/3 translate-x-20 mx-auto" drag action="#" accept=".mid,.midi" :limit="1" :on-change="onChange">
    <div class="flex justify-center mx-8 flex-row">
      <UploadFileIcon style="height: 80px; width: 80px" />
    </div>
    <div class="text-logoFontLight dark:text-logoFontDark">{{ t('uploadMsg') }}</div>
    <template #tip>
      <div class="text-logoFontLight dark:text-logoFontDark">{{ t('midi') }}</div>
    </template>
  </el-upload>
  <div class="mx-auto z-50">
    <el-button
      class="w-30 mx-auto translate-x-20 bg-buttonBgLight text-logoFontLight dark:bg-buttonBgDark text-logoFontDark"
      size="large"
      primary
      round
      @click="goPiano"
      >{{ t('gotoPiano') }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import type { UploadFile, UploadInstance, UploadProps } from 'element-plus'
import UploadFileIcon from '../Icons/UploadFileIcon.vue'
import { useMIDIStore } from '@/stores/file'
import { fileToBase64 } from '@/utils/FileUtil'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const midi = useMIDIStore()
const router = useRouter()
const upload = ref<UploadInstance>()
const onChange: UploadProps['onChange'] = (file: UploadFile) => {
  fileToBase64(file.raw).then((res) => {
    midi.base64 = res
    goPiano()
  })
}
const goPiano = () => {
  router.push('/piano')
}
</script>

<style scoped>
:deep(.el-upload-dragger) {
  background-color: transparent;
}
</style>
