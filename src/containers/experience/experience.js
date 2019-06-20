import React, { Component } from 'react';

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
            company: "Dot Blockchain Media",
            companyLink: "http://dotblockchainmedia.com/",
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
        }
    ];

    companies = {
        0:"BlackRock", 
        1:"Stereotheque", 
        2:"Dot Blockchain Media", 
        3:"New York University"
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
                <div className="experience-role-content"><h3 className="experience-role">{role.name}</h3> at <a href={role.companyLink}>{role.company}</a></div>
                <div className="experience-role-dates">{role.startDate.month + " " + role.startDate.year +" - " + role.endDate.month + " " + role.endDate.year}</div>
                </div>
                <div className="experience-table-content">
                <ul className="experience-table-list">
                {role.description.map((des, i)=>{
                    return(
                    <li key={i} className=""><span>&#9755;</span>{des}</li>
                    )
                })}
                </ul>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="experience-container" id="experience">
                <div className="header">
                    <h1 className="header-content">Where I've Worked</h1>
                </div>
                <div className="experience-content-wrap">
                    <div className="experience-content">
                        {this.displayRole()}
                        <div className="experience-buttons"> 
                            {Object.keys(this.companies).map((key, i)=>{
                                return(
                                <button className="experience-button" key={i} onClick={()=>this.handleCompanyClick(key)} >{this.companies[key]}</button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;