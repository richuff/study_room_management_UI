import request from "../request";
import type { UserEamilData,UserInfoData,
    EmailData,ResponseData,UserData,
    UserRegister,UserResponseData,UserRegisterData } from './type'

enum API_URL {
    LOGIN_URL = "/user/login",
    REGISTER_URL = "/user/register",
    EMAILCODE_URL = "/captcha",
    USERINFO_URL = "/user/checkInfo"
}

export const Login = (data:UserData)=>request.post<any,UserResponseData>(API_URL.LOGIN_URL,data)
export const Register = (data:UserRegister)=>request.post<any,UserRegisterData>(API_URL.REGISTER_URL,data)
export const SendCode = (data:EmailData)=>request.get<any,ResponseData>(API_URL.EMAILCODE_URL+"?email="+data.email)
export const GetInfo = (data:UserEamilData)=>request.get<any,UserInfoData>(API_URL.USERINFO_URL+"?email="+data.email)