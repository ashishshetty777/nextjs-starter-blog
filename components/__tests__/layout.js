import React from 'react'
import {render} from '@testing-library/react'
import Layout from '../layout'

test('renders', () => {
  const {container} = render(<Layout home={true} />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      font-size: 5em;
      color: white;
      background: #1c191c;
    }

    <div>
      <div
        class="container"
      >
        <header
          class="header"
        >
          <img
            alt="Ashish Shetty"
            class="headerHomeImage borderCircle"
            src="/images/profile.jpg"
          />
          <h1
            class="heading2Xl emotion-0"
          >
            Ashish Shetty
          </h1>
        </header>
        <main />
      </div>
    </div>
  `)
})
