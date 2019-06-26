import React, { Component } from "react";
import {Fade} from "react-reveal";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./project.scss";
import projects from "./project.json";

import bMusicPic1 from "../../assets/bmusic-carousel-1.png";
import bMusicPic2 from "../../assets/bmusic-carousel-2.png";
import bMusicPic3 from "../../assets/bmusic-carousel-3.png";
import bMusicPic4 from "../../assets/bmusic-carousel-4.png";
import bMusicPic5 from "../../assets/bmusic-carousel-5.png";
import strtqePic1 from "../../assets/strtqe-1.png";
import strtqePic2 from "../../assets/strtqe-2.png";
import strtqePic3 from "../../assets/strtqe-3.png";
import kevnPic from "../../assets/kevn-card.jpg";
import githubLogo from "../../assets/github-icon.png";

class Project extends Component{

    pictures = {
        bmusic:[ 
            bMusicPic1,
            bMusicPic2,
            bMusicPic3,
            bMusicPic4,
            bMusicPic5,
        ],
        strtqe:[
            strtqePic1,
            strtqePic2,
            strtqePic3,
        ],
        kevn:[
            kevnPic
        ]
    }

    render(){
        const {project} = this.props;
        const proj = projects[project];
        
        return(
            <div id="project">
                <Fade bottom>
                <div className="project-carousel">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false}>
                    {proj.imgIndex.map((picIndex, i)=>{
                        return(
                            <img key={i} src={this.pictures[proj.id][picIndex]} alt={"picture of " + proj.title + " number " + i}/>
                        )
                    })}
                </Carousel>
                </div>

                <div className="project-info">
                    <div className="project-info-title">{proj.title}</div>
                    <div className="project-info-subtitle">{proj.subtitle}</div>
                    <div className="project-info-description">{proj.description}</div>
                    <div className="project-software-section">
                        <div className="project-software-subsection">
                            <div className="project-info-techstack">
                                { proj.techStack.map((tech, index)=>{
                                    return(
                                        <div className="project-info-tech" key={index}>{tech}</div>
                                    )})
                                }
                            </div>
                            <div className="project-info-tools">
                                {proj.softwareTools.map((tool, index)=>{
                                    return(
                                        <div className="project-info-tool" key={index}>{tool}</div>
                                    )
                                })}
                            </div>
                        </div>
                        { proj.githubLink !== "" ?
                        <div className="project-software-subsection">
                            <a href={proj.githubLink}  rel="noopener noreferrer" target="_blank">
                                <img className="social-media-icon" src={githubLogo} alt="Github Logo"/>
                            </a>
                        </div> 
                        : 
                        <div className="project-software-subsection"></div>
                        }
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
}

export default Project;