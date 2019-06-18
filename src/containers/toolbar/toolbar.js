import React, {Component} from "react";
import {slide as Menu} from "react-burger-menu";
import {Link,  Events, scrollSpy} from "react-scroll";
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

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleMenu);

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
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
        console.log("The Inner width is", window.innerWidth);
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
                    <Link to='experiments'  spy={true} smooth={true} offset={50} duration={500}><p>Experiments</p></Link>
                    <Link to='contact'  spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
                </Menu>
            </div>
            :
            <div className="navbar-links">
                <Link to='about' className="navbar-link" spy={true} smooth={true} duration={500}><p>About</p></Link>
                <Link to='portfolio' className="navbar-link"  spy={true} smooth={true} offset={50} duration={500}><p>Portfolio</p></Link>
                <Link to='experiments' className="navbar-link"  spy={true} smooth={true} offset={50} duration={500}><p>Experiments</p></Link>
                <Link to='contact' className="navbar-link"  spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
            </div>
            }
        </nav>
        );
    }
}

export default Toolbar;