import React from "react";

import { Layout } from "../preComponents";
import { StyledSection, StyledDescription  } from './styled'
import { TextCol, StyledHeadline, StyledImageFour } from "../Misto/components/PlaceIntro/styled";
import { SingleImage } from "../preComponents/Image";

import dary1 from '../../assets/photos/dary1.jpg'
import dary3 from '../../assets/photos/dary3.jpg'
import dary4 from '../../assets/photos/dary4.jpg'
import dary5 from '../../assets/photos/dary5.jpg'

export type GiftsDataType = {
    id: string
    images: SingleImage | SingleImage[]
    description1: string
    description2: string
    description3: string
}

const fourImages: SingleImage[] = [
    { src: dary4, alt: 'Fotka svateba kamarádky 2024'},
    { src: dary5, alt: 'Martin'},
    { src: dary3, alt: 'Eliška na táboře'},
    { src: dary1, alt: 'Fotka ze Španělska 2022'},
]

const giftsData: GiftsDataType = {
    id: "gifts",
    images: fourImages,
    description1: 
    'Jsme upřímně šťastni, že budeme moct tento den oslavit s vámi! Dary s sebou prosím nevozte, máme malý byt a neměli bychom je kam dát. Eliška nemá ráda zbytečnosti a Martin se neumí nepotřebných věcí zbavovat, takže by hrozily jen nepříjemnosti. Taktéž jídla a pití bude na místě hodně, tak prosím nic nevozte.',
    description2: 
      'Velice oceníme, když nám místo daru pomůžete s tím, abychom si svatební den všichni společně užili.',
    description3:
      'Pokud byste nám přeci jen chtěli něco věnovat, místo fyzických darů nám uděláte radost finančním příspěvkem do společného života.',

}

const Gifts: React.FC = () => {

  const { id, images, description1, description2, description3 } = giftsData  

  return (
    <Layout.Container >
      <StyledSection id={id} column={2} >  
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