import React, { Component } from 'react';
import {Fade} from "react-reveal";
import "./home.scss";

class Home extends Component {

    render(){
        return(
            <div id="home">
                <div className="home-intro">
                <Fade cascade bottom duration={1000}>
                    <div>I'm&nbsp;</div>
                    <div>Nicolas Lopierre Aguirre&nbsp;</div>
                </Fade>
                <Fade cascade bottom duration={1000} delay={1000}>
                    <code>, I'm a&nbsp;</code>
                    <code>software&nbsp;</code>
                    <code>engineer&nbsp;</code>
                </Fade>
                <Fade cascade bottom duration={500} delay={2000}>
                    <div>and&nbsp;</div>
                </Fade>
                <Fade cascade bottom duration={1000} delay={2500}>
                    <div>I create apps&nbsp;</div>
                    <div>for the web.&nbsp;</div>
                </Fade>
                </div>
            </div>
        )
    }
}

export default Home;