import type { Router } from 'vue-router'

export const ToHome = ($router:Router) => {
    $router.push("/home");
}

export const ToLogin = ($router:Router) => {
    $router.push("/login");
}

export const ToRegister = ($router:Router) => {
    $router.push("/register");
}