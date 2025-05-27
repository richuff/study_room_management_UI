<template>
    <div :class="{bottombar:true,bottombar_hide:menuStore.isflod}">
        <div :class="{text:!menuStore.isflod,text_hide:menuStore.isflod}">study_room_management ©2025 Created by richuff</div>
        <div :class="{text:!menuStore.isflod,text_hide:menuStore.isflod}">Version: 1.0.0-beta</div>
        <s-divider></s-divider>
        <div :class="{link:!menuStore.isflod,link_hide:menuStore.isflod}">
            <a href="">
                <span>使用条款和声明</span>
            </a>
            <span class="split"></span>
            <a href="https://www.wenjuan.com/s/UZBZJvneoZ/">
                <span>意见反馈</span>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuStore from '@/store/modules/menu';
let menuStore = MenuStore()

</script>

<style lang="less" scoped>
@import url('./index.less');
</style>