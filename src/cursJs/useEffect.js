import React, {useState, useEffect} from 'react';


//Первым параметром передается колбэк который будет выполнятся, а вторым парметром список зависимостей, на который будет откликатся useEffect
//эмуляция componentDidMount

export default ()=>{
    const [todos, setTodos] = useState([{value:""}]);
    const [todosAdd, addTodos] = useState([{value:""}]);
    const handlClick =()=> console.log('click');

    useEffect(()=>{
     const raw =localStorage.getItem('todosAdd') || '[{"value":""}]'
     addTodos(JSON.parse(raw));
     document.addEventListener('click',handlClick)
    },[])

    const addHandleTodos =(e,press)=>{
        if(press.key == 'Enter')
        addTodos([...todosAdd, e]);
        localStorage.setItem('todosAdd',JSON.stringify(todosAdd));
    }
    const newTodos =(e)=>setTodos([{value:e.target.value}])

   return (
   <div>
     <div onChange={newTodos}>
         <input type="text" name="name" value={todos.value} onKeyPress={(press)=>addHandleTodos(...todos, press)}/>
     </div>
     <div style={{display:"flex"}}>
     {
         todosAdd.map((i, key)=><div key={key}><p style={{background:"gray",color: 'wheat',padding: '3px', margin: '4px'}}>{i.value}</p></div>)
     }
     </div>
     
   </div>
   )
} 