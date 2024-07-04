
/* global */
import fonts from './global/fonts';
import { createGlobalStyle } from 'styled-components';
import headings from './global/headings';
import link from './global/link';

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${headings}
  ${link}
`;

export default GlobalStyle;
