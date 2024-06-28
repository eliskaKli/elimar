import React from "react";

import { StyledAddress } from "./styled";

export type NejakaDataType = {
    adresa: string
    url: string
}

interface Props {
    data: NejakaDataType
} 

const Address: React.FC<Props>= ({ data }) => {

    const {adresa, url} = data

    return (
        <StyledAddress>
            {adresa}{url}
        </StyledAddress>
    )
}

export default Address