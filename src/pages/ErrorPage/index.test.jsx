import { describe, it, expect } from "vitest";
import ErrorPage from "./";
import { render, screen } from "@testing-library/react";

describe("testando algo", () => {
  it("a função de soma", () => {
    render(<ErrorPage />);

    screen.getByText("Deu ruim, acesse uma rota existente.");
  });
});
