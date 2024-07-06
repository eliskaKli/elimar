import rem from 'polished/lib/helpers/rem'
import styled, { css } from "styled-components";

export const StyledMobileHeader = styled.nav<{className: string}>`
    align-items: center;
    display: flex;  
    flex-shrink: 0;  
    justify-content: center;
    height: ${rem(115)};  
    overflow: hidden;
    padding: ${rem(16)} ${rem(32)} 0 ${rem(32)};

  ${({ className }) => 
    className === "nav-sticky-mobile" && css`
      background: ${({ theme }) => theme.color.darkGreen};
      /* justify-content: space-between; */
      align-items: center;
  `
  }

`

export const StyledLogo = styled.svg`
  width: ${rem(100)};
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: ${rem(142)};
  }
`