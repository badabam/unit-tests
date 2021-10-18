import { describe, expect } from '@jest/globals'
import { isDivisibleBy, isDivisibleBy3, isEven, isOdd } from './math'

describe('math', () => {
  describe('isOdd', () => {
    it('returns true, if a number is odd', () => {
      const result = isOdd(1)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is odd', () => {
      const result = isOdd(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is even', () => {
      const result = isOdd(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is even', () => {
      const result = isOdd(-4)
      expect(result).toBe(false)
    })
  })

  describe('isEven', () => {
    it('returns true, if a number is even', () => {
      const result = isEven(2)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is even', () => {
      const result = isEven(-4)
      expect(result).toBe(true)
    })

    it('returns false, if a number is odd', () => {
      const result = isEven(1)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is odd', () => {
      const result = isEven(-3)
      expect(result).toBe(false)
    })
  })

  describe('isDivisibleBy3', () => {
    it('returns true, if a number is divisible by 3', () => {
      const result = isDivisibleBy3(3)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number divisible by 3', () => {
      const result = isDivisibleBy3(-12)
      expect(result).toBe(true)
    })

    it('returns false, if a number not divisible by 3', () => {
      expect(isDivisibleBy3(1)).toBe(false)
      expect(isDivisibleBy3(2)).toBe(false)
    })

    it('returns false, if a negative number not divisible by 3', () => {
      const result = isDivisibleBy3(-4)
      expect(result).toBe(false)
    })
  })

  describe('isDivisibleBy', () => {
    it('returns true for isDivisibleBy(6, 3)', () => {
      const result = isDivisibleBy(6, 3)
      expect(result).toBe(true)
    })

    it('returns true for isDivisibleBy(-6, 3)', () => {
      const result = isDivisibleBy(-6, 3)
      expect(result).toBe(true)
    })

    it('returns true for isDivisibleBy(8, 2)', () => {
      const result = isDivisibleBy(8, 2)
      expect(result).toBe(true)
    })

    it('returns true for isDivisibleBy(-8, 2)', () => {
      const result = isDivisibleBy(-8, 2)
      expect(result).toBe(true)
    })

    it('throws an Error for isDivisibleBy(2, 0)', () => {
      expect(() => isDivisibleBy(2, 0)).toThrow()
    })

    it('throws an Error for isDivisibleBy(2)', () => {
      expect(() => isDivisibleBy(2)).toThrow()
    })
  })
})
