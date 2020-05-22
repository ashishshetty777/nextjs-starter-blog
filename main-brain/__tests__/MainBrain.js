import React from 'react'
import {render} from '@testing-library/react'
import MainBrain from '../MainBrain'

test('renders MainBrain', () => {
  render(<MainBrain home={true} />)
})
