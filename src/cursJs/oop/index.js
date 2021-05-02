import React from 'react';


class Matrix{
    constructor(elem, m, n){
      this.elem = elem;
      this.ceils = [];
      this.m = m;
      this.n = n;
    }
    create(){//создает матрицу
        for(let i=0;i<this.m;i++){
           let div = document.createElement('div');
           div.style.width = "20px";
           div.style.height = "20px";
           div.style.boxSizing = "border-box";
           div.style.borderRight = "1px solid black";
           div.style.borderBottom = "1px solid black";
           div.style.float = "left";
           this.elem.style.width ="400px";
           this.elem.style.borderTop ="1px solid black";
           this.elem.style.borderLeft ="1px solid black";
           this.elem.style.margin ="20px";
           this.elem.style.overflow ="hidden";
           this.elem.appendChild(div);
           this.ceils[i]='';
        }
    }
    getCell(x,y){//получаем номер ячейки где фрукт
        let num = this.__calcNum(x,y)
        return this.ceils[num]
    }
    setCell(x,y,val){//высчитывает номер и устанавливает туда класс-цвет
        let num = this.__calcNum(x,y)
        this.ceils[num] = val;//массив хранит номер ячейки
        this.elem.children[num].className = val;
    }
    __calcNum(x,y){//создать координаты фрукта рандомно
          return (y-1)*20+x-1
          //Math.floor(Math.random() * 400);
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

class Snake{
    constructor(matrix, x, y, coors){
      this.matrix = matrix;//для взаимодействия с матрицей
      //this.coords = coords;//координаты
      this.x = x;//координаты
      this.y = y;//координаты
      this.coors = coors;//координаты
    }
    show(){
        //по координатам ставит значение snake
       this.matrix.setCell(this.x,this.y,'snake')
    }
    move(){//по на правлению движения зажигает новый квадрат, стирает старый
        this.matrix.setCell(this.x,this.y,'');
        switch(this.coors){
            case 'right':
                this.x++
            break;
        }
        this.matrix.setCell(this.x, this.y, 'snake');
    }
}


let div = document.querySelector('.title')
let matrix = new Matrix(div, 400, 400);
let snake = new Snake(matrix, 5, 6,'right')



matrix.create();
matrix.setCell(3,5,'fruit');
snake.show();
setInterval(()=>snake.move(),1000)

