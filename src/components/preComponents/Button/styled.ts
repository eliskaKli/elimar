import rem from 'polished/lib/helpers/rem'
import styled, {css} from "styled-components";
import { ButtonProps } from '.';

export const StyledButton = styled.a<ButtonProps>`
  align-items: center;
  background: ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.border.radiusLg};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  color: ${({ theme }) => theme.color.darkGrey};
  display: block;
  flex-wrap: nowrap;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding-bottom: ${rem(16)};
  padding-top: ${rem(16)};
  position: relative;
  text-decoration: none;
  width: 100%;  
  z-index: 3;

  @media ${({ theme }) => theme.mediaQueries.hover} {
      &:hover {
        background: ${({ theme }) => theme.color.white};
        //font-weight: ${({ theme }) => theme.fontWeight.semibold};
        color: ${({ theme }) => theme.color.black};
        box-shadow: ${({ theme }) => theme.boxShadow.hover} inset;
      }
    } 

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: inline;
    justify-content: center;
    flex-wrap: nowrap;  
    padding: ${rem(16)} ${rem(32)};

    ${({ size }) => 
      size === "md" && css`
        padding: ${rem(16)} ${rem(32)};
        width: fit-content;
    `}
  }

` 