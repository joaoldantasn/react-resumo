const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];
//Filter, junto com map e reduce retornam uma array nova, não modificam a array original
//filter recebe uma função de callback
const precosFiltro = precos.filter((preco) => {
  return preco.includes('R$');
});

const precosNumeros = precosFiltro.map((preco) => {
  return Number(preco.replace('R$', ''));
});

const total = precosNumeros.reduce(function (anterior, atual) {
  return anterior + atual;
}, 0);

console.log(precosFiltro);
console.log(precosNumeros);
console.log(total);
