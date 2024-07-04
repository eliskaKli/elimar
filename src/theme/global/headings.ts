import { css } from "styled-components";

const headings = css`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.headingLg};
    line-height: ${({ theme }) => theme.lineHeights.xxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.headingMd};
    line-height: ${({ theme }) => theme.lineHeights.xl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.headingSm};
    line-height: ${({ theme }) => theme.lineHeights.large};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.headingXs};
    line-height: ${({ theme }) => theme.lineHeights.sm};
`

export default headings