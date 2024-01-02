import Layout from '@/templates/Layout'

/**
 * ホームページ
 * @returns
 */
export default function Home() {
  return (
    <>
      <Layout
        mainContent={<div>メイン</div>}
        sideBarContent={<div>サイドバー</div>}
      />
    </>
  )
}
