import React, { Component } from 'react';
import classnames from "classnames";
import {Fade} from "react-reveal";

import "./experience.scss";

class Experience extends Component {

    constructor(props){
        super(props);
        this.state = {
            company: 0
        }
    }

    roles=[
        {
            name: "Software Engineering Summer Analyst",
            company: "BlackRock",
            companyLink: "https://www.blackrock.com/",
            startDate:{
                month: "May",
                year: "2018"
            },
            endDate:{
                month: "August",
                year: "2018"
            },
            description: [
                "Built a data visualization web application for the Reconciliation team of the world’s largest asset manager.",
                "Assisted with the development of API calls to filter large amounts of data for data visualization app.",
                "Created portfolio proposal consisting of Tech Exchange-Traded Funds (ETFs) destined to young families.",
                "Created internal web application to promote amicable work environment and eco-friendly behaviors"
            ]
        },
        {
            name: "Corporate Development Stereo-Intern",
            company: "Stereotheque",
            companyLink: "http://stereotheque.com/",
            startDate:{
                month: "February",
                year: "2017"
            },
            endDate:{
                month: "April",
                year: "2018"
            },
            description: [
                "Conducted customer research following Steve Blank's Lean strategy",
                "Assisted with ideation process in prototyping UI/UX for mobile app and website.",
                "Identified and reached out potential partnerships with which we could develop new business opportunities.",
                "Assisted with pitch decks in meetings with Venture Capitals.",
                "Built a management web application using React and Google Firebase to supervise the company’s main product."
            ]
        },
        {
            name: "Business Analyst Intern",
            company: "Verifi Media",
            companyLink: "https://verifi.media/",
            startDate:{
                month: "February",
                year: "2019"
            },
            endDate:{
                month: "May",
                year: "2019"
            },
            description: [
                "Create a new business and technical requirements file that assembles all documentation from ongoing projects.",
                "Support the Head of Product and CEO in optimizing the company’s operations.",
                "Advising with blockchain technical requirements of the company’s main product."
            ]
        },
        {
            name: "Resident Assistant",
            company: "New York University",
            companyLink: "https://www.nyu.edu/",
            startDate:{
                month: "May",
                year: "2017"
            },
            endDate:{
                month: "May",
                year: "2019"
            },
            description: [
                "Create a community and promote Hispanic culture through social/educational programs with residents.",
                "Mediating roommate conflicts and assisting with daily emergency coverage rotation.",
                "Assist with operations of the resource center and provide guidance to residents regarding NYU’s resources."
            ]
        },
        {
            name: "Software Engineer 2 - Analyst",
            company: "BlackRock",
            companyLink: "https://www.blackrock.com/",
            startDate:{
                month: "July",
                year: "2019"
            },
            endDate: {
                present: true
            },
            description: [
                'Maintained and optimized the user Interface and backend servers of a multi-tier Risk Analysis web application',
                'Developed a micro-frontend ready app to serve as one-stop-shop for BlackRock’s ETF clients to replace current systems that manage over 3 trillion dollars in ETFs world-wide.',
                'Created company standard library web components using StencilJS, Angular and React for company-wide use, resulting in over 160 apps using it to unify the look and feel of all systems from the company'
            ]
        },
    ];

    companies = {
        0: "BlackRock - Intern",
        1: "Stereotheque",
        2: "Dot Blockchain Media",
        3: "New York University",
        4: "BlackRock - Analyst",
    };

    handleCompanyClick(key){
        this.setState({
            company:key
        });
    }

    displayRole(){
        const role = this.roles[this.state.company];
        return(
            <div className="experience-table">
                <div className="experience-table-header">
                    <div className="experience-role-content">
                        <div className="experience-role">{role.name}</div><div>&nbsp;at&nbsp;</div><a href={role.companyLink}>{role.company}</a>
                    </div>
                    <div className="experience-role-dates">
                        { role.startDate.month + " " + role.startDate.year +" - " + (role.endDate.present ? 'Present' : role.endDate.month + " " + role.endDate.year)}
                    </div>
                </div>
                <div className="experience-table-content">
                <Fade fraction={0.4} left cascade appear spy={this.state.company} duration={500}>
                <ul className="list-organization">
                {role.description.map((des, i)=>{
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
            <div id="experience">
                <Fade fraction={0.4} bottom>
                <div className="header">
                    <h1 className="header-content">Where I've Worked</h1>
                </div>
                </Fade>
                <div className="experience-content-wrap">
                    <div className="experience-content">
                    <Fade fraction={0.4} bottom>
                        {this.displayRole()}
                        <div className="experience-buttons"> 
                            {Object.keys(this.companies).map((company, i)=>{
                                return(
                                <div className={classnames("experience-button", {"experience-button-active": (this.state.company === company)})} key={i} onClick={()=>this.handleCompanyClick(company)}>{this.companies[company]}</div>
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

export default Experience;