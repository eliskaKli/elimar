import styled from 'styled-components'
import { Section } from '../../../preComponents'

export const StyledPlaceIntro = styled(Section)`
  font-size: ${({ theme }) => theme.fontSizes.base};
`

export const LeftImgCol = styled.div`
 
`

export const RightCol = styled.div`

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