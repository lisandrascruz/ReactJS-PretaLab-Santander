export const concederAumento = (cargo, salario) => {
  let percentualAumento = 0;
  if (cargo === "dev junior") {
    percentualAumento = 0.2;
  } else if (cargo === "dev pleno") {
    percentualAumento = 0.12;
  } else if (cargo === "dev senior") {
    percentualAumento = 0.05;
  } else {
    percentualAumento = 0;
  }

  const aumento = salario * percentualAumento;
  const salarioAtualizado = salario + aumento;

  return salarioAtualizado;
};

console.log(concederAumento("dev senior", 3000));
