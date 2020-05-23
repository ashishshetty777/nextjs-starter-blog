import {getRandomNumber, returnEvenNumbers} from '../../utils/utilFunctions'

test('getRandomNumber returns a number', () => {
  expect(getRandomNumber()).toBe(2)
})

test('returnEvenNumbers returns even numbers', () => {
  expect(returnEvenNumbers()).toMatchInlineSnapshot(`
    Array [
      2,
      4,
      6,
      8,
      10,
      12,
    ]
  `)
})
