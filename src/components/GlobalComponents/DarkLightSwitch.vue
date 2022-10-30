<template>
  <el-switch
    @change="toggleDark"
    size="large"
    :inactive-icon="Sunny"
    :active-icon="Moon"
    inline-prompt
    v-model="theme"
    style="--el-switch-on-color: #2c2c2c"
  ></el-switch>
</template>
<script lang="ts" setup>
import { useDark, useLocalStorage, useToggle } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isDark = useDark({
  selector: 'body',
  storageKey: 'useDark',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
const theme = ref<boolean>(useLocalStorage('useDark', 'auto').value === 'dark')
</script>
<style scoped>
.el-switch {
  height: 20px;
  width: 40px;
}
.el-switch.is-checked :deep .el-switch__core .el-switch__action {
  background-color: black;
}
</style>
