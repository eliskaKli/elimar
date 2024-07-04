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
  textalign?: 'left' | 'center' | 'right'
  padding?: {
    sm?: number | SectionPadding
    lg?: number | SectionPadding
  }
}

const SECTION_PADDING_SM = 64
const SECTION_PADDING_LG = 128

const Section: React.FC<SectionProps>= ({ 
    bgColor,
    children,
    className,
    column,
    textalign = 'left',
    padding = {
        sm: 64,
        lg: {
            bottom: 128,
            top: 128,
        },
    },
}) => {
    const sectionpadding: {
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
          textalign={textalign}
          sectionpadding={sectionpadding}
        >
            {children}
        </StyledSection>
    )
}

const StyledSection = styled.div.attrs<{ sectionpadding: { sm: SectionPadding; lg: SectionPadding } }>(
  ({ sectionpadding }) => ({
    style: {
      paddingTop: rem(sectionpadding.sm.top ?? SECTION_PADDING_SM),
      paddingBottom: rem(sectionpadding.sm.bottom ?? SECTION_PADDING_SM),
    },
}))<
Pick<
  SectionProps,
  | 'bgColor' 
  | 'column' 
  | 'textalign'
  > & {
  sectionpadding: {
    sm: SectionPadding;
    lg: SectionPadding;
  };
}>`
  ${({ bgColor, theme }) => css`
    background: ${bgColor && bgColor in theme.color ? theme.color[bgColor] : theme.color.green};
  `}

  ${({ textalign }) => textalign && css`
    text-align: ${textalign};
  `}

  @media (min-width: ${ ({ theme }) => theme.breakpoints.md}px) {
    ${({ column }) => column === 2 && css `
      display: grid;
      column-gap: ${rem(64)};
      grid-template-columns: 1fr 1fr;
    `}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ sectionpadding }) => css`
      padding-top: ${rem(sectionpadding.lg?.top ?? SECTION_PADDING_LG)};
      padding-bottom: ${rem(sectionpadding.lg?.bottom ?? SECTION_PADDING_LG)};
    `}
  }
`;

/* const StyledSection = styled.div<
  Pick<
    SectionProps, 
    | 'bgColor'
    | 'column'
    | 'textAlign'
  > & {
    sectionpadding: {
        sm: SectionPadding
        lg: SectionPadding
    }
  }
>`
  ${({ sectionpadding }) => css`
    padding-top: ${rem(sectionpadding.sm?.top ?? SECTION_PADDING_SM)};
    padding-bottom: ${rem(sectionpadding.sm?.bottom ?? SECTION_PADDING_SM)};
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
    ${({ sectionpadding }) => css`
      padding-top: ${rem(sectionpadding.lg?.top ?? SECTION_PADDING_LG)};
      padding-bottom: ${rem(sectionpadding.lg?.bottom ?? SECTION_PADDING_LG)};
    `}
  }
` */

export default Section