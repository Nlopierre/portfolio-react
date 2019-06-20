import React, { Component } from "react";

import Home from "../home/home";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Experience from "../experience/experience";
import Contact from "../contact/contact";

class Layout extends Component{

    render(){
        return(
        <div id="page-wrap">
            <Home/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Contact/>
        </div>
        );
    }
}

export default Layout;