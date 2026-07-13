import {render, screen} from "@testing-library/react";
import { Card } from "./Card";

test("Card is visible", () => {
  render(<Card title="Card Title" text="this is a card component"/>);
  expect(screen.getByText("Card Title")).toBeVisible();
});

test("Card background changes when disabled", () => {
  render(<Card title="Disabled Card Title" text="Disabled Card Text" disabled />);
  expect(screen.getByText("Disabled Card Title").parentElement).toHaveStyle(
    "background-color: grey"
  );
});
