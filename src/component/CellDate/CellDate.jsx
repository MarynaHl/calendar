import { memo } from "react";

import { Box, Text } from "./CellDate.styled";

export default memo(function CellDate({ day, weekDay }) {
    return (
        <Box>
            <Text>{day}</Text>
            <Text>{weekDay}</Text>
        </Box>
    );
});
