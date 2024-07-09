import rem from 'polished/lib/helpers/rem'
import styled, { css } from "styled-components";

export const StyledDesktopHeader = styled.nav<{ className: string }>`
  background: transparent;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: ${rem(140)};
  margin: auto ${rem(64)};

  li > a {
    color: ${({ theme }) => theme.color.grey};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    font-size: ${({ theme }) => theme.fontSizes.headingXs};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    
    text-decoration: none;

    g {
      height: 0;
    }

    @media ${({ theme }) => theme.mediaQueries.hover} {
      &:hover {
        text-decoration: underline;
      }
}}
  
   ${({ className }) => 
      className === "nav-sticky-desktop" && css`
        background: ${({ theme }) => theme.color.darkGreen};
        margin: 0;
        opacity: 0.98;
        padding: ${rem(0)} ${rem(64)} 0 ${rem(64)};
        position: sticky;
        top: 0;
        z-index: 100;

        svg {
          width: ${rem(120)};
        }
    `
    }


/*   .nav-sticky-desktop {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: ${rem(76)};
    background: ${({ theme }) => theme.color.darkGreen};

    svg {
      width: ${rem(120)};
    }
  }   */
  
`

export const StyledNavigation = styled.nav`
  align-items: center;
  display: flex;  
  height: ${rem(166)};
  justify-content: flex-start;
  
  ul {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    gap: ${rem(40)};
    list-style: none;
    padding-left: 0;
    text-decoration: none;
  }
`

export const StyledLogo = styled.div`
  grid-column: 2;
  height: ${rem(126)};
  justify-self: center;
  }
`

export const StyledCTASection = styled.div`
  align-items: center;
  display: flex;
  gap: ${rem(40)};
  justify-content: flex-end;
  /* width: ${rem(474)}; */

  :first-child {
    color: ${({ theme }) => theme.color.grey};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    font-size: ${({ theme }) => theme.fontSizes.headingXs};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    text-decoration: none;

    @media ${({ theme }) => theme.mediaQueries.hover} {
      &:hover {
        text-decoration: underline;
      }
    } 
  
`