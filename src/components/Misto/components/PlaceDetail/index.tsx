import React from "react";
import { StyledPlaceDetail } from './styled'
import { Layout } from "../../../preComponents";

interface Props {
    data: string
}

const PlaceDetail:  React.FC<Props> = ({ data }) => {

    return (
        <Layout.Container>
            <StyledPlaceDetail>{data}</StyledPlaceDetail>
        </Layout.Container>
    )
}

export default PlaceDetail