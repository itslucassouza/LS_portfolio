import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { NextPageButton } from "./NextPageButton";

const mockScrollBy = vi.fn();
global.scrollBy = mockScrollBy;

describe("NextPageButton Component", () => {
  beforeEach(() => {
    mockScrollBy.mockClear();
  });

  it("should render button", () => {
    render(<NextPageButton />);

    const button = screen.getByText("next");
    fireEvent.click(button);

    expect(mockScrollBy).toHaveBeenCalledWith({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
});
