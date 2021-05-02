/*
Ключевые слова extends и super
Ключевое слово extends используют для объявления классов или в выражениях класса для создания дочерних классов. Они получают свойства родительских классов, а также дают возможность добавить новые свойства и изменить заимствованные.

Ключевое слово super вызывает функции родителя объекта, включая его конструктор. Его следует использовать:
до ключевого слова this в конструкторе;
с вызовом super(arguments) при передаче аргументов конструктору класса;
как вызов дочернего класса super.X() для метода X родительского класса.*/
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  getHelloPhrase() {
    return `Привет, я — ${this.name}`;
  }
}

class Square extends Polygon {
  constructor(length) {
    // здесь вызван конструктор родительского класса со значением lengths
    // использованным для значений width и height класса Polygon 
    super(length, length);
    // в производных классах super() необходимо вызывать перед this
    // иначе будет выведено сообщение об ошибке
    this.name = 'Square';
    this.length = length;
  }

  getCustomHelloPhrase() {
    const polygonPhrase = super.getHelloPhrase(); // доступ к родительскому методу с синтаксисом super.X()
    return `${polygonPhrase} with a length of ${this.length}`;
  }

  get area() {
    return this.height * this.width;
  }
}

const mySquare = new Square(10);
console.log(mySquare.area) // 100
console.log(mySquare.getHelloPhrase()) // «Привет, я Square»: Square — наследник класса Polygon с доступом к его методам
console.log(mySquare.getCustomHelloPhrase()) // Привет, я Square с длиной 10
/*
Если бы мы попытались использовать this перед super() в классе Square, появилась бы ошибка ReferenceError:
*/
class Square extends Polygon {
  constructor(length) {
    this.height; // ReferenceError, ключевое слово super необходимо использовать раньше

    // здесь вызван конструктор родительского класса со значением lengths
    // использованным для значений width и height класса Polygon
    super(length, length);

    // в производных классах super() необходимо вызывать перед this
    // иначе будет выведено сообщение об ошибке
    this.name = 'Square';
  }
}