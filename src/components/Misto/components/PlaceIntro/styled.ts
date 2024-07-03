import styled from 'styled-components'
import { Section, Image } from '../../../preComponents'

export const StyledPlaceIntro = styled(Section)`
  font-size: ${({ theme }) => theme.fontSizes.base};
`

export const StyledImageFour = styled(Image)`
`

export const RightCol = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`

export const StyledHeadline = styled.h1`
  font-families: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${({ theme}) => theme.fontSizes.headingLg};
`

export const StyledSubHeadline = styled.h3`
  font-families: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${({ theme }) => theme.fontSizes.headingMd};
`

export const StyledDescription = styled.div`
  margin: auto;
`