import {Box, Tab, Tabs} from "@mui/material";
import {Children, ReactNode, SyntheticEvent, useState} from "react";

export default function AppTabs({children, labels}: {labels: string[], children: ReactNode }) {
    const array = Children.toArray(children);
    const [tabSelected, setTabSelected] = useState(0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setTabSelected(newValue);
    };

    return (
        <Box>
            <Tabs value={tabSelected} onChange={handleChange} variant="fullWidth">
                {labels.map(label => <Tab label={label} key={label} />)}
            </Tabs>
            {array.map((child, idx) => {
                return (
                    <Box key={idx}>
                        {idx === tabSelected && child}
                    </Box>
                )
            })}
        </Box>
    )
}