import rem from 'polished/lib/helpers/rem'
import styled from "styled-components";
import { Section } from '../preComponents';

export const StyledCeremony = styled(Section)`
  height: ${rem(160)};
  text-align: center;  
`

export const StyledBlurBg = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.Md}px) {
    img {
      width: ${(rem(760))};
    }
  } 
`

export const StyledText = styled.div`
  margin: ${rem(32)} auto ${rem(24)}  auto;  
  position: relative;
  z-index: 100;

  p {
    margin-bottom: ${rem(8)};
  }
`

export const StyledTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${rem(20)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: auto ${rem(24)};
  position: relative;
  z-index: 5;
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

