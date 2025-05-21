<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div class="main_bar">
                <div class="title">登录账号</div>
                <s-text-field label="再次确认密码"></s-text-field> 
                <s-text-field label="用户名或邮箱"></s-text-field>
                <s-text-field label="密码"></s-text-field>

                <s-button>开始存档</s-button>
                <s-button @click="ToRegister($router)">还没有账户?戳我注册</s-button>       
            </div>
            <BottomBar></BottomBar>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBar from '@/components/BottomBar/index.vue'
import MenuStore from '@/store/modules/menu';
import { ToRegister } from '@/utils/router';
import { useRouter } from 'vue-router';
let menuStore  = MenuStore()
let $router = useRouter()
import { onMounted } from 'vue';

onMounted(() => {
    menuStore.showBack = true
})
</script>

<style lang="less" scoped>
@import url("../../assets/style.less");

.main{
    height: calc(98vh - @menu-height);

    .main_bar{
        background-color: white;
        height: calc(98vh - @menu-height - @bottom-height);
        width: calc(100vw - 40px);

        border-width: 2px;
        border-style: solid;
        border-color: rgb(239, 239, 245);
        margin: 10px 10px 10px 5px;
        padding: 10px;
        .title{
            
        }
    }
}

.main_menu{
    height: calc(98vh - @menu-height);
    .main_bar{
        border-style: solid;
        height: calc(98vh - @menu-height - @bottom-height);
        animation: moveWidth 0.4s;
        width: calc(100vw - @menu-width - 40px);
        border-width: 1px;
        border-color: rgb(239, 239, 245);
        margin: 10px 10px 10px 10px;
        padding: 10px;
    }
}

@keyframes moveWidth {
    from{
        width: calc(100vw - 20px);
    }
    to{
        width: calc(100vw - @menu-width - 40px);
    }
}
</style>