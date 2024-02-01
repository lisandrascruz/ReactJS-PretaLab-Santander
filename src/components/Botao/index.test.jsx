import { render, screen } from "@testing-library/react";
import Botao from "./index.jsx";

describe("BotaoComponent", () => {
  it("renderizar o componente de botão corretamente", () => {
    render(<Botao texto="Test Button" acao={() => {}} />);

    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("verifica se o componente tem a classe botao", () => {
    render(<Botao texto="Test Button" acao={() => {}} />);

    const button = screen.getByText("Test Button");
    expect(button).toBeInTheDocument({ fontSize: "18px" });
    expect(button).toHaveClass("botao");
  });
});
