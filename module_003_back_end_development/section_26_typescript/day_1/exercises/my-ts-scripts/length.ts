import readlineSync from "readline-sync";

const unity = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

export function convert(valor: number, baseUnity: string, convertTo: string) {
  if (!unity.includes(baseUnity) || !unity.includes(convertTo)) {
    throw new Error("Unidade de base ou a ser convertida não existe");
  }

  let exponent: number;
  if (unity.indexOf(baseUnity) > unity.indexOf(convertTo)) {
    exponent = unity.indexOf(baseUnity) + 1 - (unity.indexOf(convertTo) + 1);
  } else {
    exponent = -(unity.indexOf(convertTo) + 1 - (unity.indexOf(baseUnity) + 1));
  }
  return `${valor * 10 ** exponent}${convertTo}`;
}

export function exec() {
  const valor = readlineSync.questionInt(
    "Digite o valor que você deseja converter: "
  );
  const baseUnity = readlineSync.question("Digite a unidade base: ");
  const convertTo = readlineSync.question(
    "Digite a unidade para qual você deseja converter: "
  );
  console.log(
    `${valor}${convertTo} é igual a ${convert(valor, baseUnity, convertTo)}`
  );
}

exec();
