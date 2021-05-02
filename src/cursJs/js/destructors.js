/*
Деструктурирование объектов и массивов
Деструктурирование — создание новых переменных путём извлечения данных из объектов и массивов. Например, извлечение параметров this.props из React-проектов.

Объект. Рассмотрим для всех примеров объект:
*/
const person = {
  firstName: "Nick",
  lastName: "Anderson",
  age: 35,
  sex: "M"
}
/*Без деструктурирования:*/

const first = person.firstName;
const age = person.age;
const city = person.city || "Paris";
/*Применяя деструктурирование:*/

const { firstName: first, age, city = "Paris" } = person; // так выглядит деструктурирование одной строкой

console.log(age) // 35 — создана переменная age, которая равна person.age
console.log(first) // "Nick" — создана переменная first, значение которой соответствует person.firstName
console.log(firstName) // ReferenceError — person.firstName существует, но новая переменная называется first
console.log(city) // Paris — создана переменная city, а поскольку person.city не определена, city равна заданному по умолчанию значению "Paris".
/*
Параметры функции. Деструктурирование применяется для извлечения параметров объектов в функции.
Без деструктурирования:
*/
function joinFirstLastName(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  return firstName + '-' + lastName;
}

joinFirstLastName(person); // Nick-Anderson
/*Извлекая параметр person, получим компактную функцию:*/

function joinFirstLastName({ firstName, lastName }) { // Мы создаём переменные firstName и lastName, деструктурируя параметр person
  return firstName + '-' + lastName;
}

joinFirstLastName(person); // Nick-Anderson
/*Со стрелочными функциями код становится существенно меньше:*/

const joinFirstLastName = ({ firstName, lastName }) => firstName + '-' + lastName;

joinFirstLastName(person); // Nick-Anderson
/*Массив. Рассмотрим массив:
const myArray = ["a", "b", "c"];
Без деструктурирования он выглядит так:*/

const x = myArray[0];
const y = myArray[1];
/*С деструктурированием:*/

const [x, y] = myArray; // вот оно!

console.log(x) // "a"
console.log(y) // "b"