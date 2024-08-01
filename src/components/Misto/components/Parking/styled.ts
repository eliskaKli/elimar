import rem from 'polished/lib/helpers/rem'
import styled from 'styled-components'
import { Section, Layout, Image } from '../../../preComponents'
import bg from "../../../../assets/svg/bgEllipses.svg"

export const StyledContainer = styled(Layout.Container)`
/*   background: ${({ theme }) => theme.color.darkGreen}; 
  background-image: url(${bg});
  background-size: cover; */
  padding: auto none;
`

export const StyledParking = styled(Section)`
  font-size: ${rem(16)};
  background: transparent;
  //background-image: url(${bg});
 /*  padding: ${rem(24)};  

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: ${rem(64)};
  } */
`

export const TextCol = styled.div`
  padding-bottom: ${rem(24)};
  margin-top: auto;
  margin-bottom: auto;
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: ${rem(32)};
  }
`

export const StyledImage = styled(Image)`
  order: 2;
`