import rem from 'polished/lib/helpers/rem'
import styled from "styled-components";


export const StyledMobileHeader = styled.div`

`

export const StyledLogo = styled.svg`
  align-items: center;
  display: flex;  
  flex-shrink: 0;  
  justify-content: flex-start;
  

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
  Logo {
    height: ${rem(91)};
    width: ${rem(142)};
    }
  }
`