import Rodape from "./index";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("deve mostrar o texto recebido", () => {
    render(<Rodape mensagem="Pão na casa de João" />);

    const textoRenderizado = screen.getByText("Pão na casa de João");

    expect(textoRenderizado).toBeInTheDocument();
  });
});
