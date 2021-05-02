require('@babel/polyfill');
import React from 'react';

/*
-webkit-mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);
*/
let style={
    "-webkit-mask-image": 'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
    display:"flex", 
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between', 
    width: '120px',
    margin: '0 auto',
    overflowX: 'scroll',
    overflowY: 'hidden', 
    alignItems: 'center', 
    height:"47px"
}
class NewMenu extends React.Component{
constructor(props){
    super(props);
     this.state={
        words: [
            {name:"Акция 4Б",style:{color:"white", textAlign: 'center', margin: 'auto 10px auto 16px',textDecoration: 'none', fontSize: "12px", minWidth: '50px'}, url:"/klubnaya-karta.html"},
            {name:"Скидка 7% новоселам",style:{color:"white", textAlign: 'center', margin: 'auto 16px auto auto', fontSize: "12px", textDecoration: 'none', minWidth: '60px'}, url:"/sale/all.html"},
            {name:"Клубная карта ЮТТА",style:{color:"white", textAlign: 'center', fontSize: "12px", textDecoration: 'none',     paddingRight: '16px', minWidth: '70px'}, url:"/stock/all.html"}
            ]
     }
}
render(){
    return(
        <div>
        <div style={{background: '#343e3e', textAlign:'center', color:"white"}}>
<div style={style}>
    {
        this.state.words.map((item)=>{
            return <a href={item.url} style={item.style}>{item.name}</a>
        })
    }
    
</div>
</div>
        </div>
    )
}
}
             
export default NewMenu;