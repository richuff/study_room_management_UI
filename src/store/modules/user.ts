import { defineStore } from "pinia"

const UserStore = defineStore('User', {
    state: () => {
        return {
            token: null,
        }
    },
    actions:{
        
    }
})

export default UserStore;