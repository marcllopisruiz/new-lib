import styled, { css } from "styled-components";

const fontSizeMapping = {
  small: "12px",
  medium: "14px",
  big: "16px",
};

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

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-size: ${(props) => fontSizeMapping[props.size]};
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: #ffffff;
      background-color: #0070f3;

      &:hover {
        background-color: #0061d1;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: #000000;
      background-color: #eaeaea;

      &:hover {
        background-color: #dcdcdc;
      }
    `}
`;

const Button = ({
  variant = "primary",
  size = "medium",
  text,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick} size={size}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
