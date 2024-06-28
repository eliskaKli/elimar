import rem from 'polished/lib/helpers/rem'

export interface LineHeights {
    base: string
    sm: string
    large: string
    xl: string
    xxl: string
}

const lineHeights: LineHeights = {
    base: rem(25),
    sm: rem(21),
    large: rem(35),
    xl: rem(40),
    xxl: rem(58),
}

export default lineHeights