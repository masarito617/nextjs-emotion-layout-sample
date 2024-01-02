import { Meta, StoryFn } from '@storybook/react'
import Card from '.'

export default {
  title: 'Home／PostCard',
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />
export const SampleCard = Template.bind({})
SampleCard.args = {
  text: 'sample',
}
