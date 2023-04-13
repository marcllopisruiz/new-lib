import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ title, description }: {
        title: string;
        description: string;
    }) => JSX.Element;
    tags: string[];
    argTypes: {
        title: {
            control: {
                type: string;
            };
        };
        description: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=Card.stories.d.ts.map