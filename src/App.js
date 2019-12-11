import React from 'react';
import './App.css';
import Listefilm from './component/Listefilm';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Description from './component/Description';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       {/* <Listefilm/> */}
       <Route exact path='/' component={Listefilm}/>
       <Route path='/Description/:id' component={Description}/>
       </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
