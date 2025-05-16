<template>
    <Topbar :menu="menu" />
    <s-drawer ref="menu" id="drawer">
        <div slot="start" :class="{ menu_bar_show: true, menu_bar_hide: !menuStore.isflod }">
            <s-menu>
                <s-menu-item>
                    <img src="/TT_main.png" class="setting_title"/>
                </s-menu-item>
            </s-menu>
            <s-menu @click="GoRoute">
                <s-menu-item @click="GoRoute">
                    <i class="iconfont icon-jiaocheng" slot="start"></i>
                    <span class="bar_text">登录</span>
                </s-menu-item>
                <s-menu-item @click="GoRoute">
                    <s-icon slot="start" name="search"></s-icon>
                    <span class="bar_text">注册</span>
                </s-menu-item>
            </s-menu>
            <s-menu style="max-width: 280px; margin: 0">
                <s-menu-item @click="GoRoute">
                    <s-icon slot="start" name="arrow_drop_down"></s-icon>
                    <span class="bar_text">设置</span>
                </s-menu-item>
            </s-menu>
        </div>
        <s-scroll-view @scroll="scroll" :class="{ main: true, main_menu: !menuStore.isflod }">
            <s-card :clickable="true" class="card">
                <div slot="image">
                    <img src="/BG_Spring.jpg" />
                </div>
                <div slot="headline">Headline</div>
                <div slot="subhead">Subhead</div>
                <div slot="text">Cards are often used for grid lists, which provide click effects</div>
            </s-card>
            <s-card :clickable="true" class="card">
                <div slot="image">
                    <img src="/BG_Spring.jpg" />
                </div>
                <div slot="headline">Headline</div>
                <div slot="subhead">Subhead</div>
                <div slot="text">Cards are often used for grid lists, which provide click effects</div>
            </s-card>
            <br>
            <s-card :clickable="true" class="card">
                <div slot="image">
                    <img src="/BG_Spring.jpg" />
                </div>
                <div slot="headline">Headline</div>
                <div slot="subhead">Subhead</div>
                <div slot="text">Cards are often used for grid lists, which provide click effects</div>
            </s-card>
            <br>
            <s-card :clickable="true" class="card">
                <div slot="image">
                    <img src="/BG_Spring.jpg" />
                </div>
                <div slot="headline">Headline</div>
                <div slot="subhead">Subhead</div>
                <div slot="text">Cards are often used for grid lists, which provide click effects</div>
            </s-card>
            <br>
            <s-card :clickable="true" class="card">
                <div slot="image">
                    <img src="/BG_Spring.jpg" />
                </div>
                <div slot="headline">Headline</div>
                <div slot="subhead">Subhead</div>
                <div slot="text">Cards are often used for grid lists, which provide click effects</div>
            </s-card>
        </s-scroll-view>
    </s-drawer>
</template>

<script setup lang="ts">
import Topbar from "@/components/Topbar/index.vue"
import MenuStore from "@/store/modules/menu";
import { useRouter } from 'vue-router'
let $router = useRouter();

import { ref } from 'vue'
import { Drawer } from 'sober'

let menuStore = MenuStore()
const menu = ref<Drawer | null>(null);

const scroll = (e: any) => {
    if (e.target.scrollTop > 40) {
        menuStore.showBack = true
    } else {
        menuStore.showBack = false
    }
}

const GoRoute = (vc: any) => {
    $router.push(vc.index);
}
</script>

<style lang="less">
@import url("../../assets/style.less");

.main {
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: rightToLeft 0.4s;

    .card {
        margin-left: 10px;
        margin-top: 10px;
    }
}

.main_menu {
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    animation: leftToRight 0.4s;
    animation-fill-mode: forwards;

    .card {
        margin-left: 10px;
        margin-top: 10px;
    }
}



#drawer {
    padding-top: calc(@menu-height - 5px);
    height: calc(100vh - @menu-height);
    .bar_text{
        margin-left: 5px;
    }
    .setting_title{
        height: 100%;
        width: 100%;
        object-fit:cover;
    }
}

.title_icon {
    margin-left: 10px;
}

.menu_bar_show {
    position: fixed;
    width: @menu-width;
    animation: longToShort 0.4s;
}

.menu_bar_hide {
    position: fixed;
    animation: shortToLong 0.4s;
}
s-menu-item{
    margin-top: 5px;
}
s-menu-item:hover{
    background-color: rgb(233, 234, 241);
}

@keyframes shortToLong {
    from {
        width: 0;
    }

    to {
        width: @menu-width;
    }
}

@keyframes longToShort {
    from {
        width: @menu-width;
    }

    to {
        width: 0;
    }
}

@keyframes rightToLeft {
    from {
        margin-left: @menu-width;
    }

    to {
        margin-left: 10;
    }
}

@keyframes leftToRight {
    from {
        margin-left: 10;
    }

    to {
        margin-left: @menu-width;
    }
}
</style>