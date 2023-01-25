import { render, screen } from "solid-testing-library";
import { Template } from "./Template";
import { TemplateService } from "./Template.service";

describe("Template", () => {
  describe("UI", () => {
    it("should render", () => {
      render(<Template />);
      expect(screen.getByText(/Template*/)).toBeInTheDocument();
    });
  });

  describe("Service", () => {
    it("should test the service", () => {
      expect(TemplateService.templateService()).toMatch(/Template/);
    });
  });
});
