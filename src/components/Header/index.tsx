import React from "react";

import { StyledHeader } from "./styled";

import { ButtonProps } from "../preComponents/Button";
import { isMobile } from "react-device-detect";

import MobileHeader from "./components/Mobile";
import DesktopHeader from "./components/Desktop";


export type HeaderDataType = {
    button: ButtonProps
}

export const headerData: HeaderDataType = {
    button: {
       href: 'mapy.cz',
    }  
} 

interface Props {
    headerData: HeaderDataType
}

const Header: React.FC<Props> = ({ headerData }) => {
  /* const { button } = headerData  */

  return (
    <StyledHeader>
        {isMobile ? (
            <MobileHeader />
        ) : (
            <DesktopHeader headerData={headerData}/>
        )}
    </StyledHeader>
  )
}

export default Header