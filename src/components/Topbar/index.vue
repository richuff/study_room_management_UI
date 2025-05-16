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

        <div slot="headline" class="icon_box" @click="ToHome">
            <s-icon class="top_icon" name="home"></s-icon>
            <span class="top_text">主页</span>
        </div>

        <s-search placeholder="搜索关键字..." class="search_button" :value="search_text"
            @input="getText($event as InputEvent)">
            <s-icon-button slot="start" @click="start_search">
                <s-icon name="search" ></s-icon>
            </s-icon-button>
            <s-icon-button slot="end" @click="clear_search">
                <s-icon name="close"></s-icon>
            </s-icon-button>
        </s-search>
        <img @click="ToHome" src="/TT_main.png" class="title_img">
    </s-appbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Drawer } from 'sober'
import MenuStore from '@/store/modules/menu'
import { useRouter } from 'vue-router'

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

const ToHome = () => {
    $router.push("/home")
}

onMounted(() => {
    if (menuStore.isflod) {
        props.menu?.close()
    } else {
        props.menu?.show()
    }
})

const start_search = ()=>{
    window.open("https://cn.bing.com/search?q=" + search_text.value.trim());
}
</script>

<style lang="less" scoped>
@import url("../../assets/style.less");

.appbar {
    animation: whiteToTrans 0.2s;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: transparent;
    height: @menu-height;

    .icon_box {
        margin-left: 20px;
        margin-right: 30px;
        margin-bottom: 15px;
        margin-top: 10px;

        .top_icon {
            height: 25px;
            width: 25px;
            animation: blackToWhite 0.1;
            color: white;
        }

        .top_text {
            margin-left: 4px;
            font-size: medium;
            animation: blackToWhite 0.1;
            color: white;
        }
        
        .menu_item{
            width:60px;
            padding-left: 23px;
        }

        .menu_text{
            justify-content: center;
            align-items: center;
        }
        .menu_items{
            width:60px;
            padding-left: 13px;
        }
    }

    .icon_box:hover {
        cursor: pointer;

        .top_icon {
            color: rgb(226, 171, 234);
        }

        .top_text {
            color: rgb(226, 171, 234);
        }
    }
}

.icon_background {
    animation: transToWhite 0.2s;
    background-color: white;

    .icon_box {
        margin-left: 20px;
        margin-right: 30px;
        margin-bottom: 15px;

        .top_icon {
            height: 25px;
            width: 25px;
            animation: whiteToBlack 0.1;
            color: black;
        }

        .top_text {
            font-size: medium;
            animation: whiteToBlack 0.1;
            color: black;
        }
    }

    .icon_box:hover {
        cursor: pointer;

        .top_icon {
            color: rgb(49, 41, 135);
        }

        .top_text {
            color: rgb(49, 41, 135);
        }
    }
}

.search_button {
    width: 300px;
    height: 40px;
}

.title_img {
    width: 22%;
    height: 80%;
    object-fit: cover;
    /* 图片按比例填充容器 */
    margin-left: 20px;
    margin-right: 10px;
}

.title_img:hover {
    cursor: pointer;
}

@keyframes transToWhite {
    from {
        background-color: transparent;
    }

    to {
        background-color: white;
    }
}

@keyframes whiteToTrans {
    from {
        background-color: white;
    }

    to {
        background-color: transparent;
    }
}

@keyframes whiteToBlack {
    from {
        color: white;
    }

    to {
        color: black;
    }
}

@keyframes blackToWhite {
    from {
        color: black;
    }

    to {
        color: white;
    }
}
</style>