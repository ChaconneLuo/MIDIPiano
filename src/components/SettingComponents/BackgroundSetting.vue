<template>
  <div>
    <el-upload ref="backgroundUpload" :limit="1" auto-upload :show-file-list="false" :on-change="onChange">
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
import type { UploadInstance, UploadProps } from 'element-plus'
import { ref } from 'vue'

const { t } = useI18n()

const upload = ref<UploadInstance>()

const onChange: UploadProps['onChange'] = () => {}
</script>

<style scoped></style>
