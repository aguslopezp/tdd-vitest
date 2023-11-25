import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']
export const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = op => () => {
    setValue(value.concat(op))
  }

  return (
    <>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map((number) => (
              <button key={number} onClick={createHandleClick(number)}>
                {number}
              </button>
            ))}
          </div>
        ))}
        {
          operations.map((operation) => (
            <button onClick={createHandleClick(operation)} key={operation}>{operation}</button>
          ))
        }
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </>
  )
}