import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./portfolio.scss";

class Portfolio extends Component {

    projects = [
        {
            
            projectName: "Stereotheque",
            projectImgFront: "", //Here goes the image variable
            projectImgBack: "", //Here goes the image variable
            projectDescription: "Worked on data visualization web app to manage Stereotheque's main product",
            projectLink: "/stereotheque",
            projectImgAltFront: "Stereotheque logo",
            projectImgAltBack: ""
        },
        {
            projectName: "bMusic",
            projectImgFront: "", //Here goes the image variable
            projectImgBack: "", //Here goes the image variable
            projectDescription: "Created a semi-decentralized web application to buy songs as well as royalties through the blockchain",
            projectLink: "/bMusic",
            projectImgAltFront: "bMusic logo",
            projectImgAltBack: ""
        },
        {
            projectName: "Kevn",
            projectImgFront: "", //Here goes the image variable
            projectImgBack: "", //Here goes the image variable
            projectDescription: "Created official web app, and manage services from producer and song writer Kevin Aguirre (Kevn)",
            projectLink: "/Kevn",
            projectImgAltFront: "Kevn playing the guitar",
            projectImgAltBack: ""
        },
    ];

    render(){
        return(
            <div id="portfolio">
                <div className="header">
                    <h1 className="header-content">Projects</h1>
                </div>
                <div className="projects-container">
                    {this.projects.map((card)=>{ 
                        return(
                        <div className="project-card" key={card.projectName} >
                            
                            <div className="project-card-front">
                                <img alt={card.projectImgAltFront} src={card.projectImgFront}/>
                                <div>{card.projectName}</div>
                            </div>
                            <div className="project-card-back">
                                <img alt={card.projectImgAltBack} src={card.projectImgBack}/>
                                <div>{card.projectDescription}</div>
                                <Link to={card.projectLink}>Learn More</Link>
                            </div>
                        </div>  
                        );                 
                    })}
                </div>
            </div>
        )
    }
}

export default Portfolio;