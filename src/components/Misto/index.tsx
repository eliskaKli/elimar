import React from 'react'

import { StyledPlace } from './styled' 

import { Address, PlaceDetail, PlaceIntro, Parking } from './components'

import { AdressDataType } from './components/Address'
import { ParkingDataType } from './components/Parking'
import { PlaceIntroDataType } from './components/PlaceIntro'
import { SingleImage } from '../preComponents/Image'

import zahrada1 from '../../assets/photos/pampel.jpg'
import zahrada2 from '../../assets/photos/pampel2.jpg'
import zahrada3 from '../../assets/photos/pampel3.jpg'
import zahrada4 from '../../assets/photos/pampel4.jpg'
import zahrada6 from '../../assets/photos/pampel6.jpg'
import zahrada7 from '../../assets/photos/pampel7.jpg'
import chotobus from '../../assets/photos/mapChotobus_1.png'
import pole from '../../assets/photos/pampel5.jpg'

import { Link } from './components/Address/styled'
import { Map, ZoomControl, MouseControl, MarkerLayer, Marker, CompassControl, SyncControl } from 'react-mapycz'
import { ClientOnly } from 'react-client-only'




export type PlaceData = {
  placeIntroData: PlaceIntroDataType
  adressData: AdressDataType
  parkingData: ParkingDataType
}

const fourImages: SingleImage[] = [
  { src: zahrada2, alt: 'Fotka zahrady1'},
  { src: chotobus, alt: '3D letecky model Chotobuse'},
  { src: zahrada6, alt: 'Pohled na hajovnu s jelenem ve stite'},
  { src: zahrada7, alt: 'Pohled do drevene vyklizene garaze s Martinem stojícím uprostred'},
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

const mapChotobus: JSX.Element = (
/*   <ClientOnly>
     <Map height="100%" center={{lat: 49.77435583042677, lng: 14.171340183919252}}>
       <ZoomControl/>
       <MouseControl zoom={true} pan={true} wheel={true}/>
       <CompassControl right={10} top={50} />
       <SyncControl />
        <MarkerLayer>
         <Marker
            coords={{lat: 49.77435583042677, lng: 14.171340183919252}}
          />
       </MarkerLayer> 
    </Map> 
  </ClientOnly> */

  <Map height="100%" center={{lat: 49.77435583042677, lng: 14.171340183919252}}>
    <ZoomControl/>
    <MouseControl zoom={true} pan={true} wheel={true}/>
    <CompassControl right={10} top={50} />
    <SyncControl />
  
</Map> 

)

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
    můžete využít bližší zástávku na znamení <LinkDobrisLom/></>,
    map: mapChotobus,
  },
  parkingData: {
    descriptionParking: {
      firstD: "Přímo na místě bude sice parkování možné, ale značně omezené a rezervované primárně pro rodinné příslušníky a rodiny s dětmi. ",
      secondD: "Pokud budete cestovat autem, využijte prosím parkování v přilehlém okolí: ideálním místem je vstup do anglického parku nebo na dobříšském náměstí, místo svatby je pak jen 10 minut pěšky. ",
    },
    descriptionUbytko: "Budeme moc rádi, pokud s námi vydržíte do nočních hodin a přespíte! Je možné ubytovat se v prostorách zahrady ve vlastním stanu (případně se najde pár míst uvnitř domu) a užít si, jak je libo.",
    image: {
      src: pole,
      alt: 'Těšte se na plánek parkování',
    } 
  }
}

const Place: React.FC = () => {

  const { placeIntroData, adressData, parkingData } = placeData

    return (
          <StyledPlace id="place"> 
            <PlaceIntro data={placeIntroData} />
            <Address data={adressData}/> 
            <Parking data={parkingData} />
         </StyledPlace>
      
    )
}

export default Place