import React from "react";

import { StyledHeader } from "./styled";

import { ButtonProps } from "../preComponents/Button";
import { isMobile } from "react-device-detect";

import MobileHeader from "./components/Mobile";
import DesktopHeader from "./components/Desktop";
import { useMediaQuery } from 'react-responsive'

export type HeaderDataType = {
    button: ButtonProps
}

export const headerData: HeaderDataType = {
    button: {
       href: 'https://forms.gle/M8PtRPycQXfbLktW6 ',
    },
} 

interface Props {
    headerData: HeaderDataType
}


const Header: React.FC<Props> = ({ headerData }) => {
   
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 991px)'});

  return (
    <StyledHeader>
       {(isMobile || isMobileOrTablet ) ? (
            <MobileHeader />
        ) : (
            <DesktopHeader headerData={headerData}/>
        )} 
    </StyledHeader>
  )
}

export default Header