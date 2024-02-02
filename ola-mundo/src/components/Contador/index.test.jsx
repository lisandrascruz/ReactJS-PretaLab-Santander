import { expect } from "vitest";
import Contador from ".";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Contador componente", () => {
  it("deve verificar se o contador está sendo incrementado", () => {
    render(<Contador />);

    const valorDaTela = screen.getByText("0");
    const botaoSoma = screen.getByRole("button", { name: "+" });

    expect(valorDaTela).toBeInTheDocument();

    fireEvent.click(botaoSoma);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("deve verificar se o contador está sendo decrementado", () => {
    render(<Contador />);

    const valorDaTela = screen.getByText("0");
    const botaoSubtracao = screen.getByRole("button", { name: "-" });

    expect(valorDaTela).toBeInTheDocument();

    fireEvent.click(botaoSubtracao);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("deve verificar se o contador está sendo incrementado e decrementado", () => {
    render(<Contador />);

    const valorDaTela = screen.getByText("0");
    const botaoSoma = screen.getByRole("button", { name: "+" });
    const botaoSubtracao = screen.getByRole("button", { name: "-" });

    expect(valorDaTela).toBeInTheDocument();
    expect(botaoSoma).toBeInTheDocument();
    expect(botaoSubtracao).toBeInTheDocument();

    fireEvent.click(botaoSubtracao);

    expect(screen.getByText("-1")).toBeInTheDocument();

    fireEvent.click(botaoSoma);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
