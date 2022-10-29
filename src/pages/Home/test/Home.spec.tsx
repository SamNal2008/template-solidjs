import { describe, expect, it } from "vitest";
import { render } from "solid-testing-library";
import { Home } from "../Home";
import { createRoot } from "solid-js";

describe("Home component", () => {
  it("should contain the title of the page", () => {
    createRoot(() => {
      const { unmount, getByText } = render(() => <Home />);
      expect(getByText("Fidelity !")).toBeInTheDocument();
      unmount();
    });
  });

  it("should contain the picture with the people using their phone", () => {
    createRoot(() => {
      const { unmount, getByAltText } = render(() => <Home />);
      expect(getByAltText("People using their phone")).toBeInTheDocument();
      unmount();
    });
  });
});
