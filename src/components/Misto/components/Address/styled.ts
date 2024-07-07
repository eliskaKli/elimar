import rem from 'polished/lib/helpers/rem'
import styled from 'styled-components'
import { Section, Layout } from '../../../preComponents'
import bg from "../../../../assets/svg/bgEllipses.svg"

export const StyledContainer = styled(Layout.Container)`
  background: ${({ theme }) => theme.color.darkGreen}; 
  background-image: url(${bg});
  background-size: cover;
  padding: auto none;
`

export const StyledAddress = styled(Section)`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: ${rem(32)};
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.color.grey};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: underline;

  @media ${({ theme }) => theme.mediaQueries.hover} {
      &:hover {
        color: ${({ theme }) => theme.color.white}  
        text-decoration: none;
      }
    } 
`

export const StyledSubTitle = styled.h4`
  margin-bottom: ${rem(32)};
  margin-top: ${rem(32)};
`

export const StyledPerex = styled.p`
  margin-top: ${rem(32)};
`

export const StyledMap = styled.div`
  border: ${({ theme }) => theme.border.radiusLg};
`
