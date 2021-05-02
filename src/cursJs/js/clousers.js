import React, { useState, useEffect } from 'react';

/* Замыкания  */
var answer = 42;//глоб.поле видимости window
var getAnswer = function(){
    let problem = 5//проблемма в том что каждый раз создается новая переменная, это не эфективно-эту проблемму можно решить замыканием
    return answer;
}
getAnswer();

var callback = (function(){
    var answ = "callback";
    return function inner(){
       return answ//мы обращаемся к answ тут, в тот момент когда answ уже не существует, так как переменная была в родительской функции которая уже завершила свою работу так как выполнила строчку return, тем неменее я имею доступ к тому что в ней находилось в момент запуска- это и есть ЗАМЫКАНИЕ(это функция которая имеет доступ к свободным переменным кторые были в момент вызова доступны ей)
    }
}())

callback();

function greeting(name){
    let text = "Hello "+name
    let greet = function(){
        console.log(text)
    }
    return greet;
}
let a = greeting("Lud");
a();



//Напиши функцию sum которая умеет складывать числа
//функция естесвтенно должна запоминать предидущее
//это решается замыканием
//sum(1)//1
//sum(1)(2)(3)//1,3,6



function sum(num){//эта часть вызывается один раз
    let res =num;
    console.log(num)
 return function func(){//Эта часть вызывается уже несколько раз столько сколько скобок sum(1)(2)(3); и возращает сам себя
     const arg = arguments;
     //console.log(res,arg[0]);
       res=res+arg[0]
       console.log(res);
       if(res < 7){
        return func;
       }
 }
}

sum(1);
sum(1)(2)(3);