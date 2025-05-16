import { defineStore } from "pinia"

const MenuStore = defineStore('Menu', {
    state: () => {
        return {
            isflod: false,
            showBack:false
        }
    },
})

export default MenuStore;