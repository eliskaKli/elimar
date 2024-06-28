export interface MediaQueries {
    hover: string
}

const mediaQueries: MediaQueries = {
    hover: `(any-hover: hover), screen and (-ms-high-contrast: active), (-ms-high-contrast: none)`,
}

export default mediaQueries