import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Tailwind test message", () => {
  render(<App />);
  const textElement = screen.getByText(/hello from Tailwind!/i);
  expect(textElement).toBeInTheDocument();
});

test("renders Learn More React link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn more react/i);
  expect(linkElement).toBeInTheDocument();
});
