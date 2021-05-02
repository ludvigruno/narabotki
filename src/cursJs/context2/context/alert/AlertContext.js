import React from 'react';
import {SHOW_ALERT, HIDE_ALERT} from '../types';
//useReducer замена useState только позволяет работать с редюсером
const reducer =(state, action)=>{
    switch(action.type){
         case SHOW_ALERT:return {...state, visible:true, text:action.text}
         case HIDE_ALERT:return {...state, visible:false}
         default: return state
    }
}
const AlertContext = React.createContext();

export const useAlert =()=>{
   return React.useContext(AlertContext);
}

export const AlertProvider =({children})=>{
    const [state, dispatch] = React.useReducer(reducer,{visible:false,text:""});
    const show =text=>dispatch({type:'SHOW_ALERT',text:text })//передаю в редюсер название экшена
    const hide =()=>dispatch({type:'HIDE_ALERT', })//передаю в редюсер название экшена
    
    return  (
    <AlertContext.Provider value={{
        visible:state.visible,text:state.text, show,hide
        }}>
        {children}
    </AlertContext.Provider>
    )
}
//useReducer принимает первое функцию которая что то делает, вторым измначальный стейт, возращает новый стейт и функцию в которую могу передать парметры для изменений, dispatch помогаеь взаимодействовать с реддюсером