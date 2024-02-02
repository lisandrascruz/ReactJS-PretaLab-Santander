// A empresa Limão com Mel tem um quadro de 200 pessoas desenvolvedoras
// e ela decidiu dar aumento a todas seguindo os seguintes
// critérios: dev jr ganha 20% de aumento,
// dev pleno ganha 12% de aumento e o dev senior ganha 5% de aumento.

export const concederAumento = (cargo, salario) => {
  let percentualAumento = 0;

  if (cargo === "dev junior") {
    percentualAumento = 0.2;
  } else if (cargo === "dev pleno" || cargo === "designer") {
    percentualAumento = 0.12;
  } else if (cargo === "dev senior") {
    percentualAumento = 0.05;
  }

  const valorAumento = salario * percentualAumento;
  const salarioAtualizado = salario + valorAumento;

  return salarioAtualizado;
};
