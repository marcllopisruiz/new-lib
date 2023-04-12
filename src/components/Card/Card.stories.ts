import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";


const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Card Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatum ducimus dolor deleniti aspernatur. Necessitatibus deleniti blanditiis ea quia beatae.",
  },
};
