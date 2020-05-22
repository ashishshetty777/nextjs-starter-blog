import React from 'react'
import {render} from 'theme-wrapper'
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
          <div>
            <h1
              class=""
            >
              Hello there!
            </h1>
          </div>
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
