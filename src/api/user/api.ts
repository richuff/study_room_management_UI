import request from "../request";
import type { UserEamilData,UserInfoData,
    EmailData,SendCodeData,UserData,
    UserRegister,UserResponseData,UserRegisterData,ForgetPwdDataForm,ForgetPwdData,
    UserInfo,SetUserInfoData,UserDetailInfoData,LogoffData } from './type'

enum API_URL {
    LOGIN_URL = "/user/login",
    REGISTER_URL = "/user/register",
    EMAILCODE_URL = "/captcha",
    USERINFO_URL = "/user/checkInfo",
    FORGETPWD_URL = "/user/forgetPwd",
    SETINFO_URL = "/user/setInfo",
    SETAVATAR_URL = "/user/setAvatar",
    LOGOFF_URL = "/user/logoff"
}

export const Login = (data:UserData)=>request.post<any,UserResponseData>(API_URL.LOGIN_URL,data)
export const Register = (data:UserRegister)=>request.post<any,UserRegisterData>(API_URL.REGISTER_URL,data)
export const SendCode = (data:EmailData)=>request.get<any,SendCodeData>(API_URL.EMAILCODE_URL+"?email="+data.email)
export const GetInfo = (data:UserEamilData)=>request.get<any,UserInfoData>(API_URL.USERINFO_URL+"?email="+data.email)
export const ForgetPwd = (data:ForgetPwdDataForm) => request.post<any,ForgetPwdData>(API_URL.FORGETPWD_URL,data)
export const SetUserInfo = (data:UserInfo) => request.post<any,SetUserInfoData>(API_URL.SETINFO_URL,data)
export const SetAvatar = (formData:FormData) => request.post<any,any>(API_URL.SETAVATAR_URL,formData)
export const Logoff = (user_id:number) => request.get<any,LogoffData>(API_URL.LOGOFF_URL+"?user_id="+user_id)
export const GetDetailInfo = (data:UserEamilData)=>request.get<any,UserDetailInfoData>(API_URL.USERINFO_URL+"?email="+data.email)