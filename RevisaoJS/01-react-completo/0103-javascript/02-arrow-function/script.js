//Forma 1 de Criar uma função
//function upperName(name) {
//return name.toUpperCase();
//}

//Forma 2 de Criar uma função
//const upperName = function (name) {
//return name.toUpperCase();
//};

//Forma 3 de Criar uma função(Mais Utilizada)
//const upperName = (name) => {
//return name.toUpperCase();
//};

//const countLetters = (word) => word.length;

//console.log(countLetters('Júlia'));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', function (event) {
      event.target.classList.add(this.activeClass);
    });
  }
}

class Menu2 {
  constructor(menu2) {
    this.menuElement = document.querySelector(menu2);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', (event) => {
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu('.principal');
const menu2 = new Menu('.principal2');
menu.addActiveEvent();
console.log(menu);
