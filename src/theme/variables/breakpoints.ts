
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface Breakpoints {
    xsMax: number
    sm: number
    smMax: number
    md: number
    mdMax: number
    minResolution: string
    minDevicePxRatio: string
    lg: number
    lgMax: number
    xl: number
}

const breakpoints: Breakpoints = {
  xsMax: 575,
  sm: 576,
  smMax: 767,
  md: 768,
  mdMax: 991,
  minDevicePxRatio: '-webkit-min-device-pixel-ratio: 1.5',
  minResolution: 'min-resolution: 1.5dppx',
  lg: 992,
  lgMax: 1279,
  xl: 1280,
}

export default breakpoints