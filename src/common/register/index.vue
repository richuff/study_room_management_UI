<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div>注册账号</div>
                        <s-text-field label="用户名"></s-text-field>
            <s-text-field label="邮箱"></s-text-field>
            <s-text-field label="验证码"></s-text-field> 
            <s-button>发送验证码</s-button>
            <s-text-field label="密码"></s-text-field> 


            <s-button>记录存档</s-button>
            <s-button @click="ToLogin($router)">已经有账户?戳我登录</s-button>
            <BottomBar></BottomBar>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBar from '@/components/BottomBar/index.vue'
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

</style>