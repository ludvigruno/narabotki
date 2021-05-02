//Шаблоны вызова функций
//После вызова функция получает два доп. парметра это this и псевдомасив arguments
/*
Всего четыри шаблона вызова функции:
1. Функции
2. Вызов метода
3. Вызов метода apply
4. Вызов constructor
*/
/*1)*/

//function(){} - анонимная функция


//this в данном случае вызывает глобальный обьект а не это функцию исправить это посредством ооп
let func = function(a,b){
    console.log(this,"let func = function - window")
    return a+b;
};
console.log(func(2,2),"window")


/*2) шаблон вызова метода*/
//методы бывают открытые и закрытые - и те что получают контекст от this метода func-называются public, а те что не получают данный контекст -privat, метод func получсет контекст this обьекта myapp
//Публичный
let myapp ={
    func: function(a, b){
        console.log(this, "шаблон вызова метода")
         return a+b;
    },
    get(){
        console.log(this, "шаблон вызова метода")
    }
}
console.log(myapp.func(2,3));
console.log(myapp.get());
//Приватный
//Базовый патерн модуля в ооп на js (function(){})(); самовызывающаяся функция
let myapp2 = (function(){
    var funcPrivate = function(){
        //этому методу не доступен контектс обьекта myapp2 это шаблон вызова функции
        console.log(this,"let myapp2");
        return 'private';
    };
    //это шаблон вызова метода
    return {
        func: function(a, b){
            console.log(this);
            var that = this;//решение проблеммы того то helperFunc идет прямиком к глобальному обьекту window, нам надо просто закешировать в переменную that =this
             var helperFunc = function(a, b){
                console.log(this,'helperFunc')
                console.log(that,'helperFunc that')
                 //this.multiplay = a*b//undefined
                 that.multiplay = a*b
            };
            helperFunc(a,b);
             return a + b;
        },
        //вызывать приватный можно только если его вызвать через публичны
        funcPublic: funcPrivate
    }
})();
console.log(myapp2.func(2,4));
console.log(myapp2.funcPublic());


/*3 Вызов aplly*/
let arr=[3,9]
let add = function(a,b){
  console.log(this.func(2,4));
  return a+b
}
//var sum = add.apply(null,arr);//1.контекст и если я хочу оставить глобальный контекст то оставляю null 2. массив аргументов
var sum2 = add.apply(myapp2, arr);
console.log(sum2);

//4. Вызов конструктора, функция конструктор для создания однотипных обьектов
//отличия от обычныъ функции: new, принято с большой буквы,можно вызывать со скобками а можно без Func() Func

//функция конструктор
 let Man =function(name){
    this.name = name;
    this.canSpeak = true;
    
    //здесь все обьявленнные переменны будут приватные
    let priv = '39';

    //return {name: "Anna"}//вернет это а не то что сверху
    this.sayHello = function(){
        return "Привет меня зовут "+this.name+" мне "+priv+" лет"
    }
 }

//всего два подхода есть для присваивания метода конструктору
//1 через сам конструктор - для маленьких приложений пойдет, рабоатает медленнее так как обьекту каждый раз присваивается новая функция, и это затратнее по ресурсам.
//2 через prototype - лучшее решение для тяжелых приложений,такой способ работает быстрее потому что это один раз присваивается прототипу 
//отличие в производительности и к возможности получть доступ к приватным переменным
Man.prototype.sayHi = function(){
    return this.name+" Привет из прототайп"
}

 var vania = new Man("Ваня");
 var ludvig = new Man("Людвиг");

 console.log(vania)
 console.log(vania.name)
 console.log(vania.canSpeak)
 console.log(ludvig.sayHello(),"-метод сделанный через конструкто")
 console.log(ludvig.sayHi()," -метод сделанный из prototype")
 console.log(ludvig.priv,"-эту переменную не получить")


 //более правильная практика делать конструктор методом обьекта, так как в пространстве имен это правильно что бы не трогать и не захломлять глобальное пространство
 let newObj ={
    main: Man =function(name){
        this.name = name;
        this.canSpeak = true;
     }
 }
 let neo = new newObj.main("Нео")
 console.log(neo.name)

 //как узнать что созданые обьекты являются наследниками какого то определенного конструктора - два способа
 //1 
 console.log(neo instanceof Man)//если true то значит принадлежит Manу
 console.log(neo instanceof newObj.main)
 //2 потайной способ
 console.log(neo.constructor)
 console.log(ludvig.constructor)



 /* ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ */
 /*
 Это базовое понятие прадигмы ООП, прототипное наследование для расширения функционала и для выноса базового функционала в какой то отдельный обьепкт который должен использоваться из раза в раз и нет смысла писать его заного и самый популярный вид наследования классовый-класический, это когда в этой сущности в которой хранятся расщиреный функционал или общий базовый функционал, вступает класс, и все от него наследуется новые обьеты, они и наследуют эти методы и свойства классов которые были созданы в начале.
 Основной способ наследования в джаваскрипт это прототипное наследование.
 */
 // Прототип это обьект от которго другие обьекты наследуют его свойства и так же у каждого обьекта есть свой прототип, прототип используется как резервное хранилище свойств и только для чтения, если у обьекта нет свойств то они ищутся в прототипе а если нет в прототипе то ищутся в прототипе прототипа, цепочка свойств которая образуется в поиске называется цепочкой прототипов, и она идет до конца и устандартного обьекта js прототипа уже нет, в таком случае выдаца null и конец цепочки прототипов и это единственное исклчение
 //наследование реализуется через скрытую ссылку свойства __proto__

 let obj ={name:"Стол"}
 //obj.prototype= window
 console.log(obj.prototype)

 let objNew ={
     name:"Сундук",
     test: function(){
         console.log("test")
     }
    }

let Foo = function(){
    this.name = "фуу";
    //это происходит автоматом, при создании обьекта с помощи функции конструктора и опретаора new прототип этотго обьекта становится равным свойству прототайп этой функции, тоесть прототипом это обьекта назначается свойство прттотайп функции конструктора его создавшего.
    //this.__propto__= Foo.prototype
}

var boo = new Foo();

Foo.prototype = objNew;//-все потомки Foo будут иметь прототип от objNew
//это происходит под капотом new Foo().__proto__ = objNew


var boo2 = new Foo();

console.log(boo2);
//console.log(boo);
//console.log(boo.__proto__ == Foo.prototype);


let animal ={
    canRun: true
}
let Wolf = function(){
    this.name="Волк"
}
let GreyWolf =function(){
    this.color="Серый"
}
let BlackWolf =function(){
    this.color="Черный";
}
let Chiken =function(){
    this.name="Курица",
    this.haveWings=true
}
Wolf.prototype = animal;
Chiken.prototype = animal;
Chiken.prototype.Kukareku = function(){//Добавление метода
    console.log("Кукареку!","Оно будет у всех");
};

let wolfy = new Wolf;//волчица мать
let chiken = new Chiken;
chiken.test = function(){
    console.log('test')
}
//delete chiken.name;
chiken.canRun =false;
//delete chiken.canRun;


//Переопределил прототип
Chiken.prototype ={
    sibling: 'Индюк'
}
console.log(chiken,"Просто курица")

let chikenSib = new Chiken();

console.log(chikenSib,"родственник Индюк")

GreyWolf.prototype = wolfy;
BlackWolf.prototype = wolfy;

let greyWolf= new GreyWolf;//дети
let blackWolf= new BlackWolf;//дети

console.log(wolfy);
console.log(greyWolf);
console.log(blackWolf);
console.log(chiken);
console.log(chiken.Kukareku());

let testProto = Object.getPrototypeOf(blackWolf)//достанька нам друг прототип,возвращает результата ссылки __proto__
//не работает в ие 8 и ниже
//Это быстрое получение свойства
console.log(testProto)
////testProto.name="Пес"
console.log(testProto.name)

// свойство которое передаю, является ли оно именно этого обьекта лично его-true  или передается по цепочке свойств flase, допустим когда пробегаюсь циклом по обьекту
console.log(GreyWolf.hasOwnProperty('color'))
console.log(greyWolf.hasOwnProperty('color'))

for(let key in greyWolf){
    console.log(key + " = " + greyWolf[key])//вывел со войствами прототипов, а его свойство только color
    if(!greyWolf.hasOwnProperty[key]) continue;//если это не его личное свойство, топропусти
    console.log(key + " = " + greyWolf[key],"Личное свойство обьекта")
}


//свойство конструктор
let TestFunc =function(){
    this.testProp = "test";
}

/*
//так делать нельзя
let objj ={
    constructor: "подменненый конструктор"
};
TestFunc.prototype = objj
*/

console.log(TestFunc.prototype)
console.log(TestFunc.prototype.constructor === TestFunc)//Свойство constructor ссылается на саму функцию которая создала обьект свойством которого она является. Доверять этому свойству нельзя-оно карявое.


// новая возможность которая появилась в этноскрипт 5 Object.create(); кроме ие 8 и ниже
let cat ={canRun:true}
let dog = Object.create(cat);
console.log(dog.canRun,"Object.create")

//сделать аналаго Object.create()(дуглас кротфарт гудпарс) что бы работал во всех браузерах и даже в ие 6 
function inherit(proto){
    function F(){}
    F.prototype = proto;
    return new F;
}
let dog2 =inherit(cat)
console.log(dog2.canRun,"Object.create аналог который работает везде")


var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            //console.log("inner func:  this.foo = " + this.foo);//undefined
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();