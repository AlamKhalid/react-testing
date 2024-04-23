import Greet from "./greet";
import { render, screen } from "@testing-library/react";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Alam" />);
  const textElement = screen.getByText("Hello Alam");
  expect(textElement).toBeInTheDocument();
})
