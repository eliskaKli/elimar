import React, { useEffect, useState } from "react";

import {
  StyledDesktopHeader,
  StyledNavigation,
  StyledLogo,
  StyledCTASection,
} from './styled';

import { ReactComponent as Logo } from '../../../../assets/svg/logo.svg'
import Button from "../../../preComponents/Button";
import { HeaderDataType } from "../..";

interface Props {
  headerData: HeaderDataType
}

const DesktopHeader: React.FC<Props> = ({ headerData }) => {
  const { button } = headerData   

  const [small, setSmall] = useState("false");

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) { 
        setSmall("nav-sticky-desktop")
      } else {
        setSmall("nav-mobile")
      }
    })
  })

  return (
    <StyledDesktopHeader className={small}>
      <StyledNavigation>
        <ul>
          <li><a href="#ceremony">Obřad</a></li>   
          <li><a href="#place">Místo</a></li>
          <li><a href="#program">Program</a></li>
          <li><a href="#gifts">Svatební dary</a></li> 
        </ul>
      </StyledNavigation>
      <StyledLogo 
        className="logo-desktop-L"
      >
        <a href="#ceremony"><Logo /></a>
      </StyledLogo>
      <StyledCTASection>
        <a href="#contact">Kontakt</a>
        <Button
          href={button.href}
          size="md"
        />
      </StyledCTASection>
    </StyledDesktopHeader>
  )
}

export default DesktopHeader