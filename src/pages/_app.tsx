import { Global, css } from '@emotion/react'
import type { AppProps } from 'next/app'

// グローバルのスタイル
const styleGlobal = css`
  html,
  body,
  textarea {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={styleGlobal} />
      <Component {...pageProps} />
    </>
  )
}
