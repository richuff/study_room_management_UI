<template>
    <s-appbar :class="{ appbar: true, icon_background: menuStore.showBack }">
        <div slot="headline" class="icon_box" @click="show">
            <s-icon class="top_icon" name="menu"></s-icon>
            <span class="top_text">更多</span>
        </div>

        <div slot="headline" class="icon_box">
            <s-popup-menu>
                <div slot="trigger"> <i class="top_icon iconfont icon-zidantu"></i>
                    <span class="top_text">档案库</span>
                </div>
                <s-popup-menu-item class="menu_item">
                    <sapn class="menu_text">查询</sapn>
                </s-popup-menu-item>
                <s-popup-menu-item class="menu_items">
                    <sapn class="menu_texts">预约查询</sapn>
                </s-popup-menu-item>
                <s-popup-menu-item class="menu_items">
                    <sapn class="menu_texts">空闲查询</sapn>
                </s-popup-menu-item>
            </s-popup-menu>
        </div>

        <div slot="headline" class="icon_box" @click="ToHome($router)">
            <s-icon class="top_icon" name="home"></s-icon>
            <span class="top_text">主页</span>
        </div>

        <s-search placeholder="搜索关键字..." class="search_button" :value="search_text"
            @input="getText($event as InputEvent)">
            <s-icon-button slot="start"  class="search_box" @click="start_search">
                <s-icon name="search" class="search_icon"></s-icon>
            </s-icon-button>
            <s-icon-button slot="end" class="close_box" @click="clear_search">
                <s-icon name="close" class="close_icon"></s-icon>
            </s-icon-button>
        </s-search>
        <img @click="ToHome($router)" src="/TT_main.png" class="title_img">
    </s-appbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'sober'
import MenuStore from '@/store/modules/menu'
import { useRouter } from 'vue-router'
import { ToHome } from '@/utils/router'
let $router = useRouter();

interface Props {
    menu: Drawer | null
}
let menuStore = MenuStore()

const props = defineProps<Props>()
const search_text = ref<string>("")

const show = () => {
    if (menuStore.isflod) {
        props.menu?.show()
    } else {
        props.menu?.close()
    }
    menuStore.isflod = !menuStore.isflod
}

const getText = (i: InputEvent) => {
    const item = i.target as HTMLInputElement
    search_text.value = item.value
}

const clear_search = () => {
    search_text.value = ""
}

const start_search = ()=>{
    window.open("https://cn.bing.com/search?q=" + search_text.value.trim());
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>