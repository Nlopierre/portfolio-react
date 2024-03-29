import React, { Component } from 'react';
import {Fade, Zoom} from 'react-reveal';

import "./portfolio.scss";
import strtqePic from "../../assets/strtqe-card.png";
import bmusicPic from "../../assets/bmusic-card.png";
import classnames from "classnames";
import LinkButton from '../../components/Button/linkButton';
import constructionSite from '../../assets/construction-site.png';
import jaxIntroImage from '../../assets/jax-intro-img.jpg';
import budgetTrackerImage from '../../assets/budget-tracker.png';

class Portfolio extends Component {

    pictures = {
        "strtqe-front": strtqePic,
        "strtqe-back": strtqePic,
        "bmusic-front": bmusicPic,
        "bmusic-back": bmusicPic,
        "construction-site-front": constructionSite,
        "jax-front": jaxIntroImage,
        "budget-tracker-front": budgetTrackerImage,
    };

    projects = [
        {
            
            projectName: "Stereotheque",
            projectImgFront: "strtqe-front", //Here goes the image variable
            projectImgBack: "strtqe-back", //Here goes the image variable
            projectDescription: "Worked on Stereotheque's data visualization web app to manage the company's main product",
            projectLink: "/stereotheque",
            projectImgAltFront: "Stereotheque logo",
            projectImgAltBack: ""
        },
        {
            projectName: "bMusic",
            projectImgFront: "bmusic-front", //Here goes the image variable
            projectImgBack: "bmusic-back", //Here goes the image variable
            projectDescription: "Created a semi-decentralized web application to buy songs as well as royalties through the blockchain",
            projectLink: "/bMusic",
            projectImgAltFront: "bMusic logo",
            projectImgAltBack: ""
        },
        {
            projectName: "VR Construction Site",
            projectImgFront: "construction-site-front", //Here goes the image variable
            projectImgBack: "construction-site-back", //Here goes the image variable
            projectDescription: "Created Construction Site in Unity to be used in Oculus Quest 2",
            projectLink: "/construction",
            projectImgAltFront: "Construction Site in 3D for Virtual Reality",
            projectImgAltBack: "Construction Site in 3D for Virtual Reality"
        },
        {
            projectName: "AR Jax The Barbarian",
            projectImgFront: "jax-front", //Here goes the image variable
            projectImgBack: "jax-back", //Here goes the image variable
            projectDescription: "Demo of the life and world of a viking for Android devices (AR).",
            projectLink: "/jax",
            projectImgAltFront: "Game Demo using Augmented Reality",
            projectImgAltBack: "Game Demo using Augmented Reality"
        },
        {
            projectName: "Budget tracker",
            projectImgFront: "budget-tracker-front", //Here goes the image variable
            projectImgBack: "budget-tracker-back", //Here goes the image variable
            projectDescription: "Web app to keep track of my personal budget. UNDER CONSTRUCTION",
            projectLink: "/budget-tracker",
            projectImgAltFront: "Picture of a web app to track personal budgets",
            projectImgAltBack: "Picture of a web app to track personal budgets"
        },
    ];

    render(){
        return(
            <div id="portfolio">
                <Fade fraction={0.4} bottom >
                <div className="header">
                    <h1 className="header-content">Projects</h1>
                </div>
                </Fade>
                <Zoom fraction={0.4} bottom cascade>
                <div className="projects-container">
                    {this.projects.map((card)=>{ 
                        return(
                        
                        <div className="project-card" key={card.projectName}>
                            <div className="project-card-inner">
                                <div className={classnames("project-card-front", card.projectImgFront)}>
                                    <img className="img-front" alt={card.projectImgAltFront} src={this.pictures[card.projectImgFront]}/>
                                </div>
                                <div className={classnames("project-card-back", card.projectImgBack)}>
                                    <div className="card-description">{card.projectDescription}</div>
                                    <div className="card-link">
                                        <LinkButton message={"Learn More"} linkPath={card.projectLink}></LinkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        );                 
                    })}
                </div>
                </Zoom>
            </div>
        )
    }
}

export default Portfolio;