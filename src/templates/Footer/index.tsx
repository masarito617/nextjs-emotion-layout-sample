import { Theme, css } from '@emotion/react'
import CenterText from '@/components/CenterText'

const styleRoot = (theme: Theme) => css`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryDarkGray};
  margin-top: 20px;
`

/**
 * フッター
 * @returns
 */
const Footer = () => {
  return (
    <footer css={styleRoot}>
      <CenterText text="フッター" color="white" />
    </footer>
  )
}
export default Footer
