import React, { Component } from 'react';
import './about.scss';
import {Devices} from "@material-ui/icons";

import bioPic from "../../assets/bio-pic.JPG";
import ExternalButton from "../../components/Button/externalButton";

import reactLogo from "../../assets/react-logo.png";
import ethereumLogo from "../../assets/ethereum-logo.png";
import nodeJsLogo from "../../assets/node-js-logo.png";

class About extends Component {
    
    openMoreInfo(){
        console.log("This is working");
    }

    render(){
        return(
            <div id="about">
                <div className="header">
                    <h1 className="header-content">About Me</h1>
                </div>
                <div className="info-container">
                    <div className="info-picture-about">
                        <img src={bioPic} alt="Nicolas Lopierre Aguirre " id="picture-about" />
                    </div>
                    <div className="info-about">
                        <p className="content-body"> 
                        My name is Nicolas Lopierre Aguirre, I'm a software engineer based in New York City, NY 
                        who takes delight in creating high-impact web applications. As a full-stack developer, 
                        I prioritize efficiency when developing the back end while focusing on making the user 
                        interface intuitive, practical, beautiful and pleasant to the users. As a blockchain 
                        enthusiast, I explore the potential of smart contracts with digital assets within creative 
                        industries, and develop them to test proof of concepts.
                        </p>

                        <p  className="content-body">
                        I've always been drawn to entrepreneurship and I firmly believe in the potential of Design 
                        Thinking (Creative Confidence is a book I highly recommend). I use best software engineering 
                        practices to improve business skills in areas such as Customer Research and Business Development.
                        </p>
                        <div className="external-button-container">
                            <ExternalButton message={"More About Me"} onClick={()=>this.openMoreInfo}/>
                        </div>
                        
                    </div>
                </div>
                <div className="more-info-container">
                    <h3>Interests</h3>
                    <p className="content-body">In general, I like reading, working out to stay healthy, watching football (soccer) and gaming every once in a while.</p>

                    <h3>Recommended readings:</h3>
                    <ul className="about-list">
                        <li className="content-body"><span>&#9755;</span>Sapiens: A Brief History of Humankind by Yuval Noah Harari</li>
                        <li className="content-body"><span>&#9755;</span>Creative Confidence by Tom and David Kelley</li>
                        <li className="content-body"><span>&#9755;</span>Conscious Capitalism by Jonh Mackey and Raj Sisodia</li>
                        <li className="content-body"><span>&#9755;</span>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future by Ashlee Vance</li>
                    </ul>
                </div>
                <div className="skills-container">
                    <div className="header">
                        <h1 className="header-content">Skills</h1>
                    </div>
                    <div className="skills-body">
                        <div className="skill">
                            <h3>Front End</h3>
                            <ul className="about-list">
                            <li className="content-body"><span>&#9755;</span>HTML5</li>
                            <li className="content-body"><span>&#9755;</span>SCSS</li>
                            <li className="content-body"><span>&#9755;</span>Typescript (JS)</li>
                            <li className="content-body"><span>&#9755;</span>React</li>
                            </ul>
                        </div>
                        <div className="skill">
                            <h3>Back End</h3>
                            <ul className="about-list">
                            <li className="content-body"><span>&#9755;</span>NodeJS</li>
                            <li className="content-body"><span>&#9755;</span>Solidity</li>
                            <li className="content-body"><span>&#9755;</span>NoSQL</li>
                            <li className="content-body"><span>&#9755;</span>SQL</li>
                            <li className="content-body"><span>&#9755;</span>Java and C++ (proficient)</li>
                            </ul>
                        </div>
                        <div className="skill">
                            <h3>Business Skills</h3>
                            <ul className="about-list">
                            <li className="content-body"><span>&#9755;</span>Customer Research</li>
                            <li className="content-body"><span>&#9755;</span>Ideation and Prototyping</li>
                            <li className="content-body"><span>&#9755;</span>Crowd Management</li>
                            <li className="content-body"><span>&#9755;</span>Event Planning and Coordination</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-logos">
                        <img className="skills-logo" src={reactLogo} alt="React logo"/>
                        <img className="skills-logo" src={ethereumLogo} alt="Ethereum logo"/>
                        <img className="skills-logo" src={nodeJsLogo} alt="Node JS logo"/>
                        <div>
                            <Devices className="skills-logo" alt="Business logo"/>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default About;