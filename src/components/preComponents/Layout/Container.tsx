import React from "react";

import styled, { css } from "styled-components";

interface Props {
    className?: string
    children: React.ReactNode
    narrow?: boolean
    nearlyNarrow?: boolean
}

const Container: React.FC<Props> = ({
    children,
    className,
    narrow,
    nearlyNarrow,
}) => {
    return(
        <StyledContainer
          className={className}
          narrow={narrow}
          nearlyNarrow={nearlyNarrow}
        >
            {children}
        </StyledContainer>)
}

const StyledContainer = styled.div<{
  narrow?: boolean
  nearlyNarrow?: boolean
}>`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.gridGutter.sm}px;
  padding-right: ${({ theme }) => theme.gridGutter.sm}px;
  position: relative;
  width: 100;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: ${({ theme }) =>
      theme.containerMaxWidth.sm + theme.gridGutter.sm * 2}px;
  }

   @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-width: ${({ theme }) =>
      theme.containerMaxWidth.md + theme.gridGutter.md * 2}px;
    padding-left: ${({ theme }) => theme.gridGutter.md}px;
    padding-right: ${({ theme }) => theme.gridGutter.md}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ narrow, theme }) => 
      css`
        max-width: ${narrow
          ? theme.containerMaxWidth.narrow + theme.gridGutter.lg * 2
          : theme.containerMaxWidth.lg + theme.gridGutter.lg * 2}px;
        padding-left: ${theme.gridGutter.lg}px;
        padding-right: ${theme.gridGutter.lg}px;
    `}

    ${({ nearlyNarrow, theme }) => 
      nearlyNarrow &&
      css`
        max-width: ${theme.containerMaxWidth.nearlyNarrow + 
        theme.gridGutter.lg * 2}px;
      `}
  }  

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    ${({ narrow, theme }) => 
      css`
        max-width: ${narrow
          ? theme.containerMaxWidth.narrow + theme.gridGutter.lg * 2
          : theme.containerMaxWidth.xl + theme.gridGutter.lg * 2}px;
        padding-left: ${theme.gridGutter.lg}px;
        padding-right: ${theme.gridGutter.lg}px;
    `}

    ${({ nearlyNarrow, theme }) => 
      nearlyNarrow &&
      css`
        max-width: ${theme.containerMaxWidth.nearlyNarrow + 
        theme.gridGutter.lg * 2}px;
      `}
  } 
`

export default Container