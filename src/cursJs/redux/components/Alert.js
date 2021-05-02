import React from 'react'
import {AlertContext} from '../context/alert/alertContext';

export const Alert = () => {
    const {alert, hide} = React.useContext(AlertContext);
    console.log(alert,hide)
    if(!alert.visible){
        return null
    }
    
    return(
        <div style={{background:`${alert.type || 'red'}` }}>
            <strong>Внимание!</strong>
            <p>{alert.text}</p>
            <button onClick={hide}>удалить</button>
        </div>
    )
}
