import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Button from "../Button";

describe("Button", () => {
  test("renders with default props", () => {
    const { getByText } = render(
      <Button variant="primary" text="Click me" size="medium" />
    );
    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("font-size: 14px");
    expect(button).toHaveStyle("background-color: #0070f3");
  });

  test("renders with secondary variant and small size", () => {
    const { getByText } = render(
      <Button text="Click me" variant="secondary" size="small" />
    );
    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("font-size: 12px");
    expect(button).toHaveStyle("background-color: #eaeaea");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button
        variant="primary"
        size="medium"
        text="Click me"
        onClick={handleClick}
      />
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
