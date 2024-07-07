import React from "react";
import { useMediaQuery } from "react-responsive";
import { isMobile } from "react-device-detect";

import { 
    StyledCeremony,
    StyledText,
    StyledTitle,
    StyledDate,
    StyledHour,
    StyledPlace,
    StyledBgImage,
    StyledBlurBg,
 } from "./styled";

import kytkyL from '../../assets/svg/kytkyLeft.svg'
import kytkyR from '../../assets/svg/kytkyRight.svg'
import bgGreen from "../../assets/svg/ellipseDarkGreen.svg"


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

  const isMobileView = useMediaQuery({ query: '(max-width: 596px)' });

  return (
      <StyledCeremony id="ceremony">
        {(!isMobile || !isMobileView) && (
          <StyledBlurBg>
            <img src={bgGreen} alt="" />
          </StyledBlurBg>
        )}
        
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