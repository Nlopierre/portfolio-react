import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import { createBrowserHistory } from 'history';

import Toolbar from './containers/toolbar/toolbar';
import Layout from './containers/layout/layout';
import Project from "./containers/project/project";
import './App.scss';

const history = createBrowserHistory();
const unlistenHistory = history.listen((location, action) => {});

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      pathname: window.location.pathname
    }
  }

componentDidMount(){
  history.listen((location, action)=>{
    this.setState({
        pathname: location.pathname
    });
  }); 
}

componentDidUpdate(prevProps){
  history.listen((location, action)=>{
      this.setState({
          pathname: location.pathname
      });
  }); 
}

componentWillUnmount(){
  unlistenHistory();
}

componentWillUnmount

  render(){

    const ProjectWrapped = withRouter(props => <Project {...props}/>);
    return(
      <Router history={history}>
        <div  id="outer-container" className="App">
        <Toolbar outerContainerId={"outer-container"} pageWrapId={"page-wrap"} pathname={this.state.pathname}/>
        <Switch>
          <Route exact path='/' component={Layout} />
          <Route path='/stereotheque' render={() => <ProjectWrapped project={"stereotheque"} /> } />
          <Route path='/bmusic' render={() => <ProjectWrapped project={"bmusic"}  /> } />
          <Route path='/construction' render={() => <ProjectWrapped project={"constructionSite"}  /> } />
          <Route path='/jax' render={() => <ProjectWrapped project={"jaxTheBarbarianAR"}  /> } />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;