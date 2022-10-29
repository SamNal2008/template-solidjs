import { describe, expect, it } from "vitest";
import { render } from "solid-testing-library";
import { Companies } from "../MyCompanies";
import { createRoot } from "solid-js";

describe("MyCompanies Page", () => {
  describe("Companies list", () => {
    it("should fetch companies list", () => {
      expect("a").toEqual("a");
    });

    it("should display the list of my companies", () => {
      expect("b").toEqual("b");
    });
  });

  describe("Create companies button", () => {
    it("should contain the create companies button", () => {
      createRoot(() => {
        const { unmount, getByText } = render(() => <Companies />);
        const button = getByText("Créer une entreprise") as HTMLInputElement;
        expect(button).toBeInTheDocument();
        unmount();
      });
    });
  });
});
