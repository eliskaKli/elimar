import React from "react";

import rem from 'polished/lib/helpers/rem'

import styled, { css } from "styled-components";
import { Color } from "../../../theme/variables/color";

type SectionPadding = {
  top?: number
  bottom?: number
}

export interface SectionProps {
  children: React.ReactNode
  bgColor?: keyof Color
  className?: string
  column?: number
  textAlign?: 'left' | 'center' | 'right'
  padding?: {
    sm?: number | SectionPadding
    lg?: number | SectionPadding
  }
}

const SECTION_PADDING_SM = 32
const SECTION_PADDING_LG = 64

const Section: React.FC<SectionProps>= ({ 
    bgColor,
    children,
    className,
    column,
    textAlign = 'left',
    padding = {
        sm: 32,
        lg: {
            bottom: 32,
            top: 64,
        },
    },
}) => {
    const sectionPadding: {
        sm: SectionPadding
        lg: SectionPadding
    } = {
        sm: {
            top: typeof padding.sm === 'object' ? padding.sm.top : padding.sm,
            bottom: typeof padding.sm === 'object' ? padding.sm.bottom : padding.sm,
        },
        lg: {
            top: typeof padding.lg === 'object' ? padding.lg.top : padding.lg,
            bottom: typeof padding.lg === 'object' ? padding.lg.bottom : padding.lg,
        },
    }


    return (
        <StyledSection
          bgColor={bgColor}
          className={className}
          column={column}
          textAlign={textAlign}
          sectionPadding={sectionPadding}
        >
            {children}
        </StyledSection>
    )
}


const StyledSection = styled.div<
  Pick<
    SectionProps, 
    | 'bgColor'
    | 'column'
    | 'textAlign'
  > & {
    sectionPadding: {
        sm: SectionPadding
        lg: SectionPadding
    }
  }
>`
  ${({ sectionPadding }) => css`
    padding-top: ${rem(sectionPadding.sm?.top ?? SECTION_PADDING_SM)};
    padding-bottom: ${rem(sectionPadding.sm.bottom ?? SECTION_PADDING_SM)};
  `}

  ${({bgColor, theme }) => css `
    background: ${bgColor && bgColor in theme.color
      ? theme.color[bgColor]
      : theme.color.green}
  `}

  ${({ textAlign }) => 
    textAlign && 
    css`
      text-align: ${textAlign};
  `}

  ${({ column, theme }) => 
    column === 2 &&
    css`
        @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
          display: grid;
          column-gap: ${rem(64)};
          grid-template-columns: 1fr 1fr;
        }
    `
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ sectionPadding }) => css`
      padding-top: ${rem(sectionPadding.lg?.top ?? SECTION_PADDING_LG)};
      padding-bottom: ${rem(sectionPadding.lg?.bottom ?? SECTION_PADDING_LG)};
    `}
  }
`

export default Section