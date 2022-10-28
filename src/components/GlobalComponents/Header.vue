<template>
  <div>
    <el-menu class="header" mode="horizontal" :ellipsis="false" @select="handleSelect" text-color="#000" active-text-color="#000">
      <div class="logo">MIDIPiano</div>
      <div class="flex-grow" />
      <div class="dark-switch"><DarkLightSwitch /></div>
      <div class="lang-switch">
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
<style lang="scss" scoped>
.header {
  background: transparent;
  height: 75px;
}
.logo {
  font-size: 30px;
  color: var(--font-color);
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.flex-grow {
  flex-grow: 1;
}
.dark-switch {
  display: flex;
  align-items: center;
  padding: 30px;
}
.el-menu--horizontal :deep(.el-menu-item.is-active) {
  border: 0;
}
.el-menu {
  border: 0;
}
.lang-switch {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
