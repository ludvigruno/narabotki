/*
Ключевое слово this
Поведение этого ключевого слова в JavaScript отличается от других языков и зависит от вызова функции.

function myFunc() {
  ...
}
*/
// после каждого выражения выводится аргумент this для функции myFunc

myFunc.call("myString", "hello") // myString — первый аргумент функции .call для this

// В нестрогом режиме
myFunc("hello") // глобальный объект window: myFunc() — это синтаксический сахар для myFunc.call(window, "hello")

// В строгом режиме
myFunc("hello") // объект не определён: myFunc() — это синтаксический сахар для myFunc.call(undefined, "hello")
