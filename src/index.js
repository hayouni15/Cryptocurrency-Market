import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header'
import './index.css'
import List from './components/List/List'

const App = () => {
 
    return (
        <div>
            <Header/>

             <List></List>
             
        </div>
  
    )
}

ReactDOM.render( <App/> ,
    document.getElementById('root')
);