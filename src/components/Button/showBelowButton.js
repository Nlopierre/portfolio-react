import React, { Component } from 'react';
import {ArrowForward} from "@material-ui/icons";

import "./showBelowButton.scss";


class showBelowButton extends Component {
    render(){
        const {message} = this.props;
        return(
            <div className="expand-below-button">
            {message}
            <ArrowForward className="classes.icon expand-below-arrow-icon" />
            </div>
        )
    }
}

export default showBelowButton;