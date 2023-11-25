import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }
  return true
}

describe('canReconfigure', () => {
  // it('should be a function', () => {
  //   expect(typeof canReconfigure).toBe('function')
  // })

  it('should throw an error if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw an error if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should throw an error if second parameter is not a string', () => {
    expect(() => canReconfigure('a', 2)).toThrow()
  })

  it('should return a boolean', () => {
    expect(typeof canReconfigure('a', 'b')).toBe('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('ab', 'b')).toBe(false)
  })

  it('should return false if strings provided have different length even with same number of unique characters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if string provided have different number of unique characters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
