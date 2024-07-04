import React from "react";

import { Layout } from "../../../preComponents";
import { 
    StyledPlaceIntro, 
    StyledImageFour,
    TextCol, 
    StyledHeadline, 
    StyledSubHeadline, 
 } from "./styled";
import { StyledDescription } from "../../../Contact/styled";
import { SingleImage } from "../../../preComponents/Image";

export type PlaceIntroDataType = {
    images: SingleImage | SingleImage[]
    perex: {
      firstP: string
      secondP: string
    }
    description: string
  }

interface Props {
    data: PlaceIntroDataType 
} 

const PlaceIntro: React.FC<Props>= ({ data }) => {

    const { images, perex, description} = data

    return (
      <Layout.Container>  
        <StyledPlaceIntro column={2}>
            <StyledImageFour images={images} />
            <TextCol>
              <StyledHeadline>
                Místo konání
              </StyledHeadline>
              <StyledDescription>
                {perex.firstP}
              </StyledDescription>
              <StyledDescription>
                {perex.secondP}
              </StyledDescription>
              <StyledSubHeadline>
                Dress code
              </StyledSubHeadline>
              <StyledDescription>
                {description}
              </StyledDescription>
            </TextCol>
        </StyledPlaceIntro>
      </Layout.Container>
    )
}

export default PlaceIntro