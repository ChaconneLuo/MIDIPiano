<template>
  <div>
    <el-upload ref="backgroundUpload" :limit="1" :show-file-list="false" :on-change="onChange">
      <template #trigger>
        <el-button class="bg-buttonBgLight" type="primary" round :bg="true">
          {{ t('replaceBackground') }}
        </el-button>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { UploadFile, UploadFiles, UploadInstance, UploadProps } from 'element-plus'
import { ref } from 'vue'
import { fileToBase64 } from '@/utils/FileUtil'
import { useLocalStorage } from '@vueuse/core'

const { t } = useI18n()

const upload = ref<UploadInstance>()

const onChange: UploadProps['onChange'] = (file: UploadFile) => {
  fileToBase64(file.raw).then((res) => {
    useLocalStorage('background', '').value = res
  })
}
</script>

<style scoped></style>
