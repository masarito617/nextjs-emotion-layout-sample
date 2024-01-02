import { Theme, css } from '@emotion/react'
import CenterText from '@/components/CenterText'

const styleTitleArea = (theme: Theme) => css`
  height: 280px;
  background-color: ${theme.colors.primaryYellow};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`

const TitleArea = () => {
  return (
    <div css={styleTitleArea}>
      <CenterText text="タイトル" />
    </div>
  )
}
export default TitleArea
