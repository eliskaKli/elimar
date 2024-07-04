import React from "react";

import { Layout } from "../preComponents";
import { StyledSection,  } from './styled'
import { TextCol, StyledHeadline, StyledImageFour } from "../Misto/components/PlaceIntro/styled";
import { SingleImage } from "../preComponents/Image";

import ples from '../../assets/photos/ples.jpg'
import dary1 from '../../assets/photos/dary1.jpg'
import dary2 from '../../assets/photos/dary2.jpg'
import { StyledDescription } from "../Contact/styled";

export type GiftsDataType = {
    images: SingleImage | SingleImage[]
    description1: string
    description2: string
    description3: string
}

const fourImages: SingleImage[] = [
    { src: dary1, alt: 'Fotka ze Španělska'},
    { src: dary2, alt: 'Martin'},
    { src: '/assets/photos/ples.jpg', alt: 'Obrázek zahrady 4'},
    { src: ples, alt: 'Obrázek z plesu'},
]

const giftsData: GiftsDataType = {
    images: fourImages,
    description1: 
    'Jsme upřímně šťastni, že budeme moct tento den oslavit s vámi! Dary s sebou prosím nevozte, máme malý byt a neměli bychom je kam dát. Eliška nemá ráda zbytečnosti a Martin se neumí nepotřebných věcí zbavovat. Taktéž jídla a pití bude na místě hodně, tak prosím nic nevozte.',
    description2: 
      'Velice oceníme, když nám místo daru pomůžete s tím, abychom si svatební den všichni společně užili.',
    description3:
      'Pokud byste nám přeci jen chtěli něco věnovat, místo fyzických darů nám uděláte radost finančním příspěvkem do společného života.',

}

const Gifts: React.FC = () => {

  const { images, description1, description2, description3 } = giftsData  

  return (
    <Layout.Container>
      <StyledSection column={2} >  
        <StyledImageFour images={images} />
        <TextCol>
          <StyledHeadline>
            Svatební dary
          </StyledHeadline>
          <StyledDescription>{description1}</StyledDescription>
          <StyledDescription>{description2}</StyledDescription>
          <StyledDescription>{description3}</StyledDescription>
        </TextCol>
      </StyledSection>
    </Layout.Container>
  )

}

export default Gifts