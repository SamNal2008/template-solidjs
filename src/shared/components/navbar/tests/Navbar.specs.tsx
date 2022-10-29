import { describe, expect, it } from "vitest";
import { render } from "solid-testing-library";
import { Navbar } from "../Navbar";
import { createRoot } from "solid-js";

describe("Navbar component", () => {
  describe("Actions buttons", () => {
    const actionsButtons = [
      {
        title: "Se connecter",
        href: "/sign-in",
      },
      {
        title: "S'inscrire",
        href: "/register",
      },
    ];

    it.concurrent.each(actionsButtons)("Action button %s", (currentButtonInfo) => {
      createRoot(() => {
        const { unmount, getByText } = render(() => <Navbar />);
        const button = getByText(currentButtonInfo.title) as HTMLInputElement;
        expect(button).toBeInTheDocument();
        expect(button.closest("a")).toHaveAttribute("href", currentButtonInfo.href);
        unmount();
      });
    });
  });
});
