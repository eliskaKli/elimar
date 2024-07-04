import { css } from "styled-components";

const fonts = css`

  body, p {
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.grey};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    font-size: ${({ theme }) => theme.fontSizes.base}; 
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilies.secondary};
    color: ${({ theme }) => theme.color.grey};
    margin-bottom: 0;
    margin-top: 0;
  }


`

export default fonts