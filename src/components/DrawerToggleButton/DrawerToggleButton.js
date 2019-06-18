import React, {Component} from "react";
import "./DrawerToggleButton.scss";

class DrawerToggleButton extends Component {
    render(){
        return(
            <button className="toggle-button">
                <div className="toggle-button-line"></div>
                <div className="toggle-button-line"></div>
                <div className="toggle-button-line"></div>
            </button>
        );
    }
}

export default DrawerToggleButton;