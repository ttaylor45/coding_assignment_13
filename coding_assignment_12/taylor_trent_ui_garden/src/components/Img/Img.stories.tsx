import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/300x150",
    alt: "Placeholder Image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/300x150",
    alt: "Disabled Placeholder Image",
    disabled: true,
  },
};