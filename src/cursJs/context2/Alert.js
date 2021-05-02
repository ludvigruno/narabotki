import React from 'react'
import {useAlert} from './context/alert/AlertContext';
//вместо Context.Consumer(в классовых) есть useContext - так я обращаюсь к глобальному контексту что бы получить состояние

export function Alert(){
    const alert = useAlert();
    if(!alert.visible) return null
    
    return(
        <div>
            <p style={{background:'red', padding:"10px", width:"300px", color:"white"}} onClick={alert.hide}>{alert.text}</p>
        </div>
    )
}
