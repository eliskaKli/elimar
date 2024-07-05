import rem from 'polished/lib/helpers/rem'
import styled from "styled-components";
import { Section } from '../preComponents';

export const StyledCeremony = styled(Section)`
  height: ${rem(200)};
  text-align: center;  
  /* background-image: radial-gradient(circle at center, #1E5141 0% 80%, transparent 81% 100%);
   */
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xsMax}px) {
    
  } 
`

export const StyledText = styled.div`
  margin: ${rem(32)} ${rem(24)} auto auto;  
  

  p {
    margin-bottom: ${rem(8)};
  }
`

export const StyledTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${rem(20)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: auto ${rem(24)};
`

export const StyledDate = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${rem(20)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const StyledHour = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.headingXs};
`

export const StyledPlace = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.headingXs};
`

export const StyledBgImage = styled.div`
  bottom: ${(rem(124))}; 
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  position: relative; 

  img {
    width: ${rem(167)};
    heigth: ${rem(163)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xsMax}px) {
    bottom: ${(rem(160))};
    gap: ${rem(420)};
  } 

  @media (max-width: 574px) {
    bottom: ${(rem(140))};
    gap: ${rem(270)};
  } 

  @media (max-width: 350px) {
    bottom: ${(rem(100))};
    gap: ${rem(160)};
  } 

`

