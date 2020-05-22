import React from 'react'
import {render} from '@testing-library/react'
import Layout from '../layout'

test('renders', () => {
  const {container} = render(<Layout />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="container"
      >
        <header
          class="header"
        >
          <a
            href="/"
          >
            <img
              alt="Ashish Shetty"
              class="headerImage borderCircle"
              src="/images/profile.jpg"
            />
          </a>
          <h2
            class="headingLg"
          >
            <a
              class="colorInherit"
              href="/"
            >
              Ashish Shetty
            </a>
          </h2>
        </header>
        <main />
        <div
          class="backToHome"
        >
          <a
            href="/"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  `)
})
