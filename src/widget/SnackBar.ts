import { Snackbar } from 'sober'

function showSuccess(text:string){
    const dialog = Snackbar.builder({
        text, 
        type: 'success',
        align: "top",
        duration: 2000
    })
    dialog.show()
}

function showError(text:string){
        const dialog = Snackbar.builder({
        text, 
        type: 'error',
        align: "top",
        duration: 2000
    })
    dialog.show()
}

function showSucessWithIcon(text:string,icon:Element){
    const dialog = Snackbar.builder({
        text,
        align:"top",
        duration:2000,
        icon
    })
    dialog.show()
}

export {showSuccess,showError,showSucessWithIcon}