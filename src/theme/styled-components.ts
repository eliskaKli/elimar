import * as styledComponents from 'styled-components'

//variables
import border from './variables/border'
import boxShadow from './variables/boxShadow'
import breakpoints from './variables/breakpoints'
import color from './variables/color'
import containerMaxWidth from './variables/containerMaxWidth'
import fontFamilies from './variables/fontFamilies'
import fontSizes from './variables/fontSizes'
import fontWeight from './variables/fontWeight'
import gridGutter from './variables/gridGutter'
import lineHeights from './variables/lineHeights'
import mediaQueries from './variables/mediaQueries'
import modal from './variables/modal'
import { ThemeInterface } from './theme'

const {
    ThemeProvider,
    createGlobalStyle,
    css,
    default: styled,
    keyframes
} = styledComponents

export const theme: ThemeInterface = {
    border,
    boxShadow,
    breakpoints,
    color,
    containerMaxWidth,
    fontFamilies,
    fontSizes,
    fontWeight,
    gridGutter,
    lineHeights,
    mediaQueries,
    modal
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled