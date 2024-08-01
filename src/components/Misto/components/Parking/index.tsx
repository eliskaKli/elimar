import React  from "react";
 
import { 
  StyledContainer,
  StyledParking, 
  TextCol, 
  StyledImage } from "./styled";
import { StyledSubHeadline } from "../PlaceIntro/styled";
import { StyledDescription } from "../../../Gifts/styled";
import { SingleImage } from "../../../preComponents/Image";

export type ParkingDataType = {
    descriptionParking: {
      firstD: string
    }
    descriptionUbytko: {
      firstD: string
      secondD: string
    }
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
                      
            <StyledSubHeadline>
                Ubytování
            </StyledSubHeadline>
            <StyledDescription>
              {descriptionUbytko.firstD}
            </StyledDescription> 
            <StyledDescription>
              {descriptionUbytko.secondD}
            </StyledDescription> 
          </TextCol>

         <StyledImage images={image} />    
    
        </StyledParking>
      </StyledContainer>
    )
}

export default Parking