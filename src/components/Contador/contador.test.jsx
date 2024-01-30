import { describe, it } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import Contador from "./index";

describe("Contador", () => {
  it("deve incrementar o valor corretamente", () => {
    render(<Contador />);

    const botaoIncrementar = screen.getByRole("button", { name: "+" });
    let valor = screen.getByText("0");

    expect(valor).toBeInTheDocument();

    fireEvent.click(botaoIncrementar);
    valor = screen.getByText("1");
    expect(valor).toBeInTheDocument();
  });

  it("deve decrementar o valor corretamente", () => {
    render(<Contador />);

    const botaoDecrementar = screen.getByRole("button", { name: "-" });
    let valor = screen.getByText("0");

    fireEvent.click(botaoDecrementar);
    valor = screen.getByText("-1");
    expect(valor).toBeInTheDocument();
  });
});
