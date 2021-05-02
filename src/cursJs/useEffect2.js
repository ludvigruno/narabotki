import React, {useState, useEffect} from 'react';
/*
Нужен для того бы дать понять что компонент что то сделал, либо был добавлен, либо обновился, либо был удален- liveSacelMethod componentDidMount, componentDidUpdate, componentWillUnmount
*/
//тоже самое функциональный компонент с useEffect
//получает анонимную функцию которая вызывает что либо, когда что то произойдет, что бы обьяснить useEffecte что было какое то событие, то надо пердать зависимость и от этих зависимостей он решает что и как делать,если ни чего не передавать то он будет реагировать на все события, а если []-пустой массив говорит что был didMount и что ни за какими переменными следить не надо, с [var,var,var..]- с переменной или переменными, то он и did моунт, что бы вызвать willUnvount надо что useEffect вернул новую анонимную функцию


const List =()=>{
    const [numbers, setNumbers] = useState([1,55,6])

    const addNumber =()=>{
        const randNumber = Math.floor(Math.random() * 10);
        const newArr = [...numbers,randNumber]
        setNumbers(newArr)
    }
    useEffect(()=>{
        //console.log('Любое событие')
    })
    useEffect(()=>{
        console.log('Компонент обновился')
    },[numbers])

    useEffect(()=>{
        console.log('Компонент встроился в страницу')
        return ()=>{
            console.log("Компонент будет удален")
        }
    },[])
    return (
        <React.Fragment>
            <button onClick={addNumber}>Клик</button>
            <ul>
                {
                    numbers.map((num,key)=>(
                        <li key={key}>{num}</li>
                    ))
                }
            </ul>
        </React.Fragment>
    )
    
}


/////////////////
//тоже самое классовый компонент
// class List extends React.Component{
//     constructor(props){
//         super(props);
//         //внутри моего компонента есть состояние
//         this.state={
//           numbers: [1,2,3] //это новое свойство компонента(props)
//         }
//         this.addNumber =this.addNumber.bind(this)
//     }
//     addNumber(){
//         const randNumber = Math.floor(Math.random() * 10);
//         this.setState({numbers: [...this.state.numbers, randNumber]})
//     }
//     componentDidMount(){
//         console.log("Компонент встроился в страницу")
//     }
//     componentDidUpdate(prevProps, prevState){
//         console.log("Компонент обновился",prevProps, prevState, this.props, this.state)
//         this.state.numbers.length != prevState.numbers.length?console.log('Список чисел обновился'):false
//     }
//     componentWillUnmount(){
//         //на пример отправить запрос на сервер перед тем как компонент удалился
//         console.log("Компонент будет удален")
//     }
//     render(){
       
//         return(
//             <React.Fragment>
//                 <button onClick={this.addNumber}>Клик</button>
//               <ul>
//                   {
//                     this.state.numbers.map((num,key)=>(
//                         <li key={key}>{num}</li>
//                     ))
//                     }
//             </ul>
//             </React.Fragment>
//         )
//     }
// }


//////////////////////////
//Тоже самое только функцилнальный компонент
// const List =()=>{
//     const [numbers, setNumbers] = useState([1,55,6])

//     const addNumber =()=>{
//         const randNumber = Math.floor(Math.random() * 10);
//         const newArr = [...numbers,randNumber]
//         setNumbers(newArr)
//     }
//     return (
//         <React.Fragment>
//             <button onClick={addNumber}>Клик</button>
//             <ul>
//                 {
//                     numbers.map((num,key)=>(
//                         <li key={key}>{num}</li>
//                     ))
//                 }
//             </ul>
//         </React.Fragment>
//     )
    
// }

/////////////
/* Только удаление компонента */
const IsHiden=()=>{
    const[visible, setVisibli] = useState(true);
    const toggleVisibles =()=>{
        //первый аргумент это сам visible
        setVisibli(visible=>!visible);
    }
    return <div>
        {visible && <List/>}
          <button onClick={toggleVisibles}>Показать/скрыть</button>
        </div>
}
export default IsHiden;