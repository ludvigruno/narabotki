/*Классы
JavaScript — прототип-ориентированный язык программирования. Классы ввели как синтаксический сахар для прототип-ориентированного наследования в ES6. Слово «класс» смутит вас, если вы знакомы с классами в других языках программирования. Попробуйте посмотреть иначе: прочитайте о прототипах и их поведении в JavaScript. До ES6 синтаксис прототипов выглядел следующим образом:
*/
var Person = function(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.stringSentence = function() {
  return "Привет, я " + this.name + " и мне " + this.age;
}
/*С синтаксисом классов в ES6:*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  stringSentence() {
    return `Привет, я ${this.name} и мне ${this.age}`;
  }
}

const myPerson = new Person("Manu", 23);
console.log(myPerson.age) // 23
console.log(myPerson.stringSentence()) // Привет, я Ману и мне 23