import React from 'react';
import {UserContext} from './user.context';

class UserTogglerButton extends React.Component {
  render() {
    let props = this.props;//добавляю onClick
    let user = this.context;//беру из контекста тему
    console.log(user)
    return (
      <button
        {...props}
        style={user.user}
      />
    );
  }
}
//привязываю тему в контексте к данному компоненту
UserTogglerButton.contextType = UserContext;

/*
//изначально был этот вариант
export default UserButton;
function UserTogglerButton() {
  // ThemeTogglerButton получает из контекста
  // не только значение UI-темы, но и функцию toggleTheme.
  return (
    <UserContext.Consumer>
      {({user, toggleUser}) => (
        <button
          onClick={toggleUser}
          style={user}>
          Toggle User
        </button>
      )}
      {console.log(({user, toggleUser}))}
    </UserContext.Consumer>
  );
}

*/
export default UserTogglerButton;