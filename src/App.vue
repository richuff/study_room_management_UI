<template>
  <div class="content">
    <button @click="slove">c</button>
  </div>
</template>

<script setup lang="ts">
import {showSuccess} from '@/widget/SnackBar.ts'

const slove = ()=>{
  showSuccess("test")
}

</script>


<style lang="less" scoped>
@import url("@/assets/style.less");

.content {
    width: @back-width;
    height: @back-height;
    background-color: @back-color;
}
</style>
