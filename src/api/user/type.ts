export interface ResponseData{
    message:string;
    code:number;
}

export interface UserLogin{
    email:string
    password:string
}

export interface UserRegister{
    name:string
    code:string
    email:string
    password:string
}

export interface UserRegisterDataForm{
    name:string
    email:string
    password:string
    repassword:string,
    code:string
}

export interface EmailData{
    email:string
}

export interface UserEamilData{
    email:string
}

export interface UserInfo{
    name: string,
    avatar: string,
}

export interface UserInfoData{
    data:UserInfo
}

export type UserData = UserLogin

export interface UserResponseData extends ResponseData{
    data:string
} 

export interface UserRegisterData extends ResponseData{
    data:string
}
