import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Option 1",
    backgroundColor: "green",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Radio Button",
    disabled: true,
  },
};
