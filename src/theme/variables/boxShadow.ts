import rgba from 'polished/lib/color/rgba'

import colors from './color'

export interface BoxShadow {
    default: string
    hover: string

}

const boxShadow: BoxShadow = {
    default: `0 4px 4px 0 ${rgba(colors.black, 0.25 )}`,
    hover: `0 4px 4px 0 ${rgba(colors.black, 0.16)}`,
}

export default boxShadow