<template>
    <s-appbar :class="{appbar:true,icon_background:menuStore.showBack}">
        <div slot="headline" class="icon_box"  @click="show">
            <s-icon class="top_icon" name="menu"></s-icon>
            <span class="top_text">更多</span>
        </div>
        
        <div slot="headline" class="icon_box">
            <s-icon class="top_icon" name="favorite"></s-icon>
            <span class="top_text">典藏库</span>
        </div>
        
        <div  slot="headline" class="icon_box">
            <s-icon class="top_icon" name="home"></s-icon>
            <span class="top_text">主页</span>
        </div>

        <s-search placeholder="搜索关键字..." class="search_button" :value="search_text" @input="getText($event as InputEvent)">
            <s-icon class="search_icon" name="search" slot="start"></s-icon>
            <s-icon-button slot="end" @click="clear_search">
                <s-icon name="close"></s-icon>
            </s-icon-button>
        </s-search>
        <img src="/TT_main.png" class="title_img">
    </s-appbar>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Drawer} from 'sober'
import MenuStore from '@/store/modules/menu'

interface Props {
    menu: Drawer | null
}
let menuStore = MenuStore()

const props = defineProps<Props>()
const search_text = ref<string>("")

const show = ()=>{
    props.menu?.toggle()
    menuStore.isflod = !menuStore.isflod
}
const getText = (i:InputEvent)=>{
    search_text.value += i.data ? i.data : ""
}

const clear_search = ()=>{
    search_text.value = ""
}
</script>

<style lang="less" scoped>
@import url("../../assets/style.less");
.appbar{
    animation: whiteToTrans 0.2s;
    position: fixed;
    width: 100%;
    z-index:100;
    background-color: transparent;
    height: @menu-height;
    .icon_box{
        margin-left: 20px;
        margin-right: 30px;
        margin-bottom: 15px;
        margin-top: 10px;
        .top_icon{
            height: 25px;
            width: 25px;
            animation: blackToWhite 0.1;
            color: white;
        }
        .top_text{
            font-size: medium;
            animation: blackToWhite 0.1;
            color: white;
        }
    }
    .icon_box:hover{
        cursor: pointer;
        .top_icon{
            color: rgb(174, 198, 215);
        }
        .top_text{
            color: rgb(174, 198, 215);
        }
    }
}
.icon_background{
    animation: transToWhite 0.2s;
    background-color: white;
    .icon_box{
        margin-left: 20px;
        margin-right: 30px;
        margin-bottom: 15px;
        .top_icon{
            height: 25px;
            width: 25px;
            animation: whiteToBlack 0.1;
            color: black;
        }
        .top_text{
            font-size: medium;
            animation: whiteToBlack 0.1;
            color: black;
        }
    }
    .icon_box:hover{
        cursor: pointer;
        .top_icon{
            color: rgb(49, 41, 135);
        }
        .top_text{
            color: rgb(49, 41, 135);
        }
    }
}

.search_button{
    width: 300px;
    height: 40px;
    .search_icon{
        margin-left: 7px;
    }
}

.title_img{
    width: 22%;
    height: 80%;
    object-fit: cover; /* 图片按比例填充容器 */
    margin-left: 20px;
    margin-right: 10px;
}

@keyframes transToWhite
{
    from {
        background-color: transparent;
    }
    to {
        background-color: white;
    }
}

@keyframes whiteToTrans
{
    from {
        background-color: white;
    }
    to {
        background-color: transparent;
    }
}

@keyframes whiteToBlack
{
    from {
        color: white;
    }
    to {
        color: black;
    }
}

@keyframes blackToWhite
{
    from {
        color: black;
    }
    to {
        color: white;
    }
}
</style>