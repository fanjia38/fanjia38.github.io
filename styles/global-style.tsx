import { Global, css } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.6;
        font-size: 18px;
        color: #333;
      }

      *, *::before, *::after {
        box-sizing: border-box;
      }

      a, a:hover, a:visited, a:link, a:active {
        text-decoration: none;
        color: #ffa500;
      }
    `}
  />
)