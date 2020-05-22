import React from 'react'
import {render} from '@testing-library/react'
import Layout from '../layout'

test('renders', () => {
  const {debug} = render(<Layout />)
  debug()
})
