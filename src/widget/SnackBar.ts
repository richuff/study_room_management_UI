import { Snackbar } from 'sober'

function showSuccess(text: string,duration: number = 2000){
    const dialog = Snackbar.builder({
        text, 
        type: 'success',
        align: "top",
        duration
    })
    dialog.show()
}

function showError(text: string, duration: number = 2000){
        const dialog = Snackbar.builder({
        text, 
        type: 'error',
        align: "top",
        duration
    })
    dialog.show()
}

function showSucessWithIcon(text:string,icon:Element,duration: number = 2000){
    const dialog = Snackbar.builder({
        text,
        align:"top",
        duration,
        icon
    })
    dialog.show()
}

export {showSuccess,showError,showSucessWithIcon}