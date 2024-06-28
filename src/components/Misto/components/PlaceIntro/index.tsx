import React from "react";

import { StyledPlaceIntro, LeftImgCol, RightCol, StyledHeadline, StyledSubHeadline, StyledDescription } from "./styled";

export type PlaceIntroDataType = {
    perex: string
    description: string
  }

interface Props {
    data: PlaceIntroDataType 
} 

const PlaceIntro: React.FC<Props>= ({ data }) => {

    const { perex, description} = data

    return (
        <StyledPlaceIntro column={2}>
            <LeftImgCol>Tady bude obrázek</LeftImgCol>
            <RightCol>
            <StyledHeadline>
                Místo konání
            </StyledHeadline>
            {perex}
            <StyledSubHeadline>
                Dress code
            </StyledSubHeadline>
            <StyledDescription>
                {description}
            </StyledDescription>
            </RightCol>
        </StyledPlaceIntro>
    )
}

export default PlaceIntro