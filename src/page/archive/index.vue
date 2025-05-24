<template>
    <CommonBar>
        <s-scroll-view @scroll="scroll" :class="{ main: true, main_menu: !menuStore.isflod }">
            <div></div>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import { scroll } from '@/utils/scroll';
import MenuStore from '@/store/modules/menu';
let menuStore  = MenuStore()

</script>

<style lang="less" scoped>

</style>