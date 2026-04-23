import request from "../request";
import type { RoomListData, AppointmentRequest, AppointmentData, AppointmentListData } from './type'

enum API_URL {
    ROOM_LIST_URL = "/room/showIdle",
    ROOM_SHOW_URL = "/room/show",
    APPOINTMENT_URL = "/room/appointment",
    SHOW_APPOINTMENT_URL = "/room/showAppointment"
}

export const GetRoomList = ()=>request.get<any,RoomListData>(API_URL.ROOM_LIST_URL)
export const GetRoomInfo = (room_id:number)=>request.get<any,any>(API_URL.ROOM_SHOW_URL+"?room_id="+room_id)
export const MakeAppointment = (data:AppointmentRequest)=>request.post<any,AppointmentData>(API_URL.APPOINTMENT_URL,data)
export const GetAppointmentList = (user_id:number)=>request.get<any,AppointmentListData>(API_URL.SHOW_APPOINTMENT_URL+"?user_id="+user_id)
