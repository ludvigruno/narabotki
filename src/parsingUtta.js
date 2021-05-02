require('@babel/polyfill');
import React from 'react';
import axios from 'axios';


class Parsing extends React.Component{
    constructor(props){
        super(props);
        this.send = this.send.bind(this);
    }
   send(){
    const fetchData = async ()=>{
        await axios({
           url: 'https://yandex.ru/',
         }).then((response) => {
           if(response.status == 200){
             console.log(true)
           }
         }).catch(error =>{
             console.log(new Error('Ошибка запроса!'))
         });
    }
    fetchData();
   }

    render(){
        return(
            <div style={{position:'relative'}} ref={this.top}>
            <button onClick={this.send}>send</button>
            </div>
        )
    }
}

export default Parsing;