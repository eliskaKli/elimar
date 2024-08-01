import rem from 'polished/lib/helpers/rem'

export interface Border {
    radiusSm: string,
    radius: string,
    radiusMd: string,
    radiusLg: string,
}

const border: Border = {
    radiusSm: rem(4),
    radius: rem(12),
    radiusMd: rem(16),
    radiusLg: rem(24),
}

export default border