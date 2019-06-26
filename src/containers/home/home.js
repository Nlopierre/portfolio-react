import React, { Component } from 'react';
import {Fade} from "react-reveal";
import "./home.scss";

class Home extends Component {

    render(){
        return(
            <div id="home">
                <Fade cascade big >
                <p>
                Hi, I'm Nicolas Lopierre Aguirre, I'm a software engineer and I create apps for the web.
                </p>
                </Fade>
            </div>
        )
    }
}

export default Home;