import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className="App">



      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/login" component={Login} />
      </Switch>


    </div>
  );
}

export default App;
