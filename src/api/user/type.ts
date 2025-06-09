export interface ResponseData{
    message:string;
    code:number;
}

export interface User{
    password:string
    email:string
}

export type UserData = User

export interface UserResponseData extends ResponseData{
    data:UserData
} 
