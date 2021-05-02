

let obj ={a:1,b:2}


function hasCycle(obj){
    
    
}
hasCycle(obj)



var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();



/*

cyclic task 
введем понятие- если в связном списке есть элемент, ссылающийся на NULL, цикла нет. 
Если находится элемент, ссылающийся на какой-либо из предыдущих или на самого себя, то цикл есть
архитектор отдал интерфейс:
interface LLI {LLI next();}
где next() возвращает следующий элемент
задача: написать функцию bool hasCycle(LLI lli)
которая принимает элемент связного списка и возвращает true если цикл в данном списке есть, и false если цикла нет
 */