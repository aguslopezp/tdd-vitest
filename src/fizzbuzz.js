export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter must be a number')
  if (Number.isNaN(number)) throw new Error('parameter must be a number')
  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''
  Object
    .entries(multiplies)
    .forEach(([multplier, word]) => {
      if (number % multplier === 0) output += word
    })
  return output === '' ? number : output
}
