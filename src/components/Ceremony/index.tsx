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

const Ceremony: React.FC = () => {

  const isMobileView = useMediaQuery({ query: '(max-width: 596px)' });
  const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 597px)' });

  console.log( 'isMobileView', isMobileView)

  return (
      <StyledCeremony id="ceremony">
        {(/* !isMobile || */ !isMobileView) && (
          <StyledBlurBg>
            <img src={bgGreen} alt="" />
          </StyledBlurBg>
        )} 
       {/*  {
          isDesktopOrTablet ? (
            <StyledBlurBg>
              <img src={bgGreen} alt="" />
            </StyledBlurBg>
          ) : null
        } */}
        
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