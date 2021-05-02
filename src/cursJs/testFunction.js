require('@babel/polyfill');
import React from 'react';





const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];
const array2 = [2, 1, 3, 5];
var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
class Test extends React.Component{
    constructor(props){
        super(props);
        this.reversePrint=this.reversePrint.bind(this)
    }
    //Написать код функции 'findUnique', которая за один проход вернет все уникальные числа.
    findUnique (arr) {
        //slice() возвращает новый массив, содержащий копию части исходного массива
        var sort = arr.slice().sort(); 
        sort.map((item,key)=>{
            if(item==sort[key+1]){
                console.log(sort[key+1])
            }
        })
       //console.log(arr)
    }
   /* В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено, остальные встречаются ровно по одному разу.  N заранее неизвестно. Определить пропущенное число.*/
   findMissing(arr) {
       let sort = arr.slice().sort(); 
       for(let i=1;i<=sort[sort.length-1];i++){
            if(sort.indexOf(i) == -1){
                console.log(i)
           }
       }  
    }
    /*Напишите код функции reversePrint(), которая выведет значения переданного ей односвязного списка в обратном порядке (4, 3, 2, 1). Для вывода значений используйте функцию console.log().*/
    reversePrint(linkedList) {
        let arr=[];
        //console.log(Object.keys(linkedList))
        Object.keys(linkedList).map(item=>{
            arr.push(linkedList[item])
            //console.log(linkedList[item])
            if(typeof linkedList[item] == 'object'){
                linkedList[item]!=null?this.reversePrint(linkedList[item]):false
            }
        })
        console.log(arr[0])
        
    }
    render(){
        this.findUnique(array);
        this.findMissing(array2); 
        this.reversePrint(someList);
        return(
           <div>
              {
               (todos) => todos.length > 0 ? todos : <span>No todos =(</span>
              }
              {
                  
                  (todos) => console.log(todos)
              }
            </div>
        )
    }
}

export default Test;

