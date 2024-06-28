import React from "react";
import { StyledPlaceDetail } from './styled'

interface Props {
    data: string
}

const PlaceDetail:  React.FC<Props> = ({ data }) => {

    return (
        <StyledPlaceDetail>{data}</StyledPlaceDetail>
    )
}

export default PlaceDetail