import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};
