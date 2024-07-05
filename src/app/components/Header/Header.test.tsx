import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("test add function", () => {
  const logo = "My Logo";
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  beforeEach(() => {
    render(<Header logo={logo} options={options} />);
  });

  test("should render title", () => {
    expect(screen.getByText(logo)).toBeTruthy();
  });

  test("should render options", () => {
    options.forEach((option) => {
      const elements = screen.getAllByText(option.label);
      expect(elements.length).toBeGreaterThan(1);
    });
  });
});
