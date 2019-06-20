import React, { Component } from 'react';
import {ArrowForward} from "@material-ui/icons";

import "./externalButton.scss";


class ExternalButton extends Component {



    render(){
        const {message} = this.props;
        return(
            <div className="button">
            {message}
            <ArrowForward className="classes.icon arrow-icon" />
            
            </div>
        )
    }
}

export default ExternalButton;