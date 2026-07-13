import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test("dropdown is visible", () => {
  render(<Dropdown options={["Option 1", "Option 2"]} />);
  expect(screen.getByText("Option 1")).toBeVisible();
});

test("dropdown background changes when disabled", () => {
  render(<Dropdown options={["Option 1", "Option 2"]} disabled />);
  expect(screen.getByRole("combobox")).toHaveStyle("background-color: grey");
});