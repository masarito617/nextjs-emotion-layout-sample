import { css, Theme } from '@emotion/react'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TitleArea from '../TitleArea'
import { lg, xl } from '@/style/media'

const styleContentWrapper = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0px auto;
  width: 1280px;

  ${xl(css`
    width: auto;
  `)}
  ${lg(css`
    display: block;
  `)}
`

const styleMain = (theme: Theme) => css`
  background-color: ${theme.colors.primaryWhite};
  position: relative;
  margin: 0 0.5%;
  width: 800px;

  ${xl(css`
    width: 65%;
  `)}
  ${lg(css`
    width: auto;
    margin: 0px 10px;
  `)}
`

interface LayoutProps {
  mainContent: React.ReactNode
  sideBarContent: React.ReactNode
}

/**
 * ページ共通レイアウト
 * @param props
 * @returns
 */
const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <TitleArea />
      <div css={styleContentWrapper}>
        <main css={styleMain}>{props.mainContent}</main>
        <Sidebar sideBarContent={props.sideBarContent}></Sidebar>
      </div>
      <Footer />
    </>
  )
}
export default Layout
