/*
ООП
Класс - чертеж обьекта.
Обьект - экземпляр класса, пример класса.

Наследование -  нужно что бы не писать повторяющийся код, это копирование от родительского класса, что бы не дублировать код, что бы разносить код на общие вещи уникальные вещи и формировали иерархию, prototype, hasOwnPrototype, in, __proto__, свойства и методы родительских обьектов.
Во всех языках - наследование от класса к классу.
В js это от обьетка к обькту.

a1={
  age:
  aet:f
  run:f
}
a2={
    getVois:f
}
a2.prototype.a1;
a2.age; есть ли у текущего обьекта нет, то идем к родительскому

Инкапсуляция - privat public - ее практически нет
Полиформизм - нужен что бы уникализировать классы наследники под их задачи

*/
//console.log([].__proto__);
//console.log({}.__proto__);
//console.log("".__proto__);


//Начало введение в классы
function Animal(name) {
    this.name=name;
    this.weight =1;
    this.eat = function(){
        this.weight++;
    }
    this.log=function() {
        console.log(this.name + " " + this.weight)
    }
}
let a1 = new Animal('Bobik');
let a2 = new Animal('Makak');
a1.log();
a2.eat();
a2.log();
//Теперь тоже самое только на прототипах

function AnimalP(name,x,y) {
    let a = 1; //локальная переменная в класс не попадает потому что она просто отрабаотает в этой функции
    //эта часть блока меняется, это конструктор класса
    this.name=name;
    this.x=x;
    this.y=y;
    this.weight =1;
}
    //эта не меняется
AnimalP.prototype.eat = function(){
        this.weight++;
    }
AnimalP.prototype.log=function() {
        console.log(this.name + " " + this.weight,this.x,this.y)
    }

/*
new Animal new Animal new Animal - то три раза в оперативку сохраняются три обьекта с одинаковыми праметрами, и если тут методы одинаковые, то свойства разные-имена и весь текущего животного. И по этотму лучше использовть прототипы - так как где то в памчяти есть классс а в новый Animal.prototype попадают только измененные ключи, и у него есть еще prototype, и это всего лишь ссылка на указанные методы- этот вариант более экономичный с точки зрения ресурсов, так каждый раз мы ни создаем новый обьект а создаем только ссылку на него на базовый элемент прототип.И этим js отличается от других языков прорамирования.
Каждый раз не дублируем инструкции, они у нас в единственном экземпляре.
*/

/////////////
//Прототипы еще интереснее когда у нас появляется наследование
//здесь что то не работает
Cat.prototype = new AnimalP();
function Cat(name,x,y){
    AnimalP.call(this, name, x,y);
    this.live = 9;
}

Dog.prototype = new AnimalP();
function Dog(name,x,y){
    AnimalP.call(this, name, x,y)
}

let a3 = new Dog('Bobik',5,4);
let a4 = new Cat('Mursik',2,6);
a3.log();
a4.eat();
a4.log();
console.log(a4)

//////////////////////////////////////
/* ES6  синтаксис изменился но смысл остался тотже как на верху, в es6 js берет на себя отправку прототипов куда надо */
class AnimalS {
    constructor(name,x,y){
        this.name=name;
        this.x=x;
        this.y=y;
        this.weight =1;
    }
    eat(){
        this.weight++;
    }
    log() {
        return `${this.name} ${this.weight} ${this.x} ${this.y}`
    }
}
class CatS extends AnimalS{
    constructor(name,x,y){
        super(name,x,y);//php parent - это и есть наследование
        this.weight=8;
        this.live=9;
    } 
    log(){
        return super.log()+ ' ' + this.live;
    }
    run(){
        this.weight--;
    }
    
}
let cat = new CatS("Кот",5,5);
cat.run();
console.log(cat)

class DogS extends AnimalS{
    eat(){
        //полиморфизм, переопредяляю методы коорые написаны в род.классе
        this.weight +=5;
    }
}
let dog = new DogS("Пес",2,2);
dog.eat();
console.log(dog)

//Полиморфизм - изменчивость классов-тоесть ребенок может переопределить родительский метод, а в более сложном варианте мы обращаемся к обьектам зная что у них есть какой то метод, и мы его вызываем

let animals =[];
animals.push(new CatS("Кот1",5,5),new CatS("Кот2",5,5),new DogS("Пес3",4,2));
for(let animal of animals){
    animal.eat();
    animal.log();
}


/////////////////////////////
//Инкапсуляция-сокрытие методов и полей, в новом стандарте ES6 нет ни одной нативной возможности сделать инкапсуляцию.

//в старом стандарте была возможность сделать кастыль для инкапсуляции:
function CatOld(){
    let privat = 0;//локальная перменная не видная для доступа из вне
    function getPrivat() {
        //здесь видна локальная переменная по принципу замыкания
    }
}//в новом стандарте сделать этого нельзя!Не возможно
//В новом стандарте все поля и методы доступны из вне, и есть конечно какие то кастыли но их делать не нужно, среди програмистов принято называеть поля или методы через двойную нижнюю подчеркивание __name но это ни делает его приватным
class AnimalIn {
    constructor(name){
     this.__name =name
    }
    __some(){

    }
}


////////////////////////////////////
//Новый вариант экспортирую класс, а дальше делаю функции которые видны локально, которые ни кто не может болше вызвать..
//это я показываю миру
export default class AnimalInEx{
    //только публичные поля и методы
    constructor(name){
        this.name = name
    }
    getVois(){
        some();
         console.log(this.name)
    }
}
//это то что я не показываю миру
function some(){
  
}
// после import в другой файл или require('./name.js)
//продолжение в zmeika.js
