import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TitleArea from '../TitleArea'

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
      <div>
        <main>{props.mainContent}</main>
        <Sidebar sideBarContent={props.sideBarContent}></Sidebar>
      </div>
      <Footer />
    </>
  )
}
export default Layout
