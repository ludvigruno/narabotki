import React from 'react';
//useCalback - не помогает избавится от лишних ререндеров, для этого используется React.memo


//App не теряй ссылки, что бы button не ререндырился а батон проверяй ссылки помощи React.memo и не ререндери ни в коем случае кнопки перключателя.
//В счетчике ререндырится без дополнительного ререндера кнопок.
const Button = React.memo(({onPlus, onMinus})=> {
    console.log("Buttons render");

    return(
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    )
})
//{()=>onPlus} - так пердаются функции а так ссылки:{onPlus} <Button onPlus={()=>onPlus()} onMinus={()=>onMinus()}  />, так лучше:   <Button onPlus={onPlus} onMinus={onMinus}  />
function App(){
    const[count, setCounter]=React.useState(0)
    console.log('App')
    //Если убрать useCallback то, так как count меняется из за этого функция пересоздается и соостветсвенно Button понимает что что то изменилось в пропсах и происходит ререндер, тут ссылка через каждый ререндер будет менятся, а так ссылка сохраняется и по этому рерндера не происходит.
    //я беру функцию и оборачиваю ее в юзКолбэк и говорю что ссылки на функции остаются не перетираются, и теперь батон понимает что перед тем как делать ререндр проверь пожалуйста измениться ли ссылка на (({onPlus, onMinus})=> если эти пропсы не изменились то ререндера просиходить не будет.
    const onPlus = React.useCallback(()=>{
        setCounter((count)=>count+1)
    },[])
    const onMinus = React.useCallback(()=>{
        setCounter((count)=>count-1)
    },[])
    return (
        <div style={{margin:"0 auto",width: 'max-content'}}>
           <h1>{count}</h1>
           <Button onPlus={onPlus} onMinus={onMinus}  />
           
        </div>
    )
}

export default App;

