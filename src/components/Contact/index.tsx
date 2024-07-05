import React from "react";

import { StyledContact, StyledHeadline, StyledImage, StyledContent, StyledDescription, StyledBgImage } from "./styled";
import { SingleImage } from "../preComponents/Image";

import ples from '../../assets/photos/ples.jpg'
import kytkyL from '../../assets/svg/kytkyLeft.svg'
import kytkyR from '../../assets/svg/kytkyRight.svg'
import { Button } from "../preComponents";
import { ButtonProps } from "../preComponents/Button";

export type ContactDataType = {
    id: string
    description: {
        firstP: string
        secondP: string
    }
    image: SingleImage
    button: ButtonProps
    ilustration: {
        kytkyL: string
        kytkyR: string
    }
}

const contactData: ContactDataType = {
    id: "contact",
    description: { 
      firstP: 'Pokud máte jakékoliv dotazy, neváhejte kontaktovat Elišku nebo Martina.',
      secondP: 'Oslavíš s námi naši svatbu? Vyplň dotazník kliknutím na následující tlačítko.',
    },
      image: {
        src: ples,
        alt: 'Fotka Elišky a Martina',
    },
    button: {
        href: "mapy.cz"
    },
    ilustration: {
        kytkyL: kytkyL,
        kytkyR: kytkyR,
    }
}

const Contact: React.FC = () => {

  const { id, description, button, image } = contactData
  
  return (
      <StyledContact bgColor="darkGreen" id={id}>
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
            <Button 
              href={button.href}              
              size="md"
            />
        </StyledContent>

        <StyledBgImage>
                <img className="left" src={kytkyL} alt=''/>
                <img className="righ" src={kytkyR} alt=''/>
        </StyledBgImage>
        
      </StyledContact>
  )
}

export default Contact