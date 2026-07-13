import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImg } from "./HeroImg";

const meta: Meta<typeof HeroImg> = {
  title: "Components/HeroImg",
  component: HeroImg,
  argTypes: {
    imageurl: { control: "text" },
    title: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImg>;

export const Default: Story = {
  args: {
    imageurl: "https://via.placeholder.com/1000x300",
    title: "Hero Image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageurl: "https://via.placeholder.com/1000x300",
    title: "Disabled Hero Image",
    disabled: true,
  },
};