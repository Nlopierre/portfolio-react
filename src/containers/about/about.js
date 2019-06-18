import React, { Component } from 'react';
import './about.scss';
import bioPic from "../../assets/bio-pic.JPG";
import ExternalButton from "../../components/Button/button";

class About extends Component {
    
    openMoreInfo(){
        console.log("This is working");
    }

    render(){
        return(
            <div id="about">
                <div className="info-header">
                    <h1 className="info-header-content">About Me</h1>
                </div>
                <div className="info-container">
                    <div className="info-picture-about">
                        <img src={bioPic} alt="Nicolas Lopierre Aguirre " id="picture-about" />
                    </div>
                    <div className="info-about">
                        <p> 
                        My name is Nicolas Lopierre Aguirre, I'm a software engineer based in New York City, NY 
                        who takes delight in creating high-impact web applications. As a full-stack developer, 
                        I prioritize efficiency when developing the back end while focusing on making the user 
                        interface intuitive, practical, beautiful and pleasant to the users. As a blockchain 
                        enthusiast, I explore the potential of smart contracts with digital assets within creative 
                        industries, and develop them to test proof of concepts.
                        </p>

                        <p>
                        I've always been drawn to entrepreneurship and I firmly believe in the potential of Design 
                        Thinking (Creative Confidence is a book I highly recommend). I use best software engineering 
                        practices to improve business skills in areas such as Customer Research and Business Development.
                        </p>

                        <ExternalButton message={"More About Me"} onClick={()=>this.openMoreInfo}/>
                    </div>
                </div>
                <div id="more-info-container">
                    <h3>Interests</h3>
                    <p>In general, I like reading, working out to stay healthy, watching football (soccer) and gaming every once in a while.</p>

                    <h3>Recommended readings:</h3>
                    <ul>
                    <li>Sapiens: A Brief History of Humankind by Yuval Noah Harari</li>
                    <li>Creative Confidence by Tom and David Kelley</li>
                    <li>Conscious Capitalism by Jonh Mackey and Raj Sisodia</li>
                    <li>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future by Ashlee Vance</li>
                    </ul>
                </div>                
            </div>
        )
    }
}

export default About;