import React, { Component } from 'react';
import './about.scss';
import {Devices} from "@material-ui/icons";
import classnames from "classnames";
import {Fade, Zoom} from 'react-reveal';

import bioPic from "../../assets/bio-pic.JPG";
import ShowBelowButton from "../../components/Button/showBelowButton";
import reactLogo from "../../assets/react-logo.png";
import ethereumLogo from "../../assets/ethereum-logo.png";
import nodeJsLogo from "../../assets/node-js-logo.png";

class About extends Component {

    constructor(props){
        super(props);
        this.state={
            expandMoreInfo: false
        }
    }
    
    openMoreInfo(){
        this.setState({
            expandMoreInfo: !this.state.expandMoreInfo
        });
    }

    buttonMessage = {
        false: "More About Me", 
        true: "Less About Me"
    };

    render(){
        return(
            <div id="about">
                <div className="header">
                    <Fade fraction={0.4} bottom>
                    <h1 className="header-content">About Me</h1>
                    </Fade>
                </div>
                <div className="info-container">
                    <Fade fraction={0.4} bottom cascade>
                    <div className="info-picture-about">
                        <img src={bioPic} alt="Nicolas Lopierre Aguirre " id="picture-about" />
                    </div>
                    <div className="info-about">
                   
                        <p className="body-text"> 
                        My name is Nicolas Lopierre Aguirre, I'm a software engineer based in New York City, NY 
                        who takes delight in creating high-impact web applications. As a full-stack developer, 
                        I prioritize efficiency when developing the back end while focusing on making the user 
                        interface intuitive, practical, beautiful and pleasant to the users. As a blockchain 
                        enthusiast, I explore the potential of smart contracts with digital assets within creative 
                        industries, and develop them to test proof of concepts.
                        </p>

                        <p  className="body-text">
                        I've always been drawn to entrepreneurship and I firmly believe in the potential of Design 
                        Thinking (Creative Confidence is a book I highly recommend). I use best software engineering 
                        practices to improve business skills in areas such as Customer Research and Business Development.
                        </p>
                        <div className="external-button-container">
                            <div onClick={()=>this.openMoreInfo()}>
                                <ShowBelowButton message={this.buttonMessage[this.state.expandMoreInfo]} expanded={this.state.expandMoreInfo}/>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className={classnames("more-info-container-hide", {"more-info-container-show": this.state.expandMoreInfo})}>
                    <h3>Interests</h3>
                    <p className="body-text">In general, I like reading, working out to stay healthy, watching football (soccer) and gaming every once in a while.</p>

                    <h3>Recommended readings:</h3>
                    <ul className="list-organization">
                        <li className="body-text"><span>&#9755;</span><div>Sapiens: A Brief History of Humankind by Yuval Noah Harari</div></li>
                        <li className="body-text"><span>&#9755;</span><div>Creative Confidence by Tom and David Kelley</div></li>
                        <li className="body-text"><span>&#9755;</span><div>Conscious Capitalism by Jonh Mackey and Raj Sisodia</div></li>
                        <li className="body-text"><span>&#9755;</span><div>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future by Ashlee Vance</div></li>
                    </ul>
                </div>
                <div className="skills-container">
                <Fade fraction={0.4} bottom>
                    <div className="header">
                        <h1 className="header-content">Skills</h1>
                    </div>
                </Fade>
                    <Fade fraction={0.4} bottom cascade>
                    <div className="skills-body">
                        <div className="skill">
                            <h3>Front End</h3>
                            <ul className="list-organization">
                            <li className="body-text"><span>&#9755;</span>HTML5</li>
                            <li className="body-text"><span>&#9755;</span>SCSS</li>
                            <li className="body-text"><span>&#9755;</span>Typescript (JS)</li>
                            <li className="body-text"><span>&#9755;</span>React</li>
                            </ul>
                        </div>
                        <div className="skill">
                            <h3>Back End</h3>
                            <ul className="list-organization">
                            <li className="body-text"><span>&#9755;</span>NodeJS</li>
                            <li className="body-text"><span>&#9755;</span>Solidity</li>
                            <li className="body-text"><span>&#9755;</span>NoSQL</li>
                            <li className="body-text"><span>&#9755;</span>SQL</li>
                            <li className="body-text"><span>&#9755;</span>Java and C++ (proficient)</li>
                            </ul>
                        </div>
                        <div className="skill">
                            <h3>Business Skills</h3>
                            <ul className="list-organization">
                            <li className="body-text"><span>&#9755;</span>Customer Research</li>
                            <li className="body-text"><span>&#9755;</span>Ideation and Prototyping</li>
                            <li className="body-text"><span>&#9755;</span>Crowd Management</li>
                            <li className="body-text"><span>&#9755;</span>Event Planning and Coordination</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>  
                    <Fade fraction={0.4} bottom cascade>
                    <div className="skills-logos">
                        
                        <img className="skills-logo" src={reactLogo} alt="React logo"/>
                        <img className="skills-logo" src={ethereumLogo} alt="Ethereum logo"/>
                        <img className="skills-logo" src={nodeJsLogo} alt="Node JS logo"/>
                        <div>
                            <Devices className="skills-logo" alt="Business logo"/>
                        </div>
                    </div>
                    </Fade>
                </div>    
                          
            </div>
        )
    }
}

export default About;