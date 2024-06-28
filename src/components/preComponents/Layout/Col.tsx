import React from "react";

import styled, { css } from "styled-components";

interface Props {
    className?: string
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    children?: React.ReactNode
}

const Col: React.FC<Props> = ({
  children,
  className,
  lg,
  md,
  sm,
  xs = 12,
}) => (
    <StyledCol
      className={className}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
    >
        {children}
    </StyledCol>
)

function getColWidth(span: number): string {
    return `${(span / 12) * 100}%`
}

export function getResponsiveCol(span: number): string {
    return `
        flex: 0 0 ${getColWidth(span)};
        max-width: ${getColWidth(span)};
    `
}

const StyledCol = styled.div<{
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
}>`
  min-height: 1px;
  padding-left: ${({ theme }) => theme.gridGutter.xs / 2}px;
  padding-right: ${({ theme }) => theme.gridGutter.xs / 2}px;
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-left: ${({ theme }) => theme.gridGutter.sm / 2}px;
    padding-right: ${({ theme }) => theme.gridGutter.sm / 2}px;
  }

   @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: ${({ theme }) => theme.gridGutter.md / 2}px;
    padding-right: ${({ theme }) => theme.gridGutter.md / 2}px;
  }

   @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: ${({ theme }) => theme.gridGutter.lg / 2}px;
    padding-right: ${({ theme }) => theme.gridGutter.lg / 2}px;
  }

  ${(props) => 
    props.xs &&
    css`
      ${getResponsiveCol(props.xs)}
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px {
      ${(props) => 
        props.sm &&
        css`
          ${getResponsiveCol(props.sm)}
        `}
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}px {
      ${(props) => 
        props.md &&
        css`
          ${getResponsiveCol(props.md)}
        `}
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}px {
      ${(props) => 
        props.lg &&
        css`
          ${getResponsiveCol(props.lg)}
        `}
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}px {
      ${(props) => 
        props.xl &&
        css`
          ${getResponsiveCol(props.xl)}
        `}
    }
`

export default Col