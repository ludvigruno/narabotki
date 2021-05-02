import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: ""
    };
    this.handle = this.handle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handle(e){
    this.setState({...this.state,[e.target.name]:e.target.value})

  }
  handleClick(){
      console.log(this.state.name, this.state.lastName)
  }
  render() {
    return (
      <div>
          <form onChange={this.handle}>
              <input name="name" value={this.state.name} />
              <input name="lastName" value={this.state.lastName} />
          </form>
        <button onClick={this.handleClick}>Нажать</button>
      </div>
    );
  }
}