import React, { Component } from 'react';
import {Fade} from "react-reveal";
import "./home.scss";
import Canvas from '../../components/canvas/canvas';

class Home extends Component {

    render(){
        return(
            <div id="home">
                <Fade  duration={2000} delay={4000}>
                    <Canvas/>
                </Fade>
                <div className="home-intro">
                    <Fade cascade right duration={1000}>
                        <div>I'm Nicolas Lopierre Aguirre.&nbsp;</div>
                    </Fade>
                    <Fade cascade right duration={1000} delay={1000}>
                        <div>Full-stack engineer.&nbsp;</div>
                    </Fade>
                    <Fade cascade right duration={1000} delay={2000}>
                        <div>VR/AR/XR enthusiast.&nbsp;</div>
                    </Fade>
                    <Fade cascade right duration={1000} delay={3000}>
                        <div>Blockchain aficionado.&nbsp;</div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Home;