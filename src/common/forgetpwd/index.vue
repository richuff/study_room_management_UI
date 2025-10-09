<template>
    <CommonBar>
        <s-scroll-view :class="{ main: true, main_menu: !menuStore.isflod }">
            <div class="main_bar">
                <div class="forpwd" style="padding: 1.67rem;">
                    <div class="title">忘记密码</div>
                    <s-text-field @input="setEmail($event as InputEvent)" label="邮箱"></s-text-field>
                    <s-text-field class="code" @input="setCode($event as InputEvent)" label="验证码"></s-text-field> 
                    <s-button class="code" :disabled="dataForm.email ==''" @click="">发送验证码</s-button>
                    <s-text-field  @input="setPassword($event as InputEvent)" label="新密码密码"></s-text-field> 
                    <s-text-field @input="setRePassword($event as InputEvent)" label="确认密码"></s-text-field> 
                    <s-button class="button" :disabled="isDisable()" @click="BeginRegister">确认新密码</s-button>
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
import UserStore from '@/store/modules/user';
import { ToHome } from '@/utils/router';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { isEmail } from '@/utils/email';
import type { UserRegisterDataForm,UserRegister } from '@/api/user/type';
import { showError,showSuccess } from '@/widget/SnackBar'

let $router =  useRouter()
let menuStore  = MenuStore()
let userStore = UserStore()

let dataForm:UserRegisterDataForm = reactive<UserRegisterDataForm>({
    name:"",
    email:"",
    password:"",
    repassword:"",
    code:""
})

onMounted(() => {
    menuStore.showBack = true
})

const setEmail = (i: InputEvent) => {
    const item = i.target as HTMLInputElement
    dataForm.email = item.value
}

const setPassword = (i: InputEvent) => {
    const item = i.target as HTMLInputElement
    dataForm.password = item.value
}

const setRePassword = (i:InputEvent) => {
    const item = i.target as HTMLInputElement
    dataForm.repassword = item.value
}

const setCode = (i:InputEvent) => {
    const item = i.target as HTMLInputElement
    dataForm.code = item.value
}

const BeginRegister = () => {
    if (dataForm.password != dataForm.repassword){
        showError("两次输入的密码不一致")
        return
    }
    if (!isEmail(dataForm.email)){
        showError("邮箱格式错误")
        return
    }
    if (dataForm.name.length > 40 || dataForm.email.length > 40 || dataForm.password.length > 40){
        showError("账号名、邮箱或密码过长")
        return
    }
    const data:UserRegister = {
        name:dataForm.name,
        email:dataForm.email,
        password:dataForm.password,
        code:dataForm.code
    } 
    
    userStore.BeginRegister(data).then(()=>{
        showSuccess("注册成功")
        ToHome($router)
    }).catch((reason:any)=>{
        showError(reason)
    })
}

const isDisable = () => {
    if (dataForm.name != "" && 
    dataForm.email != "" && 
    dataForm.password != "" &&
    dataForm.repassword != ""
    && dataForm.code != ""){
        return false
    }
    return true
}
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>