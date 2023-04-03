import {Vehicle} from "../models";
import {ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
export default function VehicleItem({vehicle}: {vehicle: Vehicle}) {

    return (
        <ListItem>
            <ListItemIcon>
                {vehicle.type === 'CAR' ? <DirectionsCarFilledIcon/> : <TwoWheelerIcon />}
            </ListItemIcon>
            <ListItemText>{vehicle.plateNumber}</ListItemText>
        </ListItem>
    )
}