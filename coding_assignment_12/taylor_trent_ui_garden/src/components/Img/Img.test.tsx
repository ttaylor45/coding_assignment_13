import {render, screen} from "@testing-library/react";
import { Img } from "./Img";

test("Img is visible", () => {
  render(<Img src="https://via.placeholder.com/300x150" alt="Text Img"/>);
  expect(screen.getByAltText("Text Img")).toBeVisible();
});

test("Img background changes when disabled", () => {
  render(
  <Img src="https://via.placeholder.com/300x150"
    alt="Disabled Img"
    disabled
    />);
  expect(screen.getByAltText("Disabled Img")).toHaveStyle("background-color: grey");
});