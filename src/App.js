import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import Home from './views/Home';
import Login from './views/Login';

class App extends Component {
 
  render() {
    
    return (
      <div className="App">
       <Switch>
         <Route exact path="/" component={Login}/>
         <Route path="/home" component={Home}/>
         <Route component={Home} />
       </Switch>
      </div>
    );
  }
}

export default App;
