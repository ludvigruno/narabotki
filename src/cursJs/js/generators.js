/*
Генераторы
Ещё один способ записать функцию downToOne — использовать генератор. Эти функции могут приостанавливать выполнение, вернуть промежуточный результат, а затем продолжить выполнение в любой момент. Чтобы инстанцировать объект-генератор, необходимо объявить функцию function *. Перепишем функцию downToOne с использованием генератора:
*/
function * downToOne(n) {
  for (let i = n; i > 0; --i) {
    yield i;
  }
}

[...downToOne(5)] // [ 5, 4, 3, 2, 1 ]
/*
Генераторы возвращают итерируемые объекты. Функция next() выполняется до ключевого слова yield, которое возвращает значение во внешний код. Либо до функции yield *, которая передаёт её другой функции-генератору. При возврате результата return функция-генератор считается завершённой. Дальнейшие вызовы функции next() не вернут новых значений.
*/

// пример yield *
function * idMaker() {
  var index = 0;
  while (index < 2) {
    yield index;
    index = index + 1;
  }
}

var gen = idMaker();

gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // не определено
/*
Ключевое слово yield * активирует следующую функцию-генератор во время итерации:
*/

// пример yield *
function * genB(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function * genA(i) {
  yield i;
  yield* genB(i);
  yield i + 10;
}

var gen = genA(10);

gen.next().value; // 10
gen.next().value; // 11
gen.next().value; // 12
gen.next().value; // 13
gen.next().value; // 20
// пример возврата функции-генератора
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
gen.next(); // { значение: "Y", завершено: false }
gen.next(); // { значение: "R", завершено: true }
gen.next(); // { значение: не определено, завершено: true }