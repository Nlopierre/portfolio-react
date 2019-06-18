import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from "./containers/layout/Layout"
import './App.scss';

class App extends Component {


  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route  exact path='/' component={Layout}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
/*
<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        */
