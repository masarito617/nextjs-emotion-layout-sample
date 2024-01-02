import { Theme, css } from '@emotion/react'

const styleCard = (theme: Theme) => css`
  background: ${theme.colors.primaryDarkGray};
  font-size: 40px;
  color: ${theme.colors.primaryYellow};
  width: 400px;
  height: 80px;
  margin: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = (props: { text: string }) => {
  return <div css={styleCard}>{props.text}</div>
}
export default Card
