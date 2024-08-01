import styled from 'styled-components'
import { Section, Image } from '../../../preComponents'
import rem from 'polished/lib/helpers/rem'

export const StyledPlaceIntro = styled(Section)`
  font-size: ${({ theme }) => theme.fontSizes.base};
`

export const StyledImageFour = styled(Image)`
`

export const TextCol = styled.div`
  padding-top: ${rem(24)};
  padding-bottom: ${rem(24)};
  padding-left: ${rem(16)};
  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: ${rem(32)};
    padding-bottom: ${rem(32)};
  }
`

export const StyledHeadline = styled.h1`
  font-families: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${({ theme}) => theme.fontSizes.headingLg};
  margin-bottom: ${rem(32)};
`

export const StyledSubHeadline = styled.h3`
  font-families: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${({ theme }) => theme.fontSizes.headingMd};
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.fontSizes.headingSm};
  }
`
