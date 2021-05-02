import React from 'react';
//useCallback-если я хочу сохранить ссылку на функцию и что бы функция не персоздавалась при ререндере.
//useCallback - будет следить нужно ли персоздавать функцию или нет, пустая зависимость говорит что наша функция при первом маунте создается, и больше не персоздается, не важно очистился ли стейт добавился или что то еще, пока я не скажу что в зависимотси что то изменилось.

//проблема в том что после ререндера функция App персоздается и все функции внутри тоже,и поэтому ссылка на функцию handleScroll меняется и в памяти браузера тоже менятеся ссылка на handleScroll и так как после добавления числа просиходит ререндер и первызов функции App вместе со всеми пеменными функциями внутри, и поэтому в памяти они уже имеют другой адресс..

function App() {
    const [numbers, setNumbers] = React.useState([1,2,3,4,5,6,7]);
    const ulRef = React.useRef();
    const numbersRef = React.useRef();
    
    numbersRef.current = numbers;//при каждом рендере в карент нужно добавлять массив numbers из стейта компонента, ссылка на актуальные данные массива в итоге будет хранится уже numbersRef.current
    //еще один вариант:
    // React.useEffect(()=>{
    //     numbersRef.current = numbers;
    // },[numbers])

    const addNumbers = ()=>{
        // const lastNumbers = numbers[numbers.length-1];
        // setNumbers([...numbers, lastNumbers+1]);
       setNumbers((prev)=>[...prev, prev[prev.length-1]+1]);
    }
    const handleScroll =React.useCallback(()=>{
        console.log('Был скролл',numbersRef.current)
        // console.log('Был скролл', 'прежнее состояние как было в начале: ', numbers, "новый подход: ")
        //здесь все будет оставаться что было создано на момент создания этой функции
        //можно добавить зависимость, что эта фуекция могла пересоздатся в зависимости от зависимости [numbers] изменения numbers, но функция handleScroll в addEventListener будет иметь предидущее еще состояние, не смотря на то что this функция персоздалась, и в итоге будут уже две разные ссылки и в эту функцию запишется numbers и предидущий и новый, в итоге работать ни чего не будет если передать зависимость.
    },[])
    const startScroll =()=>{
        ulRef.current.addEventListener('scroll',handleScroll)
    }
    const stopScroll =()=>{
        console.log(ulRef)
        ulRef.current.removeEventListener('scroll',handleScroll);
    }

    return(
        <div>
            <button onClick={startScroll}>Следить</button>
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