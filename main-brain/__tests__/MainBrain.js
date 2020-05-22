import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import MainBrain from '../MainBrain'

test('renders Hello world as its H1', () => {
  const {getByText} = render(<MainBrain home={true} />)

  const geth1Text = getByText('Hello there!')
  fireEvent.click(geth1Text)
  expect(geth1Text).toHaveTextContent('Been there!')

  const geth1Text2 = getByText('Been there!')
  fireEvent.click(geth1Text2)
  expect(geth1Text2).toHaveTextContent('Hello there!')
})
