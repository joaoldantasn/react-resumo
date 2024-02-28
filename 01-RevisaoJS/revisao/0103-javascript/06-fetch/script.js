const requisicao = fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    document.querySelector('#app').innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
  });

const data = {
  id: 'jlsss',
  nome: 'OImortal',
  email: 'jloimortal@gmail.com',
  senha: '123456',
  cep: '123456',
  rua: 'ali perto',
  numero: '222',
  bairro: 'dnfow',
  cidade: 'cnblr',
  estado: 'ncfown',
};
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
