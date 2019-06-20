import React, {Component} from "react";
import {slide as Menu} from "react-burger-menu";
import {Link, scrollSpy} from "react-scroll";
import classnames from "classnames";

import "./toolbar.scss";
import logo from "../../assets/logo font blanco.png";

class Toolbar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            prevScrollPosition: window.pageYOffset, 
            navbarIsVisible: true,
            menuIsActive: false
        };
    }   
    
    componentDidMount(){

        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleMenu);

        scrollSpy.update();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleMenu);
    }

    handleMenu = () =>{
        if(window.innerWidth < 1024){
            this.setState({
                menuIsActive: true
            });
        }
        else{
            this.setState({
                menuIsActive: false
            });
        }
    }

    handleScroll = () => {
        const { prevScrollPosition } = this.state;
        
        const currScrollPosition = window.pageYOffset;
        const navbarIsVisible = prevScrollPosition > currScrollPosition;
        
        this.setState({ 
            prevScrollPosition: currScrollPosition,
            navbarIsVisible
        });
    };

    render(){
        return(
        <nav  className={classnames("navbar", {"navbar--hidden": !this.state.navbarIsVisible})}>
            <Link to='home' className="navbar-link" id="logo" spy={true} smooth={true} duration={500}><img alt="Logo" src={logo}/></Link>
            <div  className="spacer"/>
            {this.state.menuIsActive ?
            <div className="menu-container">
                <Menu right>
                    <Link to='about' spy={true} smooth={true} duration={500}><p>About</p></Link>
                    <Link to='portfolio'  spy={true} smooth={true} offset={50} duration={500}><p>Portfolio</p></Link>
                    <Link to='experience'  spy={true} smooth={true} offset={50} duration={500}><p>Experience</p></Link>
                    <Link to='contact'  spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
                </Menu>
            </div>
            :
            <div className="navbar-links">
                <Link to='about' className="navbar-link" spy={true} smooth={true} duration={500}><p>About</p></Link>
                <Link to='portfolio' className="navbar-link"  spy={true} smooth={true} offset={50} duration={500}><p>Portfolio</p></Link>
                <Link to='experience' className="navbar-link"  spy={true} smooth={true} offset={50} duration={500}><p>Experience</p></Link>
                <Link to='contact' className="navbar-link"  spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
            </div>
            }
        </nav>
        );
    }
}

export default Toolbar;