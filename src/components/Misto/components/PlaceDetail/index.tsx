import React from "react";
import { StyledPlaceDetail } from './styled'
import { Layout } from "../../../preComponents";
import { SingleImage } from "../../../preComponents/Image";

export type PlaceDetailData = {
    image: SingleImage
}

interface Props {
    data: PlaceDetailData
}

const PlaceDetail:  React.FC<Props> = ({ data }) => {

    const { image } = data

    return (
        <Layout.Container>
            <StyledPlaceDetail images={image} />
        </Layout.Container>
    )
}

export default PlaceDetail