<template>
    <div class="bottombar">
        <div :class="{text:!menuStore.isflod,text_hide:menuStore.isflod}">KivoWiki ©2023 Created by HyacinthusAcademy</div>
        <div :class="{text:!menuStore.isflod,text_hide:menuStore.isflod}">Version: 1.0.0-beta</div>
        <s-divider></s-divider>
        <div :class="{link:!menuStore.isflod,link_hide:menuStore.isflod}">
            <a href="">使用条款和声明</a>
            <span class="split"></span>
            <a href="https://www.wenjuan.com/s/UZBZJvneoZ/">意见反馈</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuStore from '@/store/modules/menu';
let menuStore = MenuStore()

</script>

<style lang="less" scoped>
@import url("../../assets/style.less");

.bottombar{
    height: @bottom-height;
    width: 100%;
    padding: 10px;
    background-color: white;
    .text{
        padding-top: 10px;
        margin-top: 10px;
        margin-bottom: 5px;
        text-align: center;
        padding-right: @menu-width;
    }
    .text_hide{
        padding-top: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
    .link{
        margin-top: 5px;
        text-align: center;
        padding-right: @menu-width;
    }
    .link_hide{
        margin-top: 5px;
        text-align: center;
    }
    .split{
        margin: 0 10px 0 10px;
    }
    .split::before,
    .split::after{
        content: '';
        border-left: solid 1px var(--s-color-outline-variant, black);
    }
}
</style>