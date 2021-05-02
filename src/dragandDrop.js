require('@babel/polyfill');
import React from 'react';

class DragAndDrop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            end: false
        }
        this.moveAt = this.moveAt.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.reff = React.createRef(this);
    }
    moveAt(pageX, pageY){
        document.querySelector('#ref').style.left = pageX - document.querySelector('#ref').offsetWidth / 2 + 'px';
        document.querySelector('#ref').style.top = pageY - document.querySelector('#ref').offsetHeight / 2 + 'px';
  
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
        //this.moveAt(event.pageX, event.pageY);
        console.log('react SyntheticEvent ==> ', event);
        console.log('nativeEvent ==> ', event.nativeEvent);
    }
     componentDidMount(){
        this.reff.current.style.zIndex = 1000;
        this.reff.current.style.position = 'absolute';
        document.body.append(this.reff.current)
     }
    render(){
        return(
            <div style={{position:'relative'}} ref={this.top}>
                <p draggable="true"  id="ref" ref={this.reff} onDrag={this.onDrag} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} style={{cursor:"move"}}>DragAndDrop</p>
            
            </div>
        )
    }
}

export default DragAndDrop;