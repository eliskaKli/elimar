import React from 'react'

import { StyledPlace } from './styled' 

import { Address, PlaceDetail, PlaceIntro, Parking } from './components'

import { AdressDataType } from './components/Address'
import { PlaceIntroDataType } from './components/PlaceIntro'
import { SingleImage } from '../preComponents/Image'

import zahrada1 from '../../assets/photos/pampel.jpg'
import zahrada2 from '../../assets/photos/pampel2.jpg'
import zahrada3 from '../../assets/photos/pampel3.jpg'
import zahrada4 from '../../assets/photos/pampel4.jpg'
import pole from '../../assets/photos/pampel5.jpg'

import { Link } from './components/Address/styled'



export type PlaceData = {
  placeIntroData: PlaceIntroDataType
  adressData: AdressDataType
}

const fourImages: SingleImage[] = [
  { src: zahrada2, alt: 'Fotka zahrady1'},
  { src: zahrada1, alt: 'Fotka zahrady2'},
  { src: zahrada4, alt: 'Fotka zahrady3'},
  { src: zahrada3, alt: 'Fotka zahrady4'},
]

  const LinkDobrisNam: React.FC = () => {
    return (
      <Link href='https://mapy.cz/s/cosohojefa' target='_blank'>
        Dobříš, nám.
      </Link>
    )
  }

  const LinkDobrisLom: React.FC = () => {
    return (
      <Link href='https://mapy.cz/s/mubocesaka' target='_blank'>
        Dobříš, lom.
      </Link> 
    )
  }

const placeData: PlaceData = {
  placeIntroData: {
    images: fourImages,
    perex: {
      firstP: 'Celý svatební den proběhne na zahradě a dvorku hájovny Chotobuš na Dobříši.',
      secondP: 'Věříme v příznivé počasí, ale jsme připraveni i na déšť či velké horko, na místě budou velké stany s posezením a posedět bude možné i ve stylové kůlně.',  
    },
    description: 
      `Zahradní slavnost patří všem! Vezměte si takové oblečení, ve kterém se budete cítit
       dobře a celý den si užijete. Rozhodně není potřeba nic formálního, dámám rozhodně 
       nedoporučujeme podpatky. Událost bude probíhat venku, tak volte outfit spíše dle 
       předpovědi počasí než tradic.`,
  },
  adressData: {
    adress: 'Chotobuš 239, Dobříš',
    url: 'https://mapy.cz/s/dogokolosa',
    perex: 'Pokud nemůžete dorazit pěšky, doporučujeme využít veřejnou dopravu. Možnosti parkování přímo na místě budou omezené.',
    description: <>   Autobus Dobříš - Praha (Smíchovské nádraží) jezdí několikrát do hodiny, ve večerních hodinách 
    pak pouze v hodinových intervalech. 
    Využijte zástávku <LinkDobrisNam/> případně pokud jste dobrodružnější povahy, 
    můžete využít bližší zástávku na znamené <LinkDobrisLom/></>,
    image: {
      src: pole,
      alt: 'Mapa Chotobuše'
     }
  }
}

const Place: React.FC = () => {

  const { placeIntroData, adressData } = placeData

    return (
          <StyledPlace id="place"> 
            <PlaceIntro data={placeIntroData} />
            <Address data={adressData}/> 
         </StyledPlace>
      
    )
}

export default Place