<template>
  <div>
    <el-drawer direction="ttb" :teleported="true" :show-close="false" size="50px" :with-header="false" v-model="open" :modal="false">
      <el-row>
        <el-col :span="5"></el-col>
        <el-col :span="1">
          <el-button type="primary" round circle size="default" text>
            <template #icon>
              <el-icon :size="40" v-if="!playStatus">
                <VideoPlay />
              </el-icon>
              <el-icon :size="40" v-else>
                <VideoPause />
              </el-icon>
            </template>
          </el-button>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="12">
          <el-slider size="default"></el-slider>
        </el-col>
        <el-col :span="3"></el-col>
        <el-col :span="2">
          <BackgroundSetting />
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { VideoPause, VideoPlay } from '@element-plus/icons-vue'
import BackgroundSetting from '@/components/SettingComponents/BackgroundSetting.vue'

const open = ref<boolean>(false)
const playStatus = ref<boolean>(false)
const mouseMove = (e: MouseEvent) => {
  open.value = e.pageY < window.innerHeight * 0.2
}

onMounted(() => {
  addEventListener('mousemove', mouseMove)
})
onUnmounted(() => {
  removeEventListener('mousemove', mouseMove)
})
</script>
<style scoped>
:deep(.el-drawer__body) {
  padding: 9px;
}

:deep(.el-drawer) {
  background-color: rgba(255, 255, 255, 10%);
}
</style>
