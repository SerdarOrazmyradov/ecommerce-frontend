import { breakpointsTailwind, useBreakpoints }  from '@vueuse/core'
import { CURRENCY } from './constants'

const breakpoints = useBreakpoints(breakpointsTailwind)

const priceFormat = (price) => {
  return `${CURRENCY}${(price / 100).toFixed(2)}`
}

const isSm = breakpoints.smaller('sm')
const isMd = breakpoints.smaller('md')

export { priceFormat, isSm, isMd }
