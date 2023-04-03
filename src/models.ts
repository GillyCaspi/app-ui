export type VehicleType = 'CAR'|'MOTORCYCLE';
export type SocketDataType = 'car_item'|'car_list'|'motor_item'|'motor_list';

export interface SocketData {
    type: SocketDataType,
    data: any
}


export interface Vehicle {
    plateNumber: string,
    color: string,
    type: VehicleType,
    created : number
}