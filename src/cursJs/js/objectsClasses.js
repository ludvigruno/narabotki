let a ={
    b:4
}
a.toString()// a в данном случае будет обращатся к своему прототипу Object- результат будет [object Object] в строчке, прототипом у обькта будет null


class Foo{
    constructor(){
        this.id = "foo";
        this.print();
    }
    print(){
        console.log("fooO "+this.id)
    }
}
class Bar extends Foo{
    constructor(){
        super();//вызывает Foo конструктор
        this.id = "bar";//перопределяется Foo свойство id
        this.print();//вызывает парметры только этого обьекта (bar bar)
        this.id = "barR";
        super.print();
       
    }
    print(){
        console.log("bar "+this.id)
    }
}

let bar = new Bar();
bar;
//1.Вызывается Bar в контектсе Foo и this бара указывает на фуу так как контекстеще не указан у this в баре то = (bar foo)
//2.Вызывается this.print() в контексте Bar = (bar bar)
//3.Вызывается super.print(); контексте Foo где свойство id переопределено в bar и поэтому == (foo bar)

//Так как я extendю Foo и если я хочу вытащить из Foo print() то надо вызвать super().print, а если я вызываю print в Bar то он обращается thisом к Foo, 

