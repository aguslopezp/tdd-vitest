import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz.js'

/*
Escribir una función que al pasarle un número:
  - Muestra "fizz" si es múltiplo de 3.
  - Muestra "buzz" si es múltiplo de 5.
  - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
  - Muestra el número si no es multiplo de 3 ni de 5.
*/

describe('fizzbuzz', () => {
  // este test lo desactivamos posteriormente porque es redundante
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw an error if not passed a number', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error if not passed a number', () => {
    expect(() => fizzbuzz()).toThrow('parameter must be a number')
  })

  it('should throw a specific error if not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter must be a number')
  })

  it('should return 1 if number is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })
  // este test ya está cubierto por el algoritmo
  // it('should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('should return "buzz" if number is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number is multiple of 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
