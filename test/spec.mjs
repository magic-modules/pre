import { is } from '@magic/test'
import { Pre } from '../src/index.mjs'

export default [
  { fn: () => Pre, expect: is.function, info: 'expect Pre to be an object' },
]
