import React from 'react'

import { StyledPlace } from './styled'

import { Address, PlaceDetail, PlaceIntro, Parking } from './components'

import { NejakaDataType } from './components/Address'
import { PlaceIntroDataType } from './components/PlaceIntro'
import { SingleImage } from '../preComponents/Image'

import { Layout } from '../preComponents'

import ples from '../../assets/photos/ples.jpg'


export type PlaceData = {
  placeIntroData: PlaceIntroDataType
  nejakaData: NejakaDataType
}

const fourImages: SingleImage[] = [
  { src: ples, alt: 'Obrázek z plesu'},
  { src: 'assets/photos/zahrada3.jpg', alt: 'Obrázek zahrady 3'},
  { src: '/assets/photos/ples.jpg', alt: 'Obrázek zahrady 4'},
  { src: ples, alt: 'Obrázek z plesu'},
]

const placeData: PlaceData = {
  placeIntroData: {
    images: fourImages,
    perex: 'Celý svatební den proběhne na dvorku a zahradě (v sadu) hájovny Chotobuš. ',
    description: 
      `Vezměte si takové oblečení, ve kterém si celý den užijete a budete se v něm cítit pohodlně. 
      Na podpatky zapomeňte, teda pokud se nechcete zabořit už u vrátek. 
      Balerýnky, botasky, sandály, bosé nohy, to vše na Chotobuš patří. 
      Počítejte i s variantou oblečení k večernímu ohni. 
      Oblečení přizpůsobte předpovědi počasí a nezapomeňte, že večer bude chladno.`,
  },
  nejakaData: {
    adresa: 'Chotobuš 239, Dobříš',
    url: 'mapy.cz',
  }
}



const Place: React.FC = () => {

  const { placeIntroData, nejakaData } = placeData

    return (
        <Layout.Container>
          <StyledPlace>
            <PlaceIntro data={placeIntroData} />
              <Address data={nejakaData}/>
              <PlaceDetail data='tady bude PlaceDetail'/>
              <Parking data='tady bude Parking'/>  
          </StyledPlace>
        </Layout.Container>
    )
}

export default Place