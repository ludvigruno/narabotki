require('@babel/polyfill');
import React from 'react';
import axios from 'axios';


let openW;
let closeW;
let stopperOpen=0;
let stopperClose=0;


class CallBack extends React.Component{
    constructor(props){
        super(props);
        this.state={
            end: false,
            backCall: true,
            laterCall: false,
            er:false,
            hours:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,1,2,3,4,5,6],
            minuts:[0,10,20,30,40,50],
            isCall: true,
            isTypeCall: 'Обратный звонок',
            name:'',
            phone: '',
            placeholderName: 'Имя',
            placeholderPhone: 'Номер телефона',
            borderInputName: 'none',
            borderInputPhone: 'none',
            errorMessage:"",
            opencallback: true,
            succesSend: false,
            right: -324,
            open: false,
            openMasageTime: false,
            masageTime: "Не забудте проверить время",
            checked: true,
            colorChecked: 'none'

        }
        this.send = this.send.bind(this);
        this.sendData = this.sendData.bind(this);
        this.onCall = this.onCall.bind(this);
        this.ofCall = this.ofCall.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.moveAt = this.moveAt.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.backCall = this.backCall.bind(this);
        this.laterCall = this.laterCall.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.checkedFunc = this.checkedFunc.bind(this);
        this.callBack = React.createRef(this);
        this.window_callback = React.createRef(this);
    }
    sendData(data){
        //console.log(data)
            
    return fetchData;
}
    send(){
        if(this.state.checked == true){
            this.setState({colorChecked: 'none'})
            let obj={
                type: this.state.isTypeCall,
                name:this.state.name,
                phone:this.state.phone,
                hours: this.state.isCall == false?document.querySelector('#selectHour')?document.querySelector('#selectHour').value:"":"",
                minuts: this.state.isCall == false?document.querySelector('#selectMinuts')?document.querySelector('#selectMinuts').value:"":""
            }
            if(this.state.name != "" && this.state.phone != ""){
                this.setState({errorMessage: ''})
                const fetchData = async ()=>{
                    await axios({
                       method: 'post',
                       url: '/callBackApi',
                       data: obj
                     }).then((response) => {
                       if(response.status == 200){
                           this.ofCall();
                           localStorage.setItem(`onbackcall`, JSON.stringify({onbackcall: 1}));
                           this.setState({succesSend:true})
                       }
                     }).catch(error =>{
                         console.log(new Error('Ошибка отправки запроса, для обратного звонка!'))
                     });
                }
                fetchData();
            }else{
                this.setState({errorMessage: 'Заполните данные для связи.', succesSend:false})
            }
        }else{
            this.setState({colorChecked: '0 0 7px 0 red'})
        }
    }
    onCall(){
        stopperOpen++;
        stopperClose=0
        if(stopperOpen==1){
            clearInterval(closeW)
            openW = setInterval(()=>{
                for(let i=0;i<20;i++){
                    this.state.right < -4 && this.state.open==false?
                    this.setState({...this.state.right = this.state.right+1})
                    :this.setState({...this.state.open=true})
                }
            },10)
            console.log(this.state.open)
            this.state.right<-4?clearInterval(closeW):clearInterval(openW);
        }
       
        }
    ofCall(){
        stopperClose++;
        stopperOpen=0
        if(stopperClose==1){
        clearInterval(openW)
        closeW = setInterval(()=>{
            for(let i=0;i<5;i++){
            this.state.right > -320 && this.state.open==true?
            this.setState({...this.state.right = this.state.right-1})
            :this.setState({...this.state.open=false})
            }
        },10);
        this.state.right>-320?clearInterval(openW):clearInterval(closeW);
       }
    }
    onMouseEnter(){
        this.setState({...this.state.openMasageTime =true});
    }
    phoneChange(e){
        //отражаеться в инруте
        if(e.target.name == 'phone'){
            if((e.target.value.split(/[a-z]/)[0].length) <= 11){
                if(/(\+7|7|8)/.test(e.target.value.split(/[a-z]/)[0]) == true){
                   this.setState({
                      phone: e.target.value.split(/[a-z]/)[0],
                      borderInput: 'none'
                   })
                }else{
                   this.setState({
                      phone: '',
                      placeholderPhone: '+7 или 8',
                      borderInputPhone: '1px solid red'
                   })
                }
              }
        }
          
           if(e.target.name == 'name'){
               if((e.target.value.split(/[0-9]/)[0].length) <= 15){
                if(/[А-Яа-яA-Za-z]/.test(e.target.value.split(/[0-9]/)[0]) == true){
                this.setState({
                    name: e.target.value.split(/[0-9]/)[0],
                    borderInput: 'none'
                 })
                }
                else{
                    this.setState({
                       name: '',
                       placeholderName: 'Имя',
                       borderInputName: '1px solid red'
                    })
                 }
               }
           }
           /*console.log(new RegExp(/^(\+)?\d+[\d\(\)\ -]{7,14}\d$/).test(e.target.value.split(/[a-z]/)[0]))*/
     }
     backCall(e){
        this.setState({laterCall: false,backCall: true, isTypeCall: e.target.innerHTML, isCall: true,openMasageTime:false})
    }
     laterCall(e){
        this.setState({laterCall: true,backCall: false, isTypeCall: e.target.innerHTML, isCall: false})
    }
    
    moveAt(pageX, pageY){
        document.querySelector('#callBack').style.left = pageX - document.querySelector('#callBack').offsetWidth / 2 + 'px';
        document.querySelector('#callBack').style.top = pageY - document.querySelector('#callBack').offsetHeight / 2 + 'px';
  
    }
    onDrag(event){
        this.moveAt(event.pageX, event.pageY);
        console.log(event.pageX, event.pageY)
    }
    onDragEnd(event){
        this.moveAt(event.pageX, event.pageY);
        console.log('react SyntheticEvent ==> ', event);
        console.log('nativeEvent ==> ', event.nativeEvent);
    }
    onDragStart(event){
        console.log('react SyntheticEvent ==> ', event);
        console.log('nativeEvent ==> ', event.nativeEvent);
    }
    checkedFunc(e){
        if(this.state.checked){
            this.setState({...this.state.checked = false})
            this.setState({colorChecked: '0 0 7px 0 red', })
            this.setState({errorMessage: ''})
        }else{
            this.setState({...this.state.checked = true})
            this.setState({colorChecked: 'none'})
        }
        
    }
     componentDidMount(){
        //this.callBack.current.style.zIndex = 1000;
        //this.callBack.current.style.position = 'fixed';
        //this.callBack.current.style.bottom = 0;
        //this.callBack.current.style.cursor = 'move';
        //document.header.append(this.callBack.current)
     }
    render(){
        return(
            <div id ="s" style={{position:'relative', display:"flex", justifyContent:"center"}}>
                <div style={{position:"fixed", zIndex: 3}}>
                    {/*onDrag={this.onDrag} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} */}
                <p draggable="true"  id="callBack" ref={this.callBack} onClick={this.state.open ==false?this.onCall:this.ofCall} style={{cursor:"pointer", left:"38%", display:"flex", justifyContent:"center", alignItems:"center", width:"70px", height:"70px", background:"#bb2121", transform:"rotate(180deg)", borderRadius:"50%", position: "fixed", bottom:'11px'}}>
                
                    {
                        this.state.open ==false?
                <svg width="35" height="35">
                <path fill="white" d="M30.988,2.617l-0.899-0.899c-1.108-1.106-2.711-1.691-4.631-1.691c-4.745,0-11.097,3.397-16.58,8.871
				C0.917,16.846-2.244,26.146,1.686,30.067l0.899,0.897c0.671,0.668,1.562,1.037,2.512,1.037c0.95,0,1.841-0.369,2.513-1.039
				l3.598-3.59c1.384-1.381,1.386-3.631,0-5.014l-0.899-0.898c-0.958-0.957-0.518-3.442,3.597-7.55
				c3.504-3.496,5.532-4.019,6.43-4.019c0.476,0,0.846,0.141,1.135,0.43l0.898,0.896c1.341,1.34,3.685,1.342,5.024,0l3.595-3.59
				c0.674-0.669,1.042-1.56,1.042-2.507C32.029,4.174,31.66,3.286,30.988,2.617z M29.561,6.206l-3.598,3.59
				c-0.58,0.578-1.589,0.58-2.168,0l-0.898-0.896c-0.668-0.667-1.553-1.021-2.562-1.021c-2.148,0-4.792,1.551-7.857,4.609
				c-6.325,6.312-4.622,9.376-3.597,10.399l0.898,0.896c0.599,0.598,0.599,1.568,0,2.164l-3.596,3.59
				c-0.582,0.578-1.591,0.578-2.17,0l-0.897-0.896c-3.025-3.021,0.269-11.408,7.192-18.318c5.041-5.031,10.987-8.281,15.151-8.281
				c1.394,0,2.471,0.37,3.203,1.103l0.897,0.896c0.29,0.29,0.449,0.675,0.449,1.083C30.011,5.532,29.851,5.916,29.561,6.206z"/></svg>
                        :<svg width="35" height="35">
                           <line x1="0" y1="0" x2="35" y2="35" stroke="white" stroke-width="10" />
                           <line x1="35" y1="0" x2="0" y2="35" stroke="white" stroke-width="10" />
                        </svg>
                    }
                
                
                </p>
                </div>
                     
                     <div ref={this.window_callback} style={{position:"fixed",right: `${this.state.right}px`, top: 0, background: '#f0f0f0', paddingTop:0, width: '319px', minHeight: '364px',zIndex: 7}}>
                     {this.state.opencallback?
                     <div>
                        
                         <div style={{background:'#1e60a8'}}>
                             <p style={{color:'white',padding:0, margin:'0 auto', textAlign:'center'}}>ПРОФЕССИОНАЛЬНАЯ КОНСУЛЬТАЦИЯ</p>
                         </div>
                         <div style={{padding: '0 4px 0 4px'}}>
                         <div style={{display:"flex",flexWrap: 'wrap',     justifyContent: 'space-around'}}>
                             <p onClick={this.backCall} style={{borderRadius:"50%",background:'#1e60a8', width: "100px", height:"100px", display:"flex", alignItems:"center", textAlign:"center", color:"white",cursor:"pointer"}}>Обратный звонок</p>
                             <p onClick={this.laterCall} style={{borderRadius:"50%",background:'#1e60a8', width: "100px", height:"100px", display:"flex", alignItems:"center", textAlign:"center", color:"white",cursor:"pointer"}}>Отложеный звонок</p>
                         </div>
                         <div>
                         {
                                 this.state.laterCall && this.state.succesSend == false?
                                 <div>
                                 <p> Давайте мы перезвоним вам</p>  в 
                                 <select id="selectHour">{
                                        this.state.hours.map((item,key)=><option key={key} value={item}>{item}</option>)
                                    }</select>
                                    часов
                                    <select id="selectMinuts">{
                                        this.state.minuts.map((item,key)=><option key={key} value={item}>{item}</option>)
                                    }</select>
                                    минут
                                 <p>
                                 и ответим на интересующие вас вопросы?</p>
                                 {this.state.openMasageTime?
                                     <p style={{position: 'absolute',top: '205px',background: 'white', width: '105px',    left: '29%'}}>{this.state.masageTime}</p>
                                     :false
                                 }
                                 
                                 </div>
                                 :false
                             }
                         </div>
                         
                         <div>
                         {
                                 this.state.backCall && this.state.succesSend == false?
                             <p>
                             Хотите оставить заявку или получить консультацию? Мы перезвоним Вам в течении 60 секунд.
                             </p>
                             :false}
                             {this.state.succesSend == false?
                             <div style={{textAlign:"center"}} onChange={this.phoneChange}>
                                 <input type="text" name="name" value={this.state.name} placeholder={this.state.placeholderName} style={{border: this.state.borderInputName, outline: 'none',verticalAlign: 'middle',width: '117px'}}/>
                                 <input type="text" name="phone" value={this.state.phone} placeholder={this.state.placeholderPhone} style={{border: this.state.borderInputPhone, outline: 'none',verticalAlign: 'middle',width: '117px'}}/>
                                 <p>{this.state.errorMessage}</p>
                                     <button onMouseEnter={this.state.laterCall?this.onMouseEnter:()=>{return true}}onClick={this.send}>Жду звонка!</button>
                             </div>
                             :<p>Мы Вам перезвоним.</p>}
                         </div>
                         
                        {
                           this.state.backCall == "no"?
                           <p>Укажите удобное время для звонка</p>
                           :false
                        }
                        {
                           this.er?
                           <div>
                         <p>Спасибо, ваш отзыв учтен.</p>
                         <p>Не успели перезвонить?</p>
                         <p>Заказать звонок ещё раз</p>
                         <p>Отправить email-жалобу</p>
                         </div>
                           :false
                        }
                         
                         {
                             this.state.succesSend == false?
                             <p style={{fontSize: '10px'}}>
                             <input style={{boxShadow:`${this.state.colorChecked}`}} onChange={this.checkedFunc} type="checkbox" checked={this.state.checked}/>Я согласен на обработку персональных данных</p>
                             :false
                         }
                         
                     </div>
                     </div>
                     :false}
                     
                     </div>
            </div>
        )
    }
}

export default CallBack;

/*
viewBox - координаты верхнего левого и нижнего правого угла видимой части холста.
M - переместить курсор и координаты x и y
L - нарисовать линию, и тоже координаты.
Z - замкнуть фигуру (соединить последнюю точку с первой)
l - нарисовать линию, но не абсолютные координаты, а сдвиг относительно предыдущей точки
H - нарисовать линию по горизонтали, и координата
h - нарисовать линию по горизонтали, но вместо координаты сдвиг.
V и v - та-же фигня, но по вертикал
<rect width="50" height="50" rx="25" fill="green"/>

 <rect x="7" y="8" width="14" height="2" rx="1" fill="white"/>
 <line x1="0" y1="0" x2="200" y2="200" stroke-width="1" stroke="rgb(0,0,0)"/>
                <polyline points="0,0 50,0 150,100 250,100 300,150" fill="rgb(249,249,249)" stroke-width="1" stroke="rgb(0,0,0)"/>
                <rect width="200" height="200" fill="rgb(234,234,234)" stroke-width="1" stroke="rgb(0,0,0)"/>
                <circle cx="102" cy="102" r="100" fill="rgb(234,234,234)" stroke-width="1" stroke="rgb(0,0,0)"/>
                <ellipse cx="100" cy="50" rx="100" ry="50" fill="rgb(234,234,234)" stroke-width="1" stroke="rgb(0,0,0)"/>
                <polygon points="70.444,218.89 15.444,118.89 70.444,18.89 180.444,18.89 235.444,118.89 180.444,218.89" fill="rgb(234,234,234)" stroke-width="1" stroke="rgb(0,0,0)"/>
                <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" fill="white" stroke="#BBC42A" stroke-width="6" />
                <path fill="#7AA20D" stroke="#7AA20D" stroke-width="9" stroke-linejoin="round" d="M248.761,92c0,9.801-7.93,17.731-17.71,17.731c-0.319,0-0.617,0-0.935-0.021c-10.035,37.291-51.174,65.206-100.414,65.206 c-49.261,0-90.443-27.979-100.435-65.334c-0.765,0.106-1.531,0.149-2.317,0.149c-9.78,0-17.71-7.93-17.71-17.731 c0-9.78,7.93-17.71,17.71-17.71c0.787,0,1.552,0.042,2.317,0.149C39.238,37.084,80.419,9.083,129.702,9.083    c49.24,0,90.379,27.937,100.414,65.228h0.021c0.298-0.021,0.617-0.021,0.914-0.021C240.831,74.29,248.761,82.22,248.761,92z" />


         <path fill="#7AA20D" stroke="#7AA20D" stroke-width="9" stroke-linejoin="round"        d="M384,308.928c-27.616,0-53.952-6.016-78.24-17.888c-3.808-1.824-8.224-2.112-12.256-0.736
	c-4.032,1.408-7.328,4.352-9.184,8.16l-11.52,23.84c-34.56-19.84-63.232-48.544-83.104-83.104l23.872-11.52
	c3.84-1.856,6.752-5.152,8.16-9.184c1.376-4.032,1.12-8.448-0.736-12.256c-11.904-24.256-17.92-50.592-17.92-78.24
	c0-8.832-7.168-16-16-16H128c-8.832,0-16,7.168-16,16c0,149.984,122.016,272,272,272c8.832,0,16-7.168,16-16v-59.072
	C400,316.096,392.832,308.928,384,308.928z" />

                       <svg viewBox="5 5 50 50">
  <path d="M10 10 L10 20 L20 20 Z" fill="red"></path>
  <path d="M15 10 l10 0 l0 10 Z" fill="blue"></path>
  <path d="M10 25 h 7 v 7 Z" fill="#FACE8D"></path>
</svg>
*/