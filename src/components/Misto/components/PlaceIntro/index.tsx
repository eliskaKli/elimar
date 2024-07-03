import React from "react";

import { 
    StyledPlaceIntro, 
    StyledImageFour,
    RightCol, 
    StyledHeadline, 
    StyledSubHeadline, 
    StyledDescription,
 } from "./styled";
import { SingleImage } from "../../../preComponents/Image";

export type PlaceIntroDataType = {
    images: SingleImage | SingleImage[]
    perex: string
    description: string
  }

interface Props {
    data: PlaceIntroDataType 
} 

const PlaceIntro: React.FC<Props>= ({ data }) => {

    const { images, perex, description} = data

    return (
        <StyledPlaceIntro column={2}>
            <StyledImageFour images={images} />
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