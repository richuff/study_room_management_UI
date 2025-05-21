<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div>登录账号</div>
            <s-text-field label="再次确认密码"></s-text-field> 
            <s-text-field label="用户名或邮箱"></s-text-field>
            <s-text-field label="密码"></s-text-field>

            <s-button>开始存档</s-button>
            <s-button @click="ToRegister($router)">还没有账户?戳我注册</s-button>
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

</style>