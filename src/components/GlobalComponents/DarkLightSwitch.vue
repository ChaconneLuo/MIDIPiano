<template>
  <div>
    <el-switch @change="toggleDark" :inactive-icon="Sunny" :active-icon="Moon" inline-prompt></el-switch>
  </div>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
