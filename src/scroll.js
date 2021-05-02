require('@babel/polyfill');
import React from 'react';

/*
    -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);
*/

class Scroll extends React.Component{
    constructor(props){
        super(props);
        this.state={
           num: 0,
           top: false,
           down: false,
           isTop: 0,
           words: [
               {name:"YELL",style:{margin: '0 0 3px 0',fontWeight:"900", color:"#f5434c", fontSize: '3em', height: '54px', textAlign: 'center', margin: '0 auto',width: '79%', background: 'antiquewhite', textDecoration: 'none'}, url:"https://www.yell.ru/spb/com/remontno-stroitelnaya-kompaniya-yutta_5147004/"},
               {name:"ZOON",style:{margin: '3px 0 3px 0',fontWeight:"900", color:"#5a36d6", fontSize: '3em', height: '54px', textAlign: 'center', margin: '0 auto',width: '79%', background: 'antiquewhite', textDecoration: 'none'}, url:"https://spb.zoon.ru/building/remontno-stroitelnaya_kompaniya_yutta_na_ligovskom_prospekte/"},
               {name:"ОТЗЫВЫ ОНЛАЙН",style:{margin: '3px 0 0px 0',fontWeight:"900", color:"#2e75cc", fontSize: '32px', height: '54px', textAlign: 'center',width: '79%', background: 'antiquewhite',lineHeight: '58px', textDecoration: 'none'}, url:"https://otzyvy.online/spb/remont-kvartir/yutta/"},
               {name:"РЕМРЕЙТИНГ",style:{margin: '3px 0 0px 0',fontWeight:"900", color:"#0d5dff", fontSize: '32px', height: '54px', textAlign: 'center', margin: '0 auto',width: '79%', background: 'antiquewhite', lineHeight: '58px', textDecoration: 'none'}, url:"https://remrating-spb.ru/yutta/"}],
               onMouseEnter :false
        }
        this.top = React.createRef(this);
        this.up =this.up.bind(this);
        this.bottom =this.bottom.bind(this);
    }
    up(){
        this.setState({num:0});
        if(this.state.num < this.state.words.length-1){
            console.log(this.state.num,'this.state.num')
            this.setState({num:this.state.num+1});
        }
        
    }
    bottom(){
        if(this.state.num <= this.state.words.length-1 && this.state.num > 0){
            console.log(this.state.num,'this.state.num2')
            this.setState({num:Math.abs(this.state.num-1)});
        }
    }
    onMouseEnter (){
            document.querySelector("body").style.overflow = "hidden";
    }
    onMouseLeave(){
        document.querySelector("body").style.overflow = "auto";
    }
    onTouchMove(e){
        let parentTop = this.top.current.children[0].getBoundingClientRect().top; 
        let currentChildTop = e.target.getBoundingClientRect().top;
        let changedTouches = e.changedTouches[0].clientY;
        this.setState({isTop: changedTouches-currentChildTop-this.top.current.offsetTop})

          //прверка движения мыши
        if(this.state.isTop < 0){
            this.setState({top:true, down:false})
        }else if(this.state.isTop > 0){
            this.setState({top:false, down:true})
        }
        
        console.log(parentTop,currentChildTop,this.top.current.offsetTop)
        //если движение мыши вверх
        if(this.state.top ==true){
            if(Math.abs(Math.round(this.state.isTop/40)) <= this.state.words.length){

                if(e.target.tagName == 'P' && Math.abs(Math.round(this.state.isTop/30)) == Number(e.target.id))
                {
                   this.setState({num: Number(e.target.id) < this.state.words.length-1?Number(e.target.id)+1:Number(e.target.id)});

                   console.log('движение',Math.round(this.state.isTop/30), e.target.id)
                }
            }
            //если движение мыши вниз
        }else if(this.state.top ==false){
            if(Math.abs(Math.round(this.state.isTop/25)-3) >= 0 && Math.abs(Math.round(this.state.isTop/25) < 4)){
                if(e.target.tagName == 'P' && Math.abs(Math.round(this.state.isTop/25)-3) == Number(e.target.id))
                {
                    this.setState({num: Number(e.target.id)==0?0:Number(e.target.id)-1})
                    
                    console.log('движение',Math.abs(Math.round(this.state.isTop/25)-3), e.target.id)
                }
                 
            }
        }
        
        
    }
    onTouchEnd(e){
        if(e.target.tagName == 'P')
        {
           console.log('end')
        }
    }
  
    onWheel(e){
           console.log(e)
           console.log(e.deltaY)
           console.log(e.target.id)
           console.log(e.deltaMode,'deltaMode')

       
            if(e.deltaY == 100){
                this.setState({num: Number(e.target.id) < this.state.words.length-1?Number(e.target.id)+1:Number(e.target.id)})
              }else if(e.deltaY == -100){
               this.setState({num: Number(e.target.id)==0?0:Number(e.target.id)-1})
              }
           
    }

    render(){
        return(
            <div style={{position:'relative'}} ref={this.top}>
                <div style={{left: '6em', position: 'fixed', bottom:91, display: 'flex', alignItems: 'center', justifyContent: 'center',     flexDirection: 'column', zIndex: 2,     width: '212px', fontSize: '19px'}}>
            
                    <p style={{zIndex: 2,background: 'coral',position: 'absolute',top: '-196px', borderRadius: '50%', padding: '27px', background:"white", fontWeight:"bold",  textAlign:"center", boxShadow: '0 0 9px 0'}}>Отзывы  о компании Ютта</p>
              
                <div style={{position: 'absolute', left: '268px',bottom: '-64px',zIndex: 2}}>
                    <p onClick={this.up} style={{transform:'rotate(-90deg)', cursor:"pointer", fontSize: '35px', color:"white"}}>&#10148;</p>
                    <p onClick={this.bottom} style={{transform:'rotate(90deg)', cursor:"pointer", fontSize: '35px',margin: '0 1px 0 0', color:"white"}}>&#10148;</p>
                </div>
                <div onMouseEnter ={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onTouchMove={(e)=>this.onTouchMove(e)} onWheel={(e)=>this.onWheel(e)} style={{margin:'19px auto', width: '400px', position: 'fixed', bottom:"8px", height:"135px", display: 'flex', alignItems: 'center',    justifyContent: 'center', overflowX:"hidden", overflowY:"hidden",    borderRadius: '10px',boxShadow: '2px 2px 12px 2px #d9d9d9', background: 'rgb(254 74 8 / 89%)', zIndex:1}}>
                    <a href={this.state.words[this.state.num].url} onTouchEnd={(e)=>this.onTouchEnd(e)} id={this.state.num} style={this.state.words[this.state.num].style}>
                        {this.state.words[this.state.num].name} </a>
                    <p style={{position: 'absolute', top: '-11px',    margin: '0 auto',fontSize: '27px', textAlign: 'center',filter: 'blur(1px)', color: 'white'}}>{this.state.num == 0?false:this.state.words[this.state.num-1].name}</p>
                    <p style={{position: 'absolute', bottom: '-14px',    margin: '0 auto',fontSize: '27px', textAlign: 'center',filter: 'blur(1px)', color: 'white'}}>{this.state.num < this.state.words.length-1?this.state.words[Number(this.state.num)+1].name:false}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Scroll;