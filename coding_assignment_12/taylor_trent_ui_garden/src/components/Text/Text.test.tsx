import { render, screen } from '@testing-library/react';
import { Text } from './Text';

test("Text is visible", () => {
  render(<Text text="Username"/>);
  expect(screen.getByText("Username")).toBeVisible();
})

test("Text background changes when disabled", () => {
  render(<Text text="Disabled Text" disabled />);
  expect(screen.getByText("Disabled Text")).toHaveStyle({
    backgroundColor: "grey",
  });
});