<template>
  <div>
    <el-menu
      style="background-color: transparent"
      class="border-0 h-75"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      text-color="#000"
      active-text-color="#000"
    >
      <div class="flex text-3xl text-logoFontLight items-center ml-[50px] font-gill dark:text-logoFontDark">MIDIPiano</div>
      <div class="grow" />
      <div class="flex items-center p-[30px]"><DarkLightSwitch /></div>
      <div class="flex justify-center">
        <LanguageSwitch />
      </div>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import LanguageSwitch from './LanguageSwitch.vue'

const handleSelect = (index: string) => {
  console.log(index)
}
</script>
<style scoped>
.el-menu--horizontal :deep(.el-menu-item.is-active) {
  border: 0;
}
</style>
