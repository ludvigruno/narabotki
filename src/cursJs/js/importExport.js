/*Инструкции импорта и экспорта
Экспорт функций/объектов из модулей ES6 и импорт значений из них.

Именованные импорт/экспорт используют для нескольких величин (ими могут быть лишь объекты первого класса):*/
// mathConstants.js
export const pi = 3.14;
export const exp = 2.7;
export const alpha = 0.35;

// -------------

// myFile.js
import { pi, exp } from './mathConstants.js'; // синтаксис именованного импорта схож с синтаксисом деструктурирования
console.log(pi) // 3.14
console.log(exp) // 2.7

// -------------

// mySecondFile.js
import * as constants from './mathConstants.js'; // подставляем экспортированные значения в переменную constants
console.log(constants.pi) // 3.14
console.log(constants.exp) // 2.7
/*Несмотря на внешнюю схожесть именных импортов с деструктурированием, синтаксис отличается. Они не поддерживают значения по умолчанию или вложенное деструктурирование. Кроме того, можно использовать дополнительное имя, но синтаксис отличается от используемого при деструктурировании:*/

import { foo as bar } from 'myFile.js'; // импортируем foo с новым именем переменной bar
/*Импорт/экспорт по умолчанию.
Для одного модуля доступен один экспорт по умолчанию. Экспорт может быть функцией, классом, объектом и т.д. Значение рассматривается как «основное», поскольку так его проще импортировать:*/

// coolNumber.js
const ultimateNumber = 42;
export default ultimateNumber;

// ------------

// myFile.js
import number from './coolNumber.js';
// экспорт по умолчанию, независимо от названия, подставляется как значение переменной number
console.log(number) // 42
/*Экспорт функции:*/

// sum.js
export default function sum(x, y) {
  return x + y;
}
// -------------

// myFile.js
import sum from './sum.js';
const result = sum(1, 2);
console.log(result) // 3