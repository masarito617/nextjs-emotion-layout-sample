import CenterText from '@/components/CenterText'
import Layout from '@/templates/Layout'

/**
 * ホームページ
 * @returns
 */
export default function Home() {
  return (
    <>
      <Layout
        mainContent={<CenterText text="メイン" />}
        sideBarContent={<CenterText text="サイドバー" />}
      />
    </>
  )
}
