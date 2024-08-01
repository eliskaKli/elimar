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
        secondP: JSX.Element
        thirdP: string
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
      firstP: "Moc se na vás těšíme a doufáme, že si svatební den společně užijeme.",
      secondP: <>Pokud máte jakékoliv <strong>dotazy</strong>, neváhejte kontaktovat Elišku nebo Martina.</>,
      thirdP: 'Oslavíš s námi naši svatbu? Vyplň dotazník kliknutím na následující tlačítko.',
    },
      image: {
        src: ples,
        alt: 'Fotka Elišky a Martina',
    },
    button: {
        href: "https://forms.gle/M8PtRPycQXfbLktW6",
        title: "Plánuji přijít",
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
            <StyledDescription>
                {description.thirdP}
            </StyledDescription>
            <Button 
              href={button.href}              
              size="md"
              title={button.title}
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