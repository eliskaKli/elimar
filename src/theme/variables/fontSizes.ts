import rem from 'polished/lib/helpers/rem'

export interface FontSizes {
    // Base
    base: string
    // Heading
    headingLg: string
    headingMd: string
    headingSm: string
    headingXs: string
}

const fontSizes: FontSizes = {
    base: '16px',
    // Heading
    headingLg: rem(40),
    headingMd: rem(28),
    headingSm: rem(24),
    headingXs: rem(18),
}

export default fontSizes