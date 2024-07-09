import React, { useEffect, useState } from "react";

import { StyledMobileHeader, StyledLogo } from './styled'
import { ReactComponent as Logo } from '../../../../assets/svg/logo.svg'

const MobileHeader: React.FC = () => {

  const [small, setSmall] = useState("false");

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) { 
        setSmall("nav-sticky-mobile")
      } else {
        setSmall("nav-mobile")
      }
    })
  })

  return (
      <StyledMobileHeader 
        className={small}
      >
        <StyledLogo 
          className="logo-mobile-L"
        >
          <Logo />
        </StyledLogo>
      </StyledMobileHeader>
  )
}
   
export default MobileHeader