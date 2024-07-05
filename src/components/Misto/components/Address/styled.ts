import rem from 'polished/lib/helpers/rem'
import styled from 'styled-components'
import { Section, Image } from '../../../preComponents'

export const StyledAddress = styled(Section)`
  font-size: ${rem(16)};
  padding: ${rem(24)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: ${rem(64)};
  }
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

export const StyledImage = styled(Image)`


`