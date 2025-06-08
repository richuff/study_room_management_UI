import request from "../request";
import type { UserData } from './type'

enum API_URL {
    LOGIN_URL = "/user/login"
}

export const Login = (data:UserData)=>request.post<any,any>(API_URL.LOGIN_URL,data)