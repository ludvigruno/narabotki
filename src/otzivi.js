require('@babel/polyfill');
import React from 'react';

/*
    -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);
*/
let intro;
let intro2;
let out;
class Scroll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: 0,
            width: 0,
            height:0,
            fontSize: 0,
            pading:0,
            heightButton: 70,
            widthButton: 70,
            fontSizeButton: 15,
            openText: false,
            isMob: false,
            wrap: {height: 'max-content', width:"max-content"},
            words: [{name:"ОТЗЫВЫ ОНЛАЙН",style:{fontWeight:"bold", color:"white", textAlign: 'center', background: 'rgb(46, 117, 204)', textDecoration: 'none', borderRadius: '5px'}, url:"https://otzyvy.online/spb/remont-kvartir/yutta/"},
            {name:"РЕМРЕЙТИНГ",style:{fontWeight:"bold", color:"white", textAlign: 'center', margin: '0 auto', background: 'rgb(108 92 195)', textDecoration: 'none', borderRadius: '5px'}, url:"https://remrating-spb.ru/yutta/"},
            {name:"ZOON",style:{fontWeight:"bold", color:"white", textAlign: 'center', margin: '0 auto', background: 'rgb(90, 54, 214)', textDecoration: 'none', borderRadius: '5px'}, url:"https://spb.zoon.ru/building/remontno-stroitelnaya_kompaniya_yutta_na_ligovskom_prospekte/"},
             {name:"YELL",style:{fontWeight:"bold", color:"white", textAlign: 'center', margin: '0 auto', background: 'rgb(245, 67, 76)', textDecoration: 'none', borderRadius: '5px'}, url:"https://www.yell.ru/spb/com/remontno-stroitelnaya-kompaniya-yutta_5147004/"}],
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
        this.setState({openText: true})
        this.setState({wrap: {height:"180px", width:"160px"}})
       for(let i =0;i<50;i++){
           return intro = setInterval(()=>{
                this.setState(prev=>prev.openText == true && prev.width > 20 && prev.fontSize < 16?prev.fontSize++:prev.fontSize);
                this.setState(prev=>prev.openText == true && prev.width > 20 && prev.pading < 2?prev.pading++:prev.pading);
                //кнопка
                this.setState(prev=>prev.openText == true && prev.fontSizeButton > 10?prev.fontSizeButton--:prev.fontSizeButton);
                this.setState(prev=>prev.openText == true && prev.widthButton > 40?prev.widthButton--:prev.widthButton);
                this.setState(prev=>prev.openText == true && prev.heightButton > 40?prev.heightButton--:prev.heightButton);
            },20);
        }
    }
    introText(){
        for(let i =0;i<20;i++){
      return intro2 = setInterval(()=>{
                this.setState(prev=>prev.openText == true && prev.width < 160?prev.width++:prev.width);
            },1);
        }
    }
    out(){
        clearInterval(intro)
        this.setState({openText: false})
        this.setState({wrap: {height:"max-content", width:"max-content"}})
        for(let i =0;i<10;i++){
            return out = setInterval(()=>{
                //this.setState(prev=>prev.width > 0?prev.width-1:prev.width);
                this.setState(prev=>prev.openText == false && prev.fontSize >= 0?prev.fontSize--:prev.fontSize);
                this.setState(prev=>prev.openText == false && prev.pading >= 0?prev.pading--:prev.pading);
                //кнопка
                this.setState(prev=>prev.openText == false  && prev.widthButton < 70 ?prev.widthButton++:prev.widthButton);
                this.setState(prev=>prev.openText == false && prev.heightButton < 70?prev.heightButton++:prev.heightButton);
                this.setState(prev=>prev.openText == false && prev.fontSizeButton < 15?prev.fontSizeButton++:prev.fontSizeButton);
            },10);
         }
    }
    onMouseEnter(){
        this.intro();
        this.introText();
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
        
        console.log('forMobile')
    }
    render(){
        return(
            <div onPointerLeave={this.state.isMob ==false?this.onPointerOut:()=>{return true}} style={{position: 'fixed', top:"150px", left: "10px", width: `${this.state.wrap.width}`,height: `${this.state.wrap.height}`, display: 'flex', alignItems: 'start', justifyContent:"start", zIndex: 5}}>
                <div>
                        <div onClick={this.forMobile} onMouseEnter={this.state.isMob ==false?this.onMouseEnter:()=>{return true}} style={{borderRadius:"50%", background:"rgb(217 167 24)",height:`${this.state.heightButton}px`, width: `${this.state.widthButton}px`,display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: `${this.state.fontSizeButton}px`,  border: '13px solid #524c4c', boxShadow: '0px 0px 19px 0px'}}>
                       <p style={{margin:"0 auto", color:"white", }}>Отзывы</p>
                        </div>
                        <div style={{position:"absolute", top:"55px", display:"flex", flexDirection: 'column', textAlign: 'left'}}>
                            {
                                this.state.words.map((item, key)=>{
                                    return <p key={key} style={{margin:"2px auto", padding:0, width:`${this.state.width}px`, whiteSpace: 'nowrap'}}><a  href={item.url} style={{fontSize:`${this.state.fontSize}px`, background:`${item.style.background}`, padding: `${this.state.pading}px`, color:`${item.style.color}`, margin:"3px", textDecoration: `${item.style.textDecoration}`, borderRadius: "5px"}}>{item.name}</a></p>
                                    
                                })
                            }
                        </div>
                </div>
                </div>
        )
    }
}

export default Scroll;