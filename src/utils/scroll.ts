import MenuStore from '@/store/modules/menu'
let menuStore = MenuStore()

const scroll = (e: any) => {
    if (e.target.scrollTop > 40) {
        menuStore.showBack = true
    } else {
        menuStore.showBack = false
    }
}

export {scroll}