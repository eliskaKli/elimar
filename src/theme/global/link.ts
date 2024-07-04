import { css } from "styled-components";

const link = css`
  a {
    color: ${({ theme }) => theme.color.grey};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    text-decoration: none;

    @media ${({ theme }) => theme.mediaQueries.hover} {
      &:hover {
        color: ${({ theme }) => theme.color.white};
      }
    }

  }
`

export default link