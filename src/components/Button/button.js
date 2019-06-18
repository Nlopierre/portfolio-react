import React, { Component } from 'react';
import "./button.scss";


class ExternalButton extends Component {

    render(){
        const {message} = this.props;
        return(
            <div className="button" >
            {message}
            </div>
        )
    }
}

export default ExternalButton;