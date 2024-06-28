import React from 'react'

import { StyledPlace, ImageSection } from './styled'

import { Address, PlaceDetail, PlaceIntro, Parking } from './components'

import { NejakaDataType } from './components/Address'
import { PlaceIntroDataType } from './components/PlaceIntro'

import { Layout } from '../preComponents'

export type PlaceData = {
  placeIntroData: PlaceIntroDataType
  nejakaData: NejakaDataType

}

const placeData: PlaceData = {
  placeIntroData: {
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
            <ImageSection>
              <img src='src\assets\photos\zahrada1.JPG' alt='zahrada'/>
            </ImageSection>
            <Address data={nejakaData}/>
            <PlaceDetail data='tady bude PlaceDetail'/>
            <Parking data='tady bude Parking'/>  
        </StyledPlace>
        </Layout.Container>
    )
}

export default Place