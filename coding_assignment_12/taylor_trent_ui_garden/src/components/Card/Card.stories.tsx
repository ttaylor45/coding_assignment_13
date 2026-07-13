import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    text: "This is a card description.",
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card Title",
    text: "This card is disabled.",
    backgroundColor: "lightgray",
    disabled: true,
  },
};
