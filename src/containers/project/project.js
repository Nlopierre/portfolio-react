import React, { Component } from "react";

import "./project.scss";
import projects from "./project.json";

class Project extends Component{

    render(){
        const {project} = this.props;
        console.log(project);
        return(
            <div></div>
        );
    }
}

export default Project;