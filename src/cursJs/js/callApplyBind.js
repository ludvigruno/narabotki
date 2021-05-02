/* Call and Apply, Bind*/

//function.call(контекст, праметры через запятую)-позави нам функцию в контексте такого то обькта
//function.apply(контекст, [парметры])-позави нам функцию в контексте такого то обькта
//тоесть у каждой функции может меняться this как угодно

let obj = {name:"Ludvig"};
let obj2 = {name:"Ludok"};
let obj3 = {name:"Lud"};


let exemple = function (){
    console.log(this.name,arguments.length)
}
exemple.call(obj,1,2,3,4)
exemple.apply(obj2,[1,2,3])
