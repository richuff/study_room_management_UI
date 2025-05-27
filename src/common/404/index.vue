<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <p>404</p>
            <BottomBarWithFixed></BottomBarWithFixed>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBarWithFixed from '@/components/BottomBarWithFixed/index.vue'
import MenuStore from '@/store/modules/menu';
let menuStore  = MenuStore()
</script>

<style lang="less" scoped>

</style>