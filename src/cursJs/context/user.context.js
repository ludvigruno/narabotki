import React from 'react';
export const user = {
    active: {
      color: 'green',
      fontWeight: "bold"
    },
    disable: {
      color: 'red',
      fontWeight: "bold"
    },
  };
  
  //сюда я передаю значение через value в provider
  export const UserContext = React.createContext({
    user: user.active,
    toggleUser:()=>{}
  });