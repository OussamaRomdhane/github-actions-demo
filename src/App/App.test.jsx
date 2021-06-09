/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App, { DEFAULT_MARQUEE } from "./App";

describe("<App />", () => {
  it("should render correctly", () => {
    const { getByRole } = render(<App marquee={["test"]} />);

    expect(getByRole("button").textContent).toBe("Click me!");
    expect(getByRole("banner").textContent).toBe("test");
  });

  it("should render correctly with default props", () => {
    const { getByRole } = render(<App />);

    expect(getByRole("button").textContent).toBe("Click me!");
    expect(getByRole("banner").textContent).toBe(DEFAULT_MARQUEE[0]);
  });

  it("should handle button clicks correctly", () => {
    const { getByRole } = render(<App />);

    expect(getByRole("banner").textContent).toBe(DEFAULT_MARQUEE[0]);

    fireEvent.click(getByRole("button"));

    expect(getByRole("banner").textContent).toBe(DEFAULT_MARQUEE[1]);

    fireEvent.click(getByRole("button"));

    expect(getByRole("banner").textContent).toBe(DEFAULT_MARQUEE[2]);

    fireEvent.click(getByRole("button"));

    expect(getByRole("banner").textContent).toBe(DEFAULT_MARQUEE[0]);
  });
});
