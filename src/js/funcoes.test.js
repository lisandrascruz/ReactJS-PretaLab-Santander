import { test } from "vitest";
import { concederAumento } from "./funcoes";

describe("concederAumento", () => {
  it("deve calcular corretamente o aumento para dev junior", () => {
    const salarioAtualizado = concederAumento("dev junior", 1000);
    expect(salarioAtualizado).toBe(1200);
  });

  it("deve calcular corretamente o aumento para dev pleno", () => {
    const salarioAtualizado = concederAumento("dev pleno", 1000);
    expect(salarioAtualizado).toBe(1120);
  });

  it("deve calcular corretamente o aumento para dev senior", () => {
    const salarioAtualizado = concederAumento("dev senior", 1000);
    expect(salarioAtualizado).toBe(1050);
  });

  it("deve retornar o mesmo salário para cargos não reconhecidos", () => {
    const salarioAtualizado = concederAumento("gerente", 1000);
    expect(salarioAtualizado).toBe(1000);
  });
});
