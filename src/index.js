import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/common/Header'
import './index.css'
import List from './components/List/List'
import Notfound from './components/notfound/notfound';
import Detail from "./components/detail/detail"

const App = () => {
 
    return (
        <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component= {List} exact/>
                <Route path="/currency/:id" component={Detail} exact/>
                <Route path="*" component={Notfound} exact/>
            </Switch>

        </div>
        </BrowserRouter>
        
  
    )
}

ReactDOM.render( <App/> ,
    document.getElementById('root')
);