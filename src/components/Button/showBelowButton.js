import React, { Component } from 'react';
import {ExpandMore} from "@material-ui/icons";
import classnames from "classnames";

import "./showBelowButton.scss";


class showBelowButton extends Component {
    render(){
        const {message, expanded} = this.props;
        return(
            <div className={classnames("expand-below-button", {"expand-below-button-active": expanded})}>
            {message}
            <ExpandMore className="classes.icon expand-below-arrow-icon" />
            </div>
        )
    }
}

export default showBelowButton;