import React, { Component } from 'react';
import classnames from "classnames";
import {Fade} from "react-reveal";

import ShowBelowButton from "../../components/Button/showBelowButton";
import "./contact.scss";
import linkedInLogo from "../../assets/linkedin-icon.svg";
import githubLogo from "../../assets/github-icon.png";
import spotifyLogo from "../../assets/spotify-icon.png";



class Contact extends Component {
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

    render(){
        return(
            <div id="contact">
                <Fade fraction={0.4} bottom>
                <div className="header">
                    <h1 className="header-content">Contact Me</h1>
                </div>
                <div className="contact-body">
                    <div className="message contact-body-content">Do you have any inquiries, questions or potential projects?</div>
                    <div  className="contact-body-content" onClick={()=>this.openMoreInfo()}>
                        <ShowBelowButton message={"Send an Email"} />
                    </div>
                    <div className={classnames("email-hide","contact-body-content", {"email-show": this.state.expandMoreInfo})}>Feel free to send me an email to <a href="mailto:nlopierre@gmail.com">nlopierre "at" gmail.com</a></div>
                </div>
                <div className="contact-social-media">
                    <a href="https://www.linkedin.com/in/nicolas-lopierre-aguirre-449925a3/"  rel="noopener noreferrer" target="_blank">
                        <img className="social-media-icon" src={linkedInLogo} alt="LinkedIn Logo"/>
                    </a>
                    <a href="https://github.com/Nlopierre"  rel="noopener noreferrer" target="_blank">
                        <img className="social-media-icon" src={githubLogo} alt="Github Logo"/>
                    </a>
                    <a href="https://open.spotify.com/user/12133408919?si=sQLJvyO5R0-6OCyFpRmYFw"  rel="noopener noreferrer" target="_blank">
                        <img className="social-media-icon" src={spotifyLogo} alt="Spotify Logo"/>
                    </a>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;