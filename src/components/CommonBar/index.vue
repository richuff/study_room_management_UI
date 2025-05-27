<template>
    <Topbar :menu="menu"/>
    <s-drawer hiddenstart="true" ref="menu" id="drawer">
        <div slot="start" id="main_menu" :class="{ menu_bar_show: true, menu_bar_hide: menuStore.isflod }">
            <s-menu @click="ToHome($router)" class="title_icon" clickable="true">
                <img src="/TT_main.png" class="setting_title"/>
            </s-menu>
            <s-menu>
                <s-menu-item @click="ToLogin($router)">
                    <i :class="[menuStore.isflod ? 'icon_hide' : '']" class="iconfont icon-login" slot="start"></i>
                    <span class="bar_text">登录</span>
                </s-menu-item>
                <s-menu-item @click="ToRegister($router)">
                    <i :class="[menuStore.isflod ? 'icon_hide' : '']" class="iconfont icon-register" slot="start"></i>
                    <span class="bar_text">注册</span>
                </s-menu-item>
            </s-menu>
            <s-menu>
                <s-menu-item>
                    <i :class="[menuStore.isflod ? 'icon_hide' : '']" class="iconfont icon-setting" slot="start"></i>
                    <span class="bar_text">设置</span>
                </s-menu-item>
            </s-menu>
        </div>
        <slot></slot>
    </s-drawer>
</template>

<script setup lang="ts">
import Topbar from "@/components/Topbar/index.vue"
import MenuStore from "@/store/modules/menu";
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'
import { ToHome,ToLogin, ToRegister } from "@/utils/router";
let $router:Router = useRouter();

import { ref,onMounted } from 'vue'
import { Drawer } from 'sober'

let menuStore = MenuStore()
const menu = ref<Drawer | null>(null);

onMounted(()=>{
    const scrollView:HTMLElement | null = document.querySelector(".main")
    const menuMain:HTMLDivElement | null = document.querySelector("#main_menu")
    
    new ResizeObserver(() => {
        scrollView?.classList.toggle('main_menu',(menu.value as HTMLElement).offsetWidth >= 1024)
        menuMain?.classList.toggle('menu_bar_hide', (menu.value as HTMLElement).offsetWidth <= 1024)
    
        menuMain?.classList.toggle('test', (menu.value as HTMLElement).offsetWidth <= 400)
    }).observe(menu.value as Element)
})
</script>

<style lang="less">
@import url('./index.less');
</style>