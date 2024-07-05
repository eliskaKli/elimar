import React from "react";

import { StyledMobileHeader, StyledLogo } from './styled'
import { ReactComponent as Logo } from '../../../../assets/svg/logo.svg'

//import { HeaderDataType } from "..";

/* type HeaderDataType = {
  button: ButtonProps
} */

/* export interface Props {
    headerData: HeaderDataType
} */

const MobileHeader: React.FC = () => {
 /*  const { button } = headerData   */

  return (
      <StyledMobileHeader>
        <StyledLogo 
          className="logo-mobile-L"
        >
          <Logo />
        </StyledLogo>
      </StyledMobileHeader>
  )
}
   
export default MobileHeader