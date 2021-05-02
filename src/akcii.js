import React from 'react';
import {Link} from 'react-router-dom';


let intro;
let out;
class BlockPromo extends React.Component{
    constructor(props){
        super(props);
        this.state={
           num: 0,
           top: "177px",
           width: 0,
           height:0,
           fontSize: 0,
           pading:0,
           heightButton: 85,
           widthButton: 85,
           fontSizeButton: 17,
           borderButton: 'rgb(217, 95, 24)',
           openText: false,
           isMob: false,
           wrap: {height: 'max-content', width:"max-content"},
           words: [
           {name:"Клубная карта ЮТТА",style:{fontWeight:"bold", color:"white", textAlign: 'center', margin: '0 auto', background: '#FF9800', textDecoration: 'none', borderRadius: '5px'}, url:"/klubnaya-karta.html"},
           {name:"Скидка 7% новоселам",style:{fontWeight:"bold", color:"white", textAlign: 'center', margin: '0 auto', background: '#4CAF50', textDecoration: 'none', borderRadius: '5px'}, url:"/sale/all.html"},
           {name:"Акция 4Б",style:{fontWeight:"bold", color:"white", textAlign: 'center', background: 'rgb(46, 117, 204)', textDecoration: 'none', borderRadius: '5px'}, url:"/stock/all.html"}
           ],
            window: ''
        }
        this.intro =this.intro.bind(this);
        this.out =this.out.bind(this);
        this.onMouseEnter =this.onMouseEnter.bind(this);
        this.onPointerOut =this.onPointerOut.bind(this);
        this.forMobile =this.forMobile.bind(this);
    }
    intro(){
        clearInterval(out)
        this.setState({borderButton: "rgb(255 124 49)"});
        this.setState({openText: true})
        this.setState({wrap: {height:"180px", width:"162px"}})
       for(let i =0;i<40;i++){
           return intro = setInterval(()=>{
                this.setState(prev=>prev.openText == true && prev.width < 178?prev.width++:prev.width);
                this.setState(prev=>prev.openText == true && prev.width > 20 && prev.fontSize < 16?prev.fontSize++:prev.fontSize);
                this.setState(prev=>prev.openText == true && prev.width > 20 && prev.pading < 2?prev.pading++:prev.pading);
                //кнопка
                this.setState(prev=>prev.openText == true && prev.fontSizeButton > 9?prev.fontSizeButton--:prev.fontSizeButton);
                this.setState(prev=>prev.openText == true && prev.widthButton > 40?prev.widthButton--:prev.widthButton);
                this.setState(prev=>prev.openText == true && prev.heightButton > 40?prev.heightButton--:prev.heightButton);
            },10);
        }
    }
    out(){
        clearInterval(intro)
        this.setState({borderButton: "rgb(217, 95, 24)"});
        this.setState({openText: false})
        this.setState({wrap: {height:"max-content", width:"max-content"}})
        for(let i =0;i<10;i++){
            return out = setInterval(()=>{
                //this.setState(prev=>prev.width > 0?prev.width-1:prev.width);
                this.setState(prev=>prev.openText == false && prev.fontSize >= 0?prev.fontSize--:prev.fontSize);
                this.setState(prev=>prev.openText == false && prev.pading >= 0?prev.pading--:prev.pading);
                //кнопка
                this.setState(prev=>prev.openText == false  && prev.widthButton < 85 ?prev.widthButton++:prev.widthButton);
                this.setState(prev=>prev.openText == false && prev.heightButton < 85?prev.heightButton++:prev.heightButton);
                this.setState(prev=>prev.openText == false && prev.fontSizeButton < 17?prev.fontSizeButton++:prev.fontSizeButton);
            },10);
         }
    }
    onMouseEnter(){
        this.intro();
    }
    onPointerOut(){
        this.out();
    }
    forMobile(){
        if(this.state.isMob == false){
            this.setState({isMob: true})
            this.intro();
        }else{
            this.setState({isMob: false})
            this.out();
        }
    }
   
    componentDidMount(){
        /*
        if(typeof window !== 'undefined'){
            if(window.innerWidth < 500){
              this.setState({window: 'mobMin'});
            }else if(window.innerWidth > 501 && window.innerWidth < 644){
                this.setState({window: 'mob'}); 
            }else if(window.innerWidth > 665 && window.innerWidth < 1000){
              this.setState({window: 'middle'});
            }else if(window.innerWidth > 1001){
              this.setState({window: 'big'});
            }
             }
             */
    }
    render(){
        /*if(typeof window !== 'undefined'){
           if(window.scrollY > 200){
            this.setState({top: 0});
           }
        }
        */
        return(
            <section>
               <div  onPointerLeave={this.state.isMob ==false?this.onPointerOut:()=>{return true}}  style={{position: 'fixed', top: `${this.state.top}`, right: "10px", width: `${this.state.wrap.width}`,height: `${this.state.wrap.height}`, display: 'flex', alignItems: 'start', justifyContent:"flex-end", zIndex: 5}}>
               <div>
                       <div onClick={this.forMobile} onMouseEnter={this.state.isMob ==false?this.onMouseEnter:()=>{return true}} style={{borderRadius:"50%", background:"white",height:`${this.state.heightButton}px`, width: `${this.state.widthButton}px`,display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', fontSize: `${this.state.fontSizeButton}px`,  border: `13px solid ${this.state.borderButton}`, boxShadow: '0px 0px 19px 0px'}}>
                      <p style={{margin:"0 auto", color:"rgb(217, 95, 24)", }}>Акции</p>
                      <p style={{margin:"0 auto", color:"rgb(217, 95, 24)", }}>Скидки</p>
                      <p style={{margin:"0 auto", color:"rgb(217, 95, 24)", }}>Карта</p>
                       </div>
                       <div style={{position:"absolute", right:0,top:"55px", display:"flex", flexDirection: 'column', textAlign: 'right'}}>
                           {
                               this.state.words.map((item, key)=>{
                                   return <p key={key} style={{margin:"2px auto", padding:0, width:`${this.state.width}px`, whiteSpace: 'nowrap'}}><a  href={item.url} style={{fontSize:`${this.state.fontSize}px`, background:`${item.style.background}`, padding: `${this.state.pading}px`, color:`${item.style.color}`, margin:"3px", textDecoration: `${item.style.textDecoration}`, borderRadius: "5px"}}>{item.name}</a></p>
                                   
                               })
                           }
                       </div>
               </div>
            </div>
            </section>
        )
    }
}

export default BlockPromo;