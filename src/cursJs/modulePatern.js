/*Патерн модуль */

//Данная реализация плоха тем что кто угодно может изменить свойство или метод данного обьета
let module = {
    counter: 0,
    incrementCounter:function(){
        return ++this.counter;
    },
    restCounter:function(){
        return this.counter=0;
    }
}
console.log(module.counter)
console.log(module.incrementCounter())
console.log(module.restCounter())


//теперь нет прямого доступа к переменной свойства counter
let modulCorrect = (function(Json){
    let counter =0;//приватная, нет доступа из вне, но методы могут иметь доступ к ней
    console.log(Json,"входящие параметры");
    //console.log(arguments)

    //экспорт модуля
    let module ={};
    module.showName=function(name){
        return name;
    }
    module.incrementCounter=function(){
        return ++counter;
    }
    module.restCounter=function(){
        return counter=0;
    }
    //module.public=counter
    return module;
    
}(JSON/*тут могу передать любые параметры  Jquery как импорт*/));

console.log(modulCorrect.showName("Ludvig"))
console.log(modulCorrect)



