import styled from 'styled-components'
import rem from 'polished/lib/helpers/rem'
import { Section } from '../preComponents'

export const StyledSection = styled(Section)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: auto;
`


export const StyledDescription = styled.p`
  margin-bottom: ${rem(24)};
`