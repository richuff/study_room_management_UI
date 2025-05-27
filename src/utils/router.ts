import type { Router } from 'vue-router'
import MenuStore from '@/store/modules/menu';
let menuStore = MenuStore()

function change(){
    menuStore.isflod = false
}

export const ToHome = ($router:Router) => {
    $router.push("/home");
    change()
}

export const ToLogin = ($router:Router) => {
    $router.push("/login");
    change()
}

export const ToRegister = ($router:Router) => {
    $router.push("/register");
    change()
}