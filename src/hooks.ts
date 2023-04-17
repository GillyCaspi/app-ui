import {useEffect, useState} from "react";
import {SocketData, Vehicle} from "./models";
import {io} from "socket.io-client";

export function useSocketVehicles(): Vehicle[] {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    /*
    useEffect(() => {
        const callback = () => {
            const vehicle: Vehicle = {
                plateNumber: Date.now().toString(),
                color: 'red',
                type: (Math.random() < 0.5) ? 'CAR' : 'MOTORCYCLE'
            }
            setVehicles(prevState => [vehicle, ...prevState]);
        };
        const timer = setInterval(callback, 1500);

        return () => {
            clearInterval(timer);
        }
    }, []);
*/



    useEffect(() => {
        const ioSocket = io('http://localhost:5003');
        console.log(ioSocket);
        ioSocket.on('gilly', (payload) => {
            console.log("get from server to client ****** " + payload);
            const {type, data} = payload as SocketData
            switch (type) {
                case "car_item":
                case "motor_item":
                    setVehicles(prevState => [data, ...prevState]);
                    break;
                case "car_list":
                case "motor_list":
                    setVehicles(prevState => [...data, ...prevState]);
                    break;

            }
        });

        return () => {
            ioSocket.disconnect();
        }
    }, []);


    return vehicles;
}