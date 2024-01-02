import { Theme, css } from '@emotion/react'
import CenterText from '@/components/CenterText'

const styleRoot = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.primaryDarkGray};
`

const styleContent = css`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

/**
 * ヘッダー
 * @returns
 */
const Header = () => {
  return (
    <>
      <header>
        <div css={styleRoot}>
          <div css={styleContent}>
            <CenterText text="ヘッダー" color="white" />
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
