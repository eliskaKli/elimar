import rem from 'polished/lib/helpers/rem'
import styled from "styled-components";

export const StyledDesktopHeader = styled.div`
 /*  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto ${rem(64)}; */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin: auto ${rem(64)};

  li > a {
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

export const StyledLogo = styled.svg`
  /* align-items: center;
  display: flex;  
  flex-shrink: 0;  
  justify-content: flex-start;
  position: absolute;
  margin: auto;  */
  grid-column: 2;
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
  Logo {
    height: ${rem(126)};
    width: ${rem(198)};
    }
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