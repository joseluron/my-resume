import React from 'react';

import locationIcon from '../../assets/img/locationIcon.svg';

import './Body.scss';

function Body() {
    const employmentData = [
        {
            title: "Front-End Web Developer, ThePowerMBA",
            date: "June 2020 - Present",
            ubication: "Madrid, Spain",
            tasks: [
                "Development and maintenance of ThePowerMBA; MBA related video courses academy webapp using ReactJS",
                "Development and maintenance of the company data CMS using ReactJS",
                "Implementation of RESTful apis within the App with Redux and Sagas to save the app data",
                "Implementation of a full redesign of the main learning web app",
                "Creation of the main learning web app product tour",
                "Tasks estimations"
            ]
        },
        {
            title: "Front-End Web Developer, tiko Energy Solutions AG",
            date: "Feb 2019 - Apr 2019",
            ubication: "Zurich, Switzerland",
            tasks: [
                "Development and maintenance of TikoPowerApp; electricity usage and setting of inteligent houses webapp using ReactJs and GraphQL",
            ]
        },
        {
            title: "Front-End Web Developer, Tribalyte Technologies",
            date: "Jan 2018 - June 2020",
            ubication: "Madrid, Spain",
            tasks: [
                "Development and maintenance of YouMedic; medical video sharing service webapp using Ionic, Angular and Firebase",
                "Development and maintenance of Auditool; marketing hybrid app using Ionic and Angular",
                "Development and maintenance of the Auditool CMS webapp using ReactJs and Firebase",
                "Development and maintenance of MecaTrain; train screens viewing webapp using vanilla JavaScript",
                "Development and maintenance of DecideInClick; personal decision making hybrid app using Ionic and Angular",
                "Development and maintenance of TikoPowerApp; electricity usage and setting of inteligent houses hybrid app using Ionic, Angular and GraphQL",
                "Development and maintenance of LoeWebApp; electronic architecture book webapp using ReactJS",
                "Development and maintenance of FisiosApp; lungs post-surgery recovery hybrid app using Ionic and ReactJs",
                "Design and implementation of RESTful apis with MEAN technologies, Firebase and GraphQL",
                "Tasks and projects estimations"
            ]
        },
        {
            title: "Junior Developer(Internship), Totemcat",
            date: "Oct 2016 - Apr 2017",
            ubication: "Madrid, Spain",
            tasks: [
                "Development of different webapps using JavaScript related technologies"
            ]
        }
    ];
    const educationData = [
        {
            title: "Software Engineering, Universidad Politécnica de Madrid",
            date: "Sep 2010 - May 2018",
            ubication: "Madrid, Spain",
        }
    ];
    const coursesData = [
        {
            title: "Master Gatsby, Wes Bos",
            date: "Dec 2020"
        },
        {
            title: "NgRx Essentials, NgSpain",
            date: "Nov 2019"
        },
        {
            title: "Fullstack Advanced React and GraphQL, Wes Bos",
            date: "Oct 2018"
        },
        {
            title: "Introducción al desarrollo web con Angular, Cursos Tech Institute Samsung-UPM",
            date: "Oct 2017"
        }        
    ]
    
    return (
        <div className="body-container">
            <div className="body-wrapper">
                <div className="profile-wrapper">
                    <span className="header">Profile</span>
                    <span className="information">Passionate web developer who loves learning new things every day and brings a devotion to helping others in the team. I have experience in estimating tasks and don't mind taking a leadership role if needed. I follow good code practices and I love implementing good looking designs.</span>
                </div>
                <div className="employment-wrapper">
                    <span className="header">Employment History</span>
                    {employmentData.map(job => {
                        return (
                            <div className="job-block">
                                <span className="title">{job.title}</span>
                                <div className="localization-block">
                                    <span className="date">{job.date}</span>
                                    <div className="ubication-wrapper">
                                        <img src={locationIcon} className="icon" alt="location" />
                                        <span className="ubication">{job.ubication}</span>
                                    </div>
                                </div>
                                <ul className="tasks-block">
                                    {job.tasks.map(task => {
                                        return (
                                            <li className="task">{task}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="education-wrapper">
                    <span className="header">Education</span>
                    {educationData.map(education => {
                        return (
                            <div className="education-block">
                                <span className="title">{education.title}</span>
                                <div className="localization-block">
                                    <span className="date">{education.date}</span>
                                    <div className="ubication-wrapper">
                                        <img src={locationIcon} className="icon" alt="location" />
                                        <span className="ubication">{education.ubication}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="courses-wrapper">
                    <span className="header">Courses</span>
                    {coursesData.map(course => {
                        return (
                            <div className="course-block">
                                <span className="title">{course.title}</span>
                                <span className="date">{course.date}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Body;
