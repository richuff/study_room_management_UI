<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div class="main_bar">
                <div class="register">
                    <div class="title">注册账号</div>
                    <s-text-field label="用户名"></s-text-field>
                    <s-text-field label="邮箱"></s-text-field>
                    <s-text-field class="code" label="验证码"></s-text-field> 
                    <s-button class="code">发送验证码</s-button>
                    <s-text-field label="密码"></s-text-field> 
                    <s-text-field label="确认密码"></s-text-field> 
                    <s-button>记录存档</s-button>
                </div>
                <div class="other_register">
                    <div @click="ToLogin($router)">已经有账户?<span class="tologin">戳我登录</span></div>
                </div>
            </div>
            <BottomBarWithFixed></BottomBarWithFixed>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBarWithFixed from '@/components/BottomBarWithFixed/index.vue'
import MenuStore from '@/store/modules/menu';
let menuStore  = MenuStore()
import { ToLogin } from '@/utils/router';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
let $router =  useRouter()

onMounted(() => {
    menuStore.showBack = true
})
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>