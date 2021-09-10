import React, { Component } from 'react';
import classnames from "classnames";
import {Fade} from "react-reveal";

import "./education.scss";

class Education extends Component {

    constructor(props){
        super(props);
        this.state = {
            institution: 0
        }
    }

    educationExperiences = [
        {
            institution: "New York University",
            companyLink: "https://www.nyu.edu/",
            startDate:{
                month: "August",
                year: "2015"
            },
            endDate:{
                month: "May",
                year: "2019"
            },
            degrees: [
                'Bachelor of Arts in Computer Science',
                'Minor in Business Studies',
                'Minor in Web Development and Applications',
            ],
            awards: [
                'Selected member of the Dean’s List 2016',
                'Nick Russo Award 2016',
                'Founders Day Award 2019'
            ]
        },
        {
            institution: "Pathstream - New York University",
            institutionLink: "https://pathstream.brightspace.com/",
            startDate:{
                month: "February",
                year: "2021"
            },
            endDate:{
                month: "April",
                year: "2019"
            },
            degrees: [
                'Unity Immersive Design Certification ',
            ],

        },
    ];

    institutions = {
        0: "New York University",
        1: "Pathstream",
    };

    handleCompanyClick(key){
        this.setState({
            institution:key
        });
    }

    displayRole(){
        const experience = this.educationExperiences[this.state.institution];
        return(
            <div className="experience-table">
                <div className="experience-table-header">
                    <div className="experience-role-content">
                        <a href={experience.institutionLink}>{experience.institution}</a>
                    </div>
                    <div className="experience-role-dates">
                        { experience.startDate.month + " " + experience.startDate.year +" - " + (experience.endDate.present ? 'Present' : experience.endDate.month + " " + experience.endDate.year)}
                    </div>
                </div>
                <div className="experience-table-content">
                    <Fade fraction={0.4} left cascade appear spy={this.state.company} duration={500}>
                        <ul className="list-organization">
                            {experience.degrees.map((des, i)=>{
                                return(
                                    <li key={i} className="body-text"><span>&#9755;</span><div>{des}</div></li>
                                )
                            })}
                        </ul>
                    </Fade>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div id="education">
                <Fade fraction={0.4} bottom>
                    <div className="header">
                        <h1 className="header-content">Education</h1>
                    </div>
                </Fade>
                <div className="experience-content-wrap">
                    <div className="experience-content">
                        <Fade fraction={0.4} bottom>
                            {this.displayRole()}
                            <div className="experience-buttons">
                                {Object.keys(this.educationExperiences).map((experience, i)=>{
                                    return(
                                        <div className={classnames("experience-button", {"experience-button-active": (this.state.institution === experience)})} key={i} onClick={()=>this.handleCompanyClick(experience)}>{this.institutions[experience]}</div>
                                    );
                                })}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;