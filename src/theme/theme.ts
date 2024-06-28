//mixins
import {Border} from './variables/border'
import {BoxShadow} from './variables/boxShadow'
import {Breakpoints} from './variables/breakpoints'
import {Color} from './variables/color'
import {ContainerMaxWidth} from './variables/containerMaxWidth'
import {FontFamilies} from './variables/fontFamilies'
import {FontSizes} from './variables/fontSizes'
import { FontWeight } from './variables/fontWeight'
import {GridGutter} from './variables/gridGutter'
import {LineHeights} from './variables/lineHeights'
import {MediaQueries} from './variables/mediaQueries'
import {Modal} from './variables/modal'

export interface ThemeInterface {
    border: Border
    boxShadow: BoxShadow
    breakpoints: Breakpoints
    color: Color
    containerMaxWidth: ContainerMaxWidth
    fontFamilies: FontFamilies
    fontSizes: FontSizes
    fontWeight: FontWeight
    gridGutter: GridGutter
    lineHeights: LineHeights
    mediaQueries: MediaQueries
    modal: Modal
}