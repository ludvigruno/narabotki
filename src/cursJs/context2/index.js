import React from 'react';
import { Alert } from './Alert';
import { Main } from './Main';
import {AlertProvider} from './context/alert/AlertContext';

function App(){
    return(
        <AlertProvider>
        <div>
            <Alert />
            <Main toggle={()=>{}}/>
        </div>
        </AlertProvider>
    )
}
export default App;
