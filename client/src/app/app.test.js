import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test("renders hello from the frontend text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello from the frontend!/i);
  expect(linkElement).toBeInTheDocument();
});
