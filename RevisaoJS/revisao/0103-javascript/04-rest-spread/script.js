// ... => rest
//function showList(empresa, ...clientes) {
// console.log(empresa);
//console.log(clientes);
//}

//showList('origamid', 'joão', 'maria');

// ao contrário do rest que junta em uma array
// o spread vai ser usado de maneira similar porém para juntar

const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

console.log(Math.max(...numeros));

const items = document.querySelectorAll('li');

//items.forEach((item) => {
//console.log(item);
//});
[...items].map((item) => console.log(item));

console.log(items);
