import { describe, expect, it } from "vitest";
import { concederAumento } from "./funcoes";

// test("1 forma de crir teste", () => {
//   escrever o teste aqui
// });

describe("concederAumento", () => {
  it("deve calcular o aumento de um dev junior corretamente", () => {
    const salario = concederAumento("dev junior", 1000);
    expect(salario).toBe(1200);
  });

  it("deve calcular o aumento de um dev pleno corretamente", () => {
    const salario = concederAumento("dev pleno", 1000);
    expect(salario).toBe(1120);
  });

  it("deve calcular o aumento de um dev senior corretamente", () => {
    const salario = concederAumento("dev senior", 1000);
    expect(salario).toBe(1050);
  });

  it("deve calcular corretamente o aumento concedido a um funcionario que não seja dev ", () => {
    const salario = concederAumento("analista de banco de dados", 1000);
    expect(salario).toBe(1000);
  });

  it("deve calcular o aumento de 12% para todas as pessoas designers", () => {
    const salario = concederAumento("designer", 1000);
    expect(salario).toBe(1120);
  });
});
