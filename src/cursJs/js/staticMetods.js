Статические методы
Ключевое слово static используется в классах для определения статичных методов. Статичные методы функции, принадлежащие объекту класса, но не доступные другим объектам того же класса.

class Repo {
  static getName() {
    return "Repo name is modern-js-cheatsheet"
  }
}

// нам не нужно создавать объект класса Repo
console.log(Repo.getName()) // "Repo name is modern-js-cheatsheet"

let r = new Repo();
console.log(r.getName()) // необработанная ошибка TypeError: r.getName не является функцией
Вызов статического метода из другого статического метода осуществляется с помощью ключевого слова this. Для нестатических методов этот подход не сработает:

class Repo {
  static getName() {
    return "Repo name is modern-js-cheatsheet"
  }

  static modifyName(){
    return this.getName() + '-added-this'
  }
}

console.log(Repo.modifyName()) // название Repo — modern-js-cheatsheet-added-this
Вызов статического метода из нестатического метода производится двумя способами:

с использованием названия класса. Мы используем имя класса и вызываем статичный метод как свойство, например ClassName.StaticMethodName:
class Repo {
  static getName() {
    return "Repo name is modern-js-cheatsheet"
  }

  useName(){
    return Repo.getName() + ' and it contains some really important stuff'
  }
}

// для использования статических методов нам нужно создать класс
let r = new Repo()
console.log(r.useName()) // название Repo — modern-js-cheatsheet и в нём содержатся важные данные
С помощью конструктора. Статические методы можно вызвать как свойства объектов конструктора:
class Repo {
  static getName() {
    return "Repo name is modern-js-cheatsheet"
  }

  useName(){
    // вызывает статический метод в качестве свойства конструктора
    return this.constructor.getName() + ' and it contains some really important stuff'
  }
}

// для использования нестатических методов нам нужно создать класс
let r = new Repo()
console.log(r.useName()) // название Repo — modern-js-cheatsheet и в нём содержатся важные данные