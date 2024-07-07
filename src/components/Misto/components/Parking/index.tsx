import React  from "react";
 
import { StyledContainer, StyledParking, TextCol,  } from "./styled";
import { StyledSubHeadline } from "../PlaceIntro/styled";
import { StyledDescription } from "../../../Gifts/styled";
import { StyledImage } from "../../../Contact/styled";
import { SingleImage } from "../../../preComponents/Image";

export type ParkingDataType = {
    descriptionParking: {
      firstD: string
      secondD: string
    }
    descriptionUbytko: string
    image: SingleImage 
}

interface Props {
    data: ParkingDataType
} 

const Parking: React.FC<Props>= ({ data }) => {

    const { descriptionParking, descriptionUbytko, image } = data

    return (
      <StyledContainer>
        <StyledParking column={2}> 
                 
          <TextCol>
            <StyledSubHeadline>
                Parkování
            </StyledSubHeadline>
            <StyledDescription>
              {descriptionParking.firstD}
            </StyledDescription>
            <StyledDescription>
              {descriptionParking.secondD}
            </StyledDescription>  
                      
            <StyledSubHeadline>
                Ubytování
            </StyledSubHeadline>
            <StyledDescription>
              {descriptionUbytko}
            </StyledDescription> 
          </TextCol>

         <StyledImage images={image} />    
    
        </StyledParking>
      </StyledContainer>
    )
}

export default Parking