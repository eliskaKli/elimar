import React  from "react";
/* 
import { Layout } from "../../../preComponents"; */
import { TextCol } from "../PlaceIntro/styled";
import { StyledAddress, Link, StyledSubTitle, StyledPerex, StyledImage } from "./styled";
import { StyledSubHeadline } from "../PlaceIntro/styled";
import { SingleImage } from "../../../preComponents/Image";

export type AdressDataType = {
    adress: string
    url: string
    perex: string
    description: JSX.Element
    image: SingleImage
}

interface Props {
    data: AdressDataType
} 

const Address: React.FC<Props>= ({ data }) => {

    const {adress, url, perex, description, image} = data

    return (
        <StyledAddress 
            column={2} 
            bgColor={"darkGreen"}>            
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
          
          <StyledImage images={image}/>
          
        </StyledAddress>
    )
}

export default Address