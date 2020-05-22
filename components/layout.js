import Head from 'next/head'
import Link from 'next/link'
import {ThemeProvider} from 'emotion-theming'
import PropTypes from 'prop-types'
import {MainBrain} from '../main-brain' // WIP : Need this to make as npm module
import utilStyles from '../styles/utils.module.css'
import * as themes from '../utils/themes'

import CustomH1 from './customh1'
import styles from './layout.module.css'

const name = 'Ashish Shetty'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}) {
  const [theme, setTheme] = React.useState('dark')
  const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeProvider theme={themes[theme]}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
                onClick={handleThemeChange}
              />
              <MainBrain />
              <CustomH1 name={name} />
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
}
