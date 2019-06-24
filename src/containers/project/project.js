import React, { Component } from "react";

import "./project.scss";
import projects from "./project.json";

class Project extends Component{

    render(){
        const {project} = this.props;
        const proj = projects[project];
        // const proj = projects[project]; proj.title
        return(
            <div id="project">
                <div className="project-info">
                    <h1 className="project-info-title">{proj.title}</h1>
                    <div className="project-info-subtitle">{proj.subtitle}</div>
                    <div className="project-info-description">{proj.description}</div>
                    <div className="project-info-techstack">{proj.techStack}</div>
                    <div className="project-info-tools">{proj.softwareTools}</div>
                </div>
                <div className="project-carousel">
                    {proj.imgPaths.map((path, i)=>{
                        return(
                            <div key={i} data-src={path} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Project;