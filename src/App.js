import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import Toolbar from './containers/toolbar/toolbar';
import Layout from './containers/layout/layout';
import Project from "./containers/project/project";
import './App.scss';

class App extends Component {

  state = {
    sideDrawerOpen: false
}

drawerToggleClickHandler = ()=>{
    this.setState( (prevState) =>{
        return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
}

  render(){

    const ProjectWrapped = withRouter(props => <Project {...props}/>);
    return(
      <BrowserRouter>
        <div  id="outer-container" className="App">
        <Toolbar outerContainerId={"outer-container"} pageWrapId={"page-wrap"}/>
        <Switch>
          <Route exact path='/' component={Layout} />
          <Route path='/stereotheque' render={() => <ProjectWrapped project={"stereotheque"} /> } />
          <Route path='/bmusic' render={() => <ProjectWrapped project={"bmusic"}  /> } />
          <Route path='/kevn' render={() => <ProjectWrapped project={"kevn"}  /> } />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;