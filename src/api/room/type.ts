export interface ResponseData{
    message:string;
    code:number;
}

export interface RoomInfo{
    room_id: number
    room_name: string
    capacity: number
}

export interface RoomDetailInfo{
    room_id: number
    room_name: string
    capacity: number
    status: number
}

export interface RoomListData extends ResponseData{
    data: RoomInfo[]
}

export interface RoomDetailData extends ResponseData{
    data: RoomDetailInfo
}

export interface AppointmentRequest{
    room_id: number
    user_id: number
}

export interface AppointmentData extends ResponseData{
    data: string
}

export interface AppointmentRecord{
    appointment_id: number
    room_id: number
    room_name: string
    user_id: number
    appointment_time: string
}

export interface AppointmentListData extends ResponseData{
    data: AppointmentRecord[]
}
