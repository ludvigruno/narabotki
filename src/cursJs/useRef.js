import React from 'react';
//useRef позволяет хранить ссылку на дом элемент и не терять ее если произойдет обновление компонента, usRef можно использовать что бы хранить число и какие либо актуальные данные компонента, вместо создания костылей. 
//При каждом рендерее функция заного пересоздается и все значения в ней


function App() {
    const [numbers, setNumbers] = React.useState([1,2,3,4,5,6,7]);
    const ulRef = React.useRef();//{current: undefined} отличие от {current: undefined} и useRef в том что useRef не будет каждый раз персоздавать обьект при персоздании функции App
    const timerRef = React.useRef();
    
    const addNumbers = ()=>{
        // const lastNumbers = numbers[numbers.length-1];
        // setNumbers([...numbers, lastNumbers+1]);
        setNumbers((prev)=>[...prev, prev[prev.length-1]+1]);
    }
    const handleScroll =()=>{
        console.log('Был скролл')
    }
    React.useEffect(()=>{
        //после добавления ref={} теперь в обьекте useRef {current: ul} вместо {current: undefined}
        //console.log(ulRef)
        ulRef.current.addEventListener('scroll',handleScroll)
    },[])
    const stopScroll =()=>{
        console.log(ulRef)
        ulRef.current.removeEventListener('scroll',handleScroll);
        //не работает потому что при каждом вызове функции App(компонента), функция handleScroll персоздается и теряется ссылка на handleScroll-при каждом обновлении App происходит персоздание ссылки и это не хорошо когда мы прикручиваем скролл а патом когда нибудь его удаляем, а это исправялется хуком useCallback
    }

    return(
        <div>
            <button onClick={stopScroll}>Не следить</button>
            <button onClick={addNumbers}>Добавить число</button>
            <div >
            <ul style={{overflowX:"auto", height: "100px", width:"200px",border:"1px solid black"}} ref={ulRef}>
                {
                    numbers.map((n, key)=>(
                            <li  key={n}>{n}</li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}

export default App;


// function App() {
//     const [numbers, setNumbers] = React.useState([1,2,3,4,5,6,7]);
//     const timerRef = React.useRef();
    
//     const addNumbers = ()=>{
//         setNumbers((prev)=>[...prev, prev[prev.length-1]+1]);
//     }
//     const start =()=>{
//         timerRef.current = setInterval(addNumbers, 1000);
//     }
//     const stop =()=>{
//         console.log(timerRef.current)
//         clearInterval(timerRef.current);
//     }
//     return(
//         <div>
//             <button onClick={start}>Старт</button>
//             <button onClick={stop}>Стоп</button>
//             <div >
//             <ul style={{overflowX:"auto", height: "100px", width:"200px",border:"1px solid black"}}>
//                 {
//                     numbers.map((n, key)=>(
//                             <li  key={n}>{n}</li>
//                     ))
//                 }
//             </ul>
//             </div>
//         </div>
//     )
// }

// export default App;

// //let ulElem; -- кастыль
// function App() {
//     let ulElem;//-- кастыль
//     const [numbers, setNumbers] = React.useState([1,2,3,4,5,6,7])
//     const addNumbers = ()=>{
//         const lastNumbers = numbers[numbers.length-1];
//         setNumbers([...numbers, lastNumbers+1]);
//     }
//     const handleScroll =()=>{
//         console.log('Был скролл')
//     }
//     React.useEffect(()=>{
//         ulElem = document.querySelector('ul');
//         //Это не правильно потому что я говорю что мол дай ul до того как произойдет рендер самой разметки, по этому приминяю useEffect
//         ulElem.addEventListener('scroll',handleScroll)
//     },[])
//         React.useEffect(()=>{
//         console.log(ulElem)
//         },[numbers])
//         const stopScroll =()=>{
//             //console.log(ulElem)
//             ulElem.removeEventListener('scroll',handleScroll);
//         }
//     return(
//         <div>
//             <button onClick={stopScroll}>Не следить</button>
//             <button onClick={addNumbers}>Добавить число</button>
//             <div >
//             <ul style={{overflowX:"auto", height: "100px", width:"200px",border:"1px solid black"}}>
//                 {
//                     numbers.map((n, key)=>(
//                             <li  key={n}>{n}</li>
//                     ))
//                 }
//             </ul>
//             </div>
//         </div>
//     )
// }

// export default App;