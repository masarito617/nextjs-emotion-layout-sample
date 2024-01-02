import { css } from '@emotion/react'

const styleRoot = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const styleText = (color?: string) => css`
  font-size: 20px;
  font-weight: bold;
  padding: 12px 0px;
  color: ${color ? color : 'black'};
`

/**
 * 要素中央にテキストを表示する
 * @param props
 * @returns
 */
const CenterText = (props: { text: string; color?: string }) => {
  return (
    <div css={styleRoot}>
      <div css={styleText(props.color)}>{props.text}</div>
    </div>
  )
}
export default CenterText
