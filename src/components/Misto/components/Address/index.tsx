import React  from "react";
 
import { StyledContainer, StyledAddress, TextCol, Link, StyledSubTitle, StyledPerex, StyledMap } from "./styled";
import { StyledSubHeadline } from "../PlaceIntro/styled";
import { SingleImage } from "../../../preComponents/Image";
import { MapProps } from "react-mapycz";


export type AdressDataType = {
    adress: string
    url: string
    perex: string
    description: JSX.Element
    /* image: SingleImage */
    map: JSX.Element
}

interface Props {
    data: AdressDataType
} 

const Address: React.FC<Props>= ({ data }) => {

    const {adress, url, perex, description, map} = data

    return (
      <StyledContainer>
        <StyledAddress column={2}>            
          <TextCol>
            <StyledSubHeadline>
                Adresa a doprava
            </StyledSubHeadline>
            <Link href={url} target='_blank' >
                {adress}
            </Link>
            <StyledPerex>
              {perex}
            </StyledPerex>            
            <StyledSubTitle>
                Veřejná doprava
            </StyledSubTitle>
                {description}
          </TextCol>  
    
          <StyledMap>
          {map}
          </StyledMap>  
        </StyledAddress>
      </StyledContainer>
    )
}

export default Address