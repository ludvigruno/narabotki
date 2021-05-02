import React from 'react';
import {ThemeContext, themes} from './theme-context';
import {UserContext, user} from './user.context';
import ThemedButton from './themed-button';
import UserButton from './user-button';

// Промежуточный компонент, который использует ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}
function Toolbar2(props) {
  return (
    <div>
      <UserButton  onClick={props.changeUser}>User</UserButton>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleUser=()=>{
      this.setState(state=>({
        obj: {
          user: state.obj.user === user.active
        ? user.disable
        : user.active
      }}))
    }
    this.state = {
      theme: themes.light,
      obj: {
        user: user.active,
        toggleUser: this.toggleUser
      }
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    
  }

  render() {
    // ThemedButton внутри ThemeProvider использует
    // значение светлой UI-темы из состояния, в то время как
    // ThemedButton, который находится вне ThemeProvider,
    // использует тёмную UI-тему из значения по умолчанию
    return (
      <div>
        {console.log(this.state.obj)}
        
        <ThemeContext.Provider value={this.state.theme}>
        <ThemeContext.Consumer>
          {theme=>(
            <Toolbar changeTheme={this.toggleTheme} />
          )
          }
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
          <UserContext.Provider value={this.state.obj}>
                <Toolbar2 changeUser={this.toggleUser}/>
          </UserContext.Provider>
        <div>
          <ThemedButton />
        </div>
       
       
      </div>
    );
  }
}


export default App;