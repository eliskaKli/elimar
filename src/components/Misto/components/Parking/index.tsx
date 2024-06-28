import React from "react";

import { StyledParking } from "./styled";

interface Props {
    data: string
} 

const Parking: React.FC<Props>= ({ data }) => {

    return (
        <StyledParking>
            {data}
        </StyledParking>
    )
}

export default Parking