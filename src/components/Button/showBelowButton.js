import React, { Component } from 'react';
import {ExpandMore} from "@material-ui/icons";

import "./showBelowButton.scss";


class showBelowButton extends Component {
    render(){
        const {message} = this.props;
        return(
            <div className="expand-below-button">
            {message}
            <ExpandMore className="classes.icon expand-below-arrow-icon" />
            </div>
        )
    }
}

export default showBelowButton;