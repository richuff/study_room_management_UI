<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <s-text-field label="用户名或邮箱"></s-text-field>
            <s-text-field label="密码"></s-text-field>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import MenuStore from '@/store/modules/menu';
let menuStore  = MenuStore()

</script>

<style lang="less" scoped>

</style>