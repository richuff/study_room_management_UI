<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div class="main_bar" >
                <div class="headbox">
                    <img class="avatar" :src="avatar ?? 'http://localhost:8081/static/avatar/0_1758792937.jpg'" alt="头像"/>
                    <span class="username">{{ username }}</span>
                </div>
                <s-divider></s-divider>
                <s-navigation mode="rail">
                    <s-navigation-item :selected="true">
                        <s-icon name="add" slot="icon"></s-icon>
                        <div slot="text">修改信息</div>
                    </s-navigation-item>
                    <s-navigation-item>
                        <s-icon name="search" slot="icon"></s-icon>
                        <div slot="text">修改信息</div>
                    </s-navigation-item>
                    <s-navigation-item>
                        <s-icon name="dark_mode" slot="icon"></s-icon>
                        <div slot="text">修改邮箱</div>
                    </s-navigation-item>
                </s-navigation>
            </div>
            <BottomBarWithFixed></BottomBarWithFixed>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import MenuStore from '@/store/modules/menu';
import BottomBarWithFixed from '@/components/BottomBarWithFixed/index.vue'

let menuStore = MenuStore()
let avatar = localStorage.getItem('avatar')
let username = localStorage.getItem('username')
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>