<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div class="main_bar">
                <div class="login">
                    <div class="title">登录账号</div>
                    <s-text-field label="用户名或邮箱"></s-text-field>
                    <s-text-field label="密码"></s-text-field>
                    <div class="forget-pass">
                        <a href="">忘记密码</a>
                    </div>
                    <s-button>开始存档</s-button>
                    <s-button @click="ToRegister($router)">还没有账户?戳我注册</s-button>       
                    <s-divider style="margin-top: 1.8rem;">使用第三方登录</s-divider>
                </div>
                <div class="other_login">
                    <i class="iconfont icon-erweima"></i>
                </div>
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
    const i = document.querySelector("i")
    window.addEventListener('resize',()=>{
        console.log(Number.parseInt(i!.style.padding) + 1) 
        i!.style.padding = (Number.parseInt(i!.style.padding) + 1).toString()
    })
})
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>