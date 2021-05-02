import React from 'react'
import {AlertContext} from '../context/alert/alertContext'
export const Form=()=> {
    const [value, setValue] = React.useState('')
    const alert = React.useContext(AlertContext)

   const submitHandler=event=>{
     event.preventDefault()
     if(value.trim()){
        alert.show('Заметка была создана', 'green');
        setValue('')
     }else{
        alert.show('Ввведите текст', 'red')
     }
   
   }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                type="text" 
                value={value}
                placeholder="Введите название заметки"
                onChange={e=>setValue(e.target.value)}
                />
            </form>
        </div>
    )
}
