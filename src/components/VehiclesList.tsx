import {Vehicle} from "../models";
import {List, ListItem} from "@mui/material";
import VehicleItem from "./VehicleItem";

export default function VehiclesList({vehicles}: {vehicles: Vehicle[]}) {

    return (
        <List>
            {vehicles.map(vehicle => <VehicleItem vehicle={vehicle} key={vehicle.plateNumber} />)}
        </List>
    )
}