import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test("label is visible", () => {
  render(<Label text="Username"/>);
  expect(screen.getByText("Username")).toBeVisible();
})

test("label background changes when disabled", () => {
  render(<Label text="Disabled Label" disabled />);
  expect(screen.getByText("Disabled Label")).toHaveStyle("background-color: grey");
})