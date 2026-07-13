import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: 'Username',
    backgroundColor: 'green',
    disabled: false,
  },
};