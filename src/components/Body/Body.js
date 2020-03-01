import React from 'react';

import locationIcon from '../../assets/img/locationIcon.svg';

import './Body.scss';

function Body() {
    const employmentData = [
        {
            title: "Full-Stack Web Developer, Tribalyte Technologies",
            date: "Jan 2018 - Present",
            ubication: "Madrid, Spain",
            tasks: [
                "Development and maintenance of different web apps with Angula and ReactJS",
                "Development and maintenance of different hybrid apps with Ionic",
                "Design and implementation of RESTful apis with MEAN techonologies and Firebase",
                "Tasks and projects estimations"
            ]
        },
        {
            title: "Frontend Web Developer, tiko Energy Solutions AG",
            date: "Feb 2019 - Apr 2019",
            ubication: "Zurich, Switzerland",
            tasks: [
                "Development of the Tiko virtual power plant web app with ReactJS"
            ]
        },
        {
            title: "Junior Developer, Totemcat",
            date: "Oct 2016 - Apr 2017",
            ubication: "Madrid, Spain",
            tasks: [
                "Development of different web apps"
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
            title: "Introducción al desarrollo web con Angular, Cursos Tech Institue Samsung-UPM",
            date: "Oct 2017"
        },
        {
            title: "NgRx Essentials, NgSpain",
            date: "Nov 2019"
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
