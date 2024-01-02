import { Theme, css } from '@emotion/react'
import { lg, xl } from '@/style/media'

const styleRoot = (theme: Theme) => css`
  background-color: ${theme.colors.primaryWhite};
  padding: 0px;
  margin: 0px auto;
  width: 400px;

  ${xl(css`
    width: 30%;
  `)}
  ${lg(css`
    display: block;
    width: auto;
    margin: 10px;
  `)};
`

/**
 * サイドバー
 * @param props
 * @returns
 */
const Sidebar = (props: { sideBarContent: React.ReactNode }) => {
  return <div css={styleRoot}>{props.sideBarContent}</div>
}
export default Sidebar
