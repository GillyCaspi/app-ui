import React, {useMemo} from 'react';
import {useSocketVehicles} from "../hooks";
import {Container} from "@mui/material";
import AppTabs from "./AppTabs";
import VehiclesList from "./VehiclesList";

export default function App() {
    const vehicles = useSocketVehicles();

    const cars = useMemo(() => vehicles.filter(({type}) => type === 'CAR'), [vehicles]);
    const motors = useMemo(() => vehicles.filter(({type}) => type === 'MOTORCYCLE'), [vehicles]);


    return (
        <Container>
            <AppTabs labels={[`cars (${cars.length})`, `motorcycles (${motors.length})`]}>
                <VehiclesList vehicles={cars} />
                <VehiclesList vehicles={motors} />
            </AppTabs>
        </Container>
    )
    /*
    return (
    <div className="App">
        <h1>App UI</h1>
        <List>
            {cars.map((item, index) => (
                <ListItem key={item.plateNumber}>
                    <Typography>{JSON.stringify(item)}</Typography>
                </ListItem>
            ))}
        </List>
    </div>
  );

     */
}

