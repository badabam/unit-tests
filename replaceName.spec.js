import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName'

describe('replaceName', () => {
  it('replaces a name in a text', () => {
    const text = 'Hello Jane'
    const name = 'Jane'
    const newName = 'Dolly'

    const result = replaceName(text, name, newName)
    expect(result).toBe('Hello Dolly')
  })

  it('replaces each occurance of a name in a text', () => {
    const result = replaceName('Hi John, bye John.', 'John', 'Jane')
    expect(result).toBe('Hi Jane, bye Jane.')
  })
})
