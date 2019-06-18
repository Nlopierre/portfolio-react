import React, { Component } from 'react';

import Home from "./containers/home/home";
import About from "./containers/about/about"
//import Navbar from "./containers/navbar/navbar";
import Portfolio from "./containers/portfolio/portfolio"
import Experiments from "./containers/experiments/experiments"
import Contact from "./containers/contact/contact"
import Toolbar from './containers/toolbar/toolbar';

//import SideDrawer from './components/SideDrawer/SideDrawer';
//import Backdrop from './components/Backdrop/Backdrop';


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
    return(
        <div  id="outer-container">
        <Toolbar outerContainerId={"outer-container"} pageWrapId={"page-wrap"}/>
        <div id="page-wrap">
        <Home/>
        <About/>
          {
            false &&
            <div>
            
            
            <Portfolio/>
            <Experiments/>
            <Contact/>
            </div>
          }
          
        </div>
        </div>
    )
  }
}

export default App;