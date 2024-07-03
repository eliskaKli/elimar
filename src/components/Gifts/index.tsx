import React from "react";

import { Layout } from "../preComponents";
import { StyledSection, StyledGifts } from './styled'
import { RightCol, StyledHeadline, StyledImageFour } from "../Misto/components/PlaceIntro/styled";
import { SingleImage } from "../preComponents/Image";

import ples from '../../assets/photos/ples.jpg'

export type GiftsDataType = {
    images: SingleImage | SingleImage[]
    description: string
}

const fourImages: SingleImage[] = [
    { src: ples, alt: 'Obrázek z plesu'},
    { src: 'assets/photos/zahrada3.jpg', alt: 'Obrázek zahrady 3'},
    { src: '/assets/photos/ples.jpg', alt: 'Obrázek zahrady 4'},
    { src: ples, alt: 'Obrázek z plesu'},
]

const giftsData: GiftsDataType = {
    images: fourImages,
    description: 'Lorem ipsum bla bla bla'
}

const Gifts: React.FC = () => {

  const { images, description } = giftsData  

  return (
    <Layout.Container>
      <StyledGifts>
      <StyledSection column={2} >  
        <StyledImageFour images={images} />
        <RightCol>
          <StyledHeadline>
            Svatební dary
          </StyledHeadline>
          {description}
        </RightCol>
      </StyledSection>
      </StyledGifts> 
    </Layout.Container>
  )

}

export default Gifts