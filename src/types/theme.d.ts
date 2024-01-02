import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
  }
}

interface Colors {
  primaryYellow: string
  primaryDarkGray: string
  primaryLightGray: string
  primaryWhite: string
  primaryBlue: string
}
