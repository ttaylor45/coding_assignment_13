import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("button is visible", () => {
  render(<Button text="Click Me" />);
  expect(screen.getByText("Click Me")).toBeVisible();
});

test("button background changes when disabled", () => {
  render(<Button text="Click Me" disabled />);
  expect(screen.getByText("Click Me")).toHaveStyle("background-color: grey");
});