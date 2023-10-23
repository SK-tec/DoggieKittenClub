import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landingpage", () => {
  render(<App />);
  const heading = screen.getByText("Welcome To Doggie-Kitten Club");
  expect(heading).toBeInTheDocument();
});
test("Hero section image", () => {
  render(<App />);
  const heroSectionImage = screen.getByAltText("herosection");
  expect(heroSectionImage).toBeInTheDocument();
});
