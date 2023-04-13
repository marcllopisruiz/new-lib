type ButtonWrapperProps = {
    variant: "primary" | "secondary";
    size: "small" | "medium" | "big";
};
type ButtonProps = {
    variant: "primary" | "secondary";
    size: "small" | "medium" | "big";
    text: string;
    onClick?: () => void;
};
export declare const ButtonWrapper: import("styled-components").StyledComponent<"button", any, ButtonWrapperProps, never>;
declare const Button: ({ variant, size, text, onClick, }: ButtonProps) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map