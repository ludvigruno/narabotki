import React from 'react';


class ChildA extends React.Component{
    render(){
        return(
            <React.Fragment>
                <td>Привет</td>
                <td>Фрагмент</td>
           </React.Fragment>
        )
    }
}
class ChildB extends React.Component{
    render(){
        return(
        <>
            <tr><ChildA/></tr>
        </>
        )
    }
}
class ChildC extends React.Component{
    render(){
        return(
        <table>
            <ChildB/>
        </table>
        )
    }
}
class Frag extends React.Component{
    render() {
        return (
            <ChildC />
        );
      }
}
export default Frag;