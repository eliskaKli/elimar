import rem from 'polished/lib/helpers/rem'
import styled from "styled-components";
import { Section, Image, Layout, Button } from "../preComponents";

export const StyledContact = styled(Section)`
  position: relative;  
  justify-content: center;
  !padding-bottom: ${(rem(64))};
  text-align: center;
 
  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    justify-content: center;
    !padding-bottom: ${(rem(128))};
    text-align: center;
  }
`

export const StyledContent = styled(Layout.Container)`
  max-width: ${rem(644)};
  
`

export const StyledHeadline = styled.h1`
  margin-bottom: ${rem(32)};
  margin-top: ${rem(24)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: ${rem(32)};
    margin-top: ${rem(56)};
  }
`

export const StyledDescription = styled.p`
  margin-bottom: ${rem(24)};

  :last-child {
    margin-bottom: ${rem(24)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: ${rem(32)};

  :last-child {
    margin-bottom: ${rem(40)};
  }
  }
`

export const StyledImage = styled(Image)`
  
`

export const StyledBgImage = styled.div`
  gap: ${(rem(280))};
  bottom: ${(rem(64))};
  display: flex;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  position: relative;

  img {
    width: ${rem(172)};
    height: ${rem(170)};    
  }

  .left {
    left: ${rem(-32)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xsMax}px) {
    gap: ${rem(600)};

   .left {
        left: ${(rem(64))};
    }
  } 

  @media (max-width: 350px) {
    gap: ${rem(180)};
  } 
`