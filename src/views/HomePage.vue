<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
    </el-container>
  </div>
  <div class="main">
    <div class="topic"></div>
    <div class="triangle"></div>
    <div class="file-upload"></div>
  </div>
</template>
<script lang="ts" setup>
import Header from '../components/GlobalComponents/Header.vue'
</script>
<style lang="scss" scoped>
@use '../assets/css/global.scss' as *;
.el-header {
  padding: 0;
}
.el-container {
  position: fixed;
  z-index: 100;
  width: 100vw;
}
.main {
  display: flex;
}
.topic {
  display: inline;
  width: 50vw;
  height: 100vh;
  background-color: $mainPageBackgroundColor;
}
.triangle {
  display: inline;
  z-index: 50;
  overflow: hidden;
  border-left: 7.5vw solid $mainPageBackgroundColor;
  border-right: 7.5vw solid transparent;
  border-top: 50vh solid transparent;
  border-bottom: 50vh solid $mainPageBackgroundColor;
}

.file-upload {
  position: fixed;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-color: $fileUploadBackgroundColor;
}
</style>
