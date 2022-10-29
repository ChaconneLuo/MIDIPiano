<template>
  <el-upload ref="upload" class="w-1/3 translate-x-20 mx-auto" drag accept=".midi" :limit="1" auto-upload :on-change="handleChange">
    <div class="flex justify-center mx-8 flex-row">
      <UploadFileIcon style="height: 80px; width: 80px" />
    </div>
    <div class="text-logoFontLight dark:text-logoFontDark">{{ t('uploadMsg') }}</div>
    <template #tip>
      <div class="text-logoFontLight dark:text-logoFontDark">{{ t('midi') }}</div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import type { UploadInstance, UploadProps } from 'element-plus'
import UploadFileIcon from '../Icons/UploadFileIcon.vue'

const { t } = useI18n()
const upload = ref<UploadInstance>()
const handleChange: UploadProps['onChange'] = (file) => {}
</script>

<style scoped>
:deep(.el-upload-dragger) {
  background-color: transparent;
}
</style>
