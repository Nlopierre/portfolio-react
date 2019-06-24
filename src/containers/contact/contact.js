import React, { Component } from 'react';

import ShowBelowButton from "../../components/Button/showBelowButton";
import "./contact.scss";
import linkedInLogo from "../../assets/linkedin-icon.svg";
import githubLogo from "../../assets/github-icon.png";
import spotifyLogo from "../../assets/spotify-icon.png";



class Contact extends Component {

    render(){
        return(
            <div id="contact">
                <div className="header">
                    <h1 className="header-content">Contact Me</h1>
                </div>
                <div className="contact-body">
                    <div className="message contact-body-content">Do you have any inquiries, questions or potential projects?</div>
                    <ShowBelowButton className="contact-body-content" message={"Send an Email"} onClick={()=>this.openMoreInfo}/>
                    <div className="email contact-body-content">Feel free to send me an email to <a href="mailto:nlopierre@gmail.com">nlopierre "at" gmail.com</a></div>
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
            </div>
        )
    }
}

export default Contact;