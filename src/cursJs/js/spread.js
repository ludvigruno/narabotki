/*Оператор spread(…)
Его добавили в обновлении ES2015, чтобы элементы итерации (например массива) можно было использовать в качестве нескольких элементов в коде.

Объектные литералы.
Возьмём два массива:
*/
const arr1 = ["a", "b", "c"];
const arr2 = [arr1, "d", "e", "f"]; // [["a", "b", "c"], "d", "e", "f"]
/*В arr2 первый аргумент — массив, поскольку читает содержимое arr1. Но нам нужно сделать arr2 массивом, состоящим из последовательности букв. Для этого используем spread и получим необходимый результат:
*/
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]
/*
Оставшиеся параметры функции. С их помощью мы можем создать массив с неучтёнными параметрами функции. Объект arguments относится к функциям, равным массиву переданных функции аргументов.
*/
function myFunc() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

myFunc("Nick", "Anderson", 10, 12, 6);
// "Nick"
// "Anderson"
// 10
// 12
// 6
/*
Давайте предположим, что нам нужно добавить студента с его оценками и посчитать средний балл. Не лучше ли сделать два параметра двумя разными значениями, а затем собрать массив из полученных данных для итерации? В этом нам и поможет оставшийся параметр.
*/
function createStudent(firstName, lastName, ...grades) {
  // firstName = "Nick"
  // lastName = "Anderson"
  // [10, 12, 6]: "..." собирает оставшиеся параметры и создаёт содержащее их значение массива grades

  const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length; // высчитывает средний балл из всех

  return {
    firstName: firstName,
    lastName: lastName,
    grades: grades,
    avgGrade: avgGrade
  }
}

const student = createStudent("Nick", "Anderson", 10, 12, 6);
console.log(student);
// {
//   firstName: "Nick",
//   lastName: "Anderson",
//   grades: [10, 12, 6],
//   avgGrade: 9,33
// }
/*Расширение свойств объекта.*/
const myObj = { x: 1, y: 2, a: 3, b: 4 };
const { x, y, ...z } = myObj; // деструктурируем объект
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// z — оставшаяся часть деструктурированного объекта myObj после вычитания свойств x и y

const n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

// свойства объекта z распространяются на n