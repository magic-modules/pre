import { is } from '@magic/test'
import * as Pre from '../src/index.mjs'

export default [
  {
    fn: () => Pre.View,
    expect: is.function,
    info: 'expect Pre.View to be a function',
  },
  {
    fn: () => Pre.propTypes.Pre,
    expect: is.array,
    info: 'expect Pre.propTypes.Pre to be an array',
  },
]
