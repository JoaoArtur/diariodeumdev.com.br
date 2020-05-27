import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { rhythm, scale } from "../utils/typography"

const GlobalStyle = createGlobalStyle`
  * {
    transition: all 300ms ease-in-out;
    border-top-color: black;
    border-left-color: black;
    border-right-color: black;
    border-bottom-color: black;

    @media (prefers-color-scheme: dark) {
      border-top-color: white;
      border-left-color: white;
      border-right-color: white;
      border-bottom-color: white;
    }
  }

  body, html {
    background: white;
    color: black;

    @media (prefers-color-scheme: dark) {
      background: #2f3640;
      color: white;
    }
  }

  a {
    color: #007acc;

    @media (prefers-color-scheme: dark) {
      color: #0086e1;
    }
  }

  blockquote, hr {
    color: black;
    border-top-color: black;
    border-left-color: black;
    border-right-color: black;
    border-bottom-color: black;

    @media (prefers-color-scheme: dark) {
      color: white;
      border-top-color: white;
      border-left-color: white;
      border-right-color: white;
      border-bottom-color: white;
    }
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          borderBottomSize: 1,
          paddingBottom: 8,
          borderBottomStyle: `solid`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Desenvolvido com
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
