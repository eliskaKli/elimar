import rgba from 'polished/lib/color/rgba'
import rem from 'polished/lib/helpers/rem'

import colors from './color'

export interface Modal {
    overlayColor: string
    background: string
    border: string
    borderRadius: number
    edgeSpace: string
    padding: string
    zIndex: number
    overlayZIndex: number
}

const modal: Modal = {
    overlayColor: rgba(colors.white, 0.5),
    background: colors.black,
    border: 'none',
    borderRadius: 20,
    edgeSpace: rem(32),
    padding: rem(32), 
    zIndex: 1030,  
    overlayZIndex: 0,
}

export default modal