import React from "react";

import { 
    StyledCeremony,
    StyledText,
    StyledTitle,
    StyledDate,
    StyledHour,
    StyledPlace,
    StyledBgImage,
 } from "./styled";
import { Layout } from "../preComponents";

import kytkyL from '../../assets/svg/kytkyLeft.svg'
import kytkyR from '../../assets/svg/kytkyRight.svg'

export type CeremonyDataType = {
    ilustration: {
        kytkyL: string
        kytkyR: string
    }
}

const ceremonyData: CeremonyDataType = {
    ilustration: {
        kytkyL: kytkyL,
        kytkyR: kytkyR,
    }
}


const Ceremony: React.FC = () => {

  return (
      <StyledCeremony>
        <StyledTitle>
          S radostí Vás zveme na naši svatbu
        </StyledTitle>
        <StyledText>
          <StyledDate>
            10. 8. 2024
          </StyledDate>
          <StyledHour>
            v 11 hodin
          </StyledHour>
          <StyledPlace>
            hájovna Chotobuš
          </StyledPlace>
        </StyledText>
        
        <StyledBgImage>
            <img className="left" src={kytkyL} alt=''/>
            <img className="righ" src={kytkyR} alt=''/>
        </StyledBgImage>
      </StyledCeremony> 
  )
}

export default Ceremony