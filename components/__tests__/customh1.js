import React from 'react'
import {render} from 'theme-wrapper'
import CustomH1 from '../customh1'
// import {light} from '../../utils/themes'

test('renders', () => {
  const {container} = render(<CustomH1 name="Hello there!" />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      font-size: 5em;
      color: white;
      background: #1c191c;
    }

    <div>
      <h1
        class="heading2Xl emotion-0"
      >
        Hello there!
      </h1>
    </div>
  `)
})
