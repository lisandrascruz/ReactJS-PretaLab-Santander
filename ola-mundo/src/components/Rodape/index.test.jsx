import { render, screen } from "@testing-library/react";
import Rodape from ".";
import { expect } from "vitest";

describe("Rodape Componente", () => {
  it("Deve exibir na tela o que foi recebido como propriedade", () => {
    render(<Rodape mensagem="Vera roubou pão na casa de Joana" />);

    const mensagem = screen.getByText("Vera roubou pão na casa de Joana");

    expect(mensagem).toBeInTheDocument();
  });
});
