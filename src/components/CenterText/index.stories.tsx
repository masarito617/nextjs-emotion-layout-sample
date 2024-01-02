import { Meta, StoryFn } from '@storybook/react'
import CenterText from '.'

export default {
  title: 'components／CenterText',
} as Meta<typeof CenterText>

const Template: StoryFn<typeof CenterText> = (args) => <CenterText {...args} />

// sample1
export const SampleTextBlack = Template.bind({})
SampleTextBlack.args = {
  text: 'テスト',
}

// sample2
export const SampleTextBlue = Template.bind({})
SampleTextBlue.args = {
  text: 'テスト',
  color: 'blue',
}
