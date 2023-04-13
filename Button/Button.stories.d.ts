import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ variant, size, text, onClick, }: {
        variant: "primary" | "secondary";
        size: "small" | "medium" | "big";
        text: string;
        onClick?: (() => void) | undefined;
    }) => JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        text: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
//# sourceMappingURL=Button.stories.d.ts.map