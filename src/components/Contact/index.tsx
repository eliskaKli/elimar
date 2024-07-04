import React from "react";

import { StyledContact, StyledHeadline, StyledImage, StyledContent, StyledDescription, StyledBgImage } from "./styled";
import { SingleImage } from "../preComponents/Image";

import ples from '../../assets/photos/ples.jpg'
import kytkyL from '../../assets/svg/kytkyLeft.svg'
import kytkyR from '../../assets/svg/kytkyRight.svg'

export type ContactDataType = {
    description: {
        firstP: string
        secondP: string
    }
    image: SingleImage
    ilustration: {
        kytkyL: string
        kytkyR: string
    }
}

const contactData: ContactDataType = {
    description: { 
      firstP: 'Pokud máte jakékoliv dotazy, neváhejte kontaktovat Elišku nebo Martina.',
      secondP: 'Oslavíš s námi naši svatbu? Vyplň dotazník kliknutím na následující tlačítko.',
    },
      image: {
        src: ples,
        alt: 'Fotka Elišky a Martina',
    },
    ilustration: {
        kytkyL: kytkyL,
        kytkyR: kytkyR,
    }
}

const Contact: React.FC = () => {

  const { description, image } = contactData
  
  return (
      <StyledContact bgColor="darkGreen">
        <StyledContent>
            <StyledImage images={image} />
            <StyledHeadline>
                Těšíme se na Vás
            </StyledHeadline>
            <StyledDescription>
                {description.firstP}
            </StyledDescription>
            <StyledDescription>   
                {description.secondP}
            </StyledDescription>
        </StyledContent>

        <StyledBgImage>
                <img className="left" src={kytkyL} alt=''/>
                <img className="righ" src={kytkyR} alt=''/>
        </StyledBgImage>
        
      </StyledContact>
  )
}

export default Contact