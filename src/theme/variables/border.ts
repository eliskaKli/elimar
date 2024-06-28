import rem from 'polished/lib/helpers/rem'

export interface Border {
    radius: string
    radiusMd: string,
    radiusLg: string,
}

const border: Border = {
    radius: rem(12),
    radiusMd: rem(16),
    radiusLg: rem(24),
}

export default border