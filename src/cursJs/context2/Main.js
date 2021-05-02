import React from 'react'
import {useAlert} from './context/alert/AlertContext'
export function Main(){
    const {show} = useAlert();
    return(
        <>
        <h1>Context</h1>
        <button onClick={()=>show("Этот текст из Main.js")}>Показать alert</button>
        </>
    )
}
