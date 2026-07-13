import { render, screen } from "@testing-library/react";
import { HeroImg } from "./HeroImg";

test("Hero Image is visible", () => {
  render(
    <HeroImg
      imageurl="https://via.placeholder.com/1000x300"
      title="Hero Img"
    />,
  );

  expect(screen.getByText("Hero Img")).toBeVisible();
});

test("Hero Image background changes when disabled", () => {
  render(
    <HeroImg
      imageurl="https://via.placeholder.com/1000x300"
      title="Disabled Hero Image"
      disabled
    />,
  );

  expect(screen.getByTestId("hero-image")).toHaveStyle({
    backgroundColor: "grey",
  });
});
