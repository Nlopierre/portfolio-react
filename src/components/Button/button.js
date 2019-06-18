import React, { Component } from 'react';
import "./button.scss";


class ExternalButton extends Component {

    render(){
        const {message} = this.props;
        return(
            <div className="button">
            {message}
            <span class="mdi mdi-arrow-down-bold-circle-outline"></span>
            </div>
        )
    }
}

export default ExternalButton;