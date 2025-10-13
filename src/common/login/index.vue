<template>
    <CommonBar>
        <div :class="{ main: true, main_menu: !menuStore.isflod }">
            <div class="main_bar" >
                <div class="login" style="padding: 1.67rem;">
                    <div class="title">登录账号</div>
                    <s-text-field @input="setEmail($event as InputEvent)" label="邮箱"></s-text-field>
                    <s-text-field  @input="setPassword($event as InputEvent)" label="密码"></s-text-field>
                    <div class="forget-pass">
                        <span class="forget-pass-span" @click="ToForgetPass($router)">忘记密码</span>
                    </div>
                    <s-button class="button" :disabled="isDisable()" @click="BeginLogin()">开始存档</s-button>
                    <s-button class="button" @click="ToRegister($router)">还没有账户?戳我注册</s-button>       
                    <s-divider style="margin-top: 1.8rem;">使用第三方登录</s-divider>
                </div>
                <div class="other_login">
                    <s-tooltip>
                        <i slot="trigger" class="iconfont icon-erweima"></i>
                        <img src="/public/BG_Spring.jpg" style="max-width: 8rem">
                    </s-tooltip>
                </div>
            </div>
            <BottomBarWithFixed></BottomBarWithFixed>
        </div>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBarWithFixed from '@/components/BottomBarWithFixed/index.vue'
import MenuStore from '@/store/modules/menu';
import { ToRegister,ToHome,ToForgetPass } from '@/utils/router';
import { useRouter } from 'vue-router';
import type { UserData } from '@/api/user/type';
import { showError,showSuccess } from '@/widget/SnackBar'
import { onMounted,reactive } from 'vue';
import UserStore from '@/store/modules/user';
import { isEmail } from '@/utils/email';
let menuStore  = MenuStore()
let userStore = UserStore()
let $router = useRouter()


let dataForm:UserData = reactive<UserData>({
    email:"",
    password:""
})

onMounted(() => {
    menuStore.showBack = true
    // const i = document.querySelector("i")
    // window.addEventListener('resize',()=>{
    //     console.log(Number.parseInt(i!.style.padding) + 1) 
    //     i!.style.padding = (Number.parseInt(i!.style.padding) + 1).toString()
    // })
})

const setEmail = (i: InputEvent) => {
    const item = i.target as HTMLInputElement
    dataForm.email = item.value
}

const setPassword = (i: InputEvent) => {
    const item = i.target as HTMLInputElement
    dataForm.password = item.value
}
const BeginLogin = () => {
    if (dataForm.password.length > 40 || dataForm.email.length > 40){
        showError("密码或邮箱过长")
        return
    }
    if (!isEmail(dataForm.email)){
        showError("邮箱格式错误")
        return
    }
    userStore.UserLogins(dataForm).then(()=>{
        showSuccess("登录成功")
        ToHome($router)
    }).catch((reason:any)=>{
        showError(reason)
    })
}

const isDisable = () => {
    if (dataForm.email != "" && dataForm.password != ""){
        return false
    }
    return true
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>