import React, { Component } from 'react'
import Home from "../home/home"
import About from "../about/about"
import Navbar from "../navbar/navbar"
import Portfolio from "../portfolio/portfolio"
import Experiments from "../experiments/experiments"
import Contact from "../contact/contact"
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';


class Layout extends Component {

    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = ()=>{
        this.setState( (prevState) =>{
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    }
    
    render(){

        let backdrop, sideDrawer;
        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop/>;
            sideDrawer = <SideDrawer/>;
        }
        return(
            <div>
            <Navbar/>
            {sideDrawer}
            {backdrop}
            <Home/>
            <About/>
            <Portfolio/>
            <Experiments/>
            <Contact/>
            </div>
        )
    }
}

export default Layout;