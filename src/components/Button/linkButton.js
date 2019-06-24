import React, {Component} from "react";
import {ArrowForward} from "@material-ui/icons";
import {Link} from 'react-router-dom';

import "./linkButton.scss";

class LinkButton extends Component{
    render(){
        const {message, linkPath} = this.props;
        return(
            <Link to={linkPath} className="link-container">
                <div className="link-button">
                {message}
                <ArrowForward className="classes.icon link-arrow-icon" />
                </div>
            </Link>
        );
    }
}

export default LinkButton;