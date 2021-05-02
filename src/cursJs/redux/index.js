import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Nuvbar} from './components/Nuvbar'
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';

console.log(<AlertState />)
function App(){
    return(
        <AlertState>
            <BrowserRouter>
            <Nuvbar />
                <div>
                <Alert />
                    <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    )
}
export default App;