import { set, unknown } from '../../../src/index.js'

export const Struct = set(unknown())

export const data = 'invalid'

export const failures = [
  {
    value: 'invalid',
    type: 'set',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]