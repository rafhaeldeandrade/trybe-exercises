function hydrate(stringBebidas) {
  const reg = /\d+/g;
  const resultado = stringBebidas.match(reg);
  let total = 0;

  resultado.forEach((item) => { (total += parseInt(item, 10)); });

  return (total === 1) ? '1 copo de água' : `${total} copos de água`;
}

module.exports = { hydrate };
