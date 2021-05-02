//В js все рабоатет в контексте какого либо обьекта, потому что в js все есть обьекты
//es6
"use strict"

import { reduce } from "underscore";

//let var const
const str ="str";//нельзя изменить
const obj = {str:"str"};//можно изменить
for(var i=0;i<5;i++){var v= 1}
for(let b=0;b<5;b++){}
console.log(i,"var")
console.log(v, "var")
console.log(typeof b, "let")

//Параметр по умолчанию
function def(name="Я"){
   console.log(name, ' - Параметр по умолчанию')
}
def();
def("Ludvig");

//rest и новое of(значение), раньше был только in
function rest(name, ...rest){
    console.log(rest[1].reduce((a,b)=>a+b))
    console.log(name,rest," - rest")
    console.log(arguments, ' - Аргумент');

    //извлекаю массив отсеивая другие строки
    let m2;
    for(let m of rest){
        Array.isArray(m)?m2=m:false
    }
    console.log(m2," for in")
 }
 rest("Ludvig","Runo", [1,4,3]);

//spread
function spread(a,b){
    console.log(a,b," - rest")
    console.log(arguments, ' - Аргумент')
 }
 let sprArr = [1,2,3,4]
 spread(...sprArr);


 // `` - апострафы, обратные кавычки
console.log(`${5}`,"- ``")


//Стрелочные функции- ее суть стрелочной функции не в стрелке, а в том что бы ссылаться контекст родительской(функция которая выше) функции, на то место где она написана, и если в том месте нет this то стрелочной функции некуда ссылаться
function myTimer(t) {
    this.time =t;
    this.tick = function() {
        this.time++;
        console.log(this.time)
    }
    this.run = function() {
    let that = this;
    setInterval(function(){that.tick()},5000)//контекст this будет ссылаться на window, но ES6 предложил использовать стрелочную функцию что бы ни делать костыль let that = this; стрелочная функция сохраняет контекст того места в котором она вызвана, там где он написан
    setInterval(()=>this.tick(),5000)
    }
}
let t = new myTimer(0);
//t.run()

//Class
class MyTimerClass{
    constructor(t=0){
      this.time = t;
    }
    tick() {
        this.time++;
    }
    run() {
    setInterval(()=>this.tick(),5000)
    }
}
class ConsoleTimer extends MyTimerClass{
    tick() {
        super.tick();//super вызываеь родительский метод, выполнить все что есть в родительском классе, и после выполнить то что нижу, а php такое же слово parent
        console.log(this.time)
    }
}

let show = new ConsoleTimer();
//show.run();