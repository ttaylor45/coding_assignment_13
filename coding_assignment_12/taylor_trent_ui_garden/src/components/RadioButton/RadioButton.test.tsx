import {render, screen} from "@testing-library/react";
import { RadioButton } from "./RadioButton";

test("Radio Button is visible", () => {
  render(<RadioButton label= "Radio Option"/>);
  expect(screen.getByText("Radio Option")).toBeVisible();
});

test("Radio Button background changes when disabled", () => {
  render(<RadioButton label="Disabled Option" disabled />);
  expect(screen.getByText("Disabled Option")).toHaveStyle("background-color: grey");
});
