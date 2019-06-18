import React, {Component} from "react";
import {Link} from "react-scroll";

import "./SideDrawer.scss";

class SideDrawer extends Component {
    render(){
        return(
            <nav className="side-drawer">
                <Link to='about' className="drawer-link" spy={true} smooth={true} duration={500}>About</Link>
                <Link to='portfolio' className="drawer-link"  spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
                <Link to='experiments' className="drawer-link"  spy={true} smooth={true} offset={50} duration={500}>Experiments</Link>
                <Link to='contact' className="drawer-link"  spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            </nav>
        );
    }
}

export default SideDrawer;