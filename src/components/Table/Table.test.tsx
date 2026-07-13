import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("table is visible", () => {
  render(<Table />);
  expect(screen.getByRole("table")).toBeVisible();
});

test("table background changes when disabled", () => {
  render(<Table disabled />);
  expect(screen.getByRole("table")).toHaveStyle("background-color: grey");
});
