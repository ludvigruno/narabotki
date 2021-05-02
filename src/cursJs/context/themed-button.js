import React from 'react';
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;//добавляю onClick
    let theme = this.context;//беру из контекста тему
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
//привязываю тему в контексте к данному компоненту
ThemedButton.contextType = ThemeContext;

export default ThemedButton;