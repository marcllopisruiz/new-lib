import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "big"],
      control: { type: "radio" },
    },
    text: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    text: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    text: "Secondary button",
  },
};
