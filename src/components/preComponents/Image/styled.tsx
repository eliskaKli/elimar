import styled, { css } from 'styled-components'


export const ImageContainer = styled.div<{ isgrid: string }>`
  ${({ isgrid }) =>
    isgrid === 'true' &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
    `}
`;

export const SingleImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 66.67%; /* 3:2 aspect ratio (2/3 * 100) */
  background-color: #d9d9d9;
  border-radius: 16px;
  overflow: hidden;
`;

/* export const StyledImage = styled.img.attrs<{ isLoaded: boolean }>(({ isLoaded }) => ({
  style: {
    opacity: isLoaded ? 1 : 0,
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`; */

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  z-index: 3;
  `;
