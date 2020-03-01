import React from 'react';

import githubIcon from '../../assets/img/githubIcon.svg';
import linkdinIcon from '../../assets/img/linkdinIcon.svg';

import './LeftSideColumn.scss';

function LeftSideColumn() {
    const infoData = [
        {
            category: "Phone",
            information: 687189968
        },
        {
            category: "Email",
            information: "joseluis.coallac@gmail.com"
        }
    ];
    const linksData = [
        {
            icon: githubIcon,
            alt: "github",
            domain: "Github",
            link: "github.com/joseluron",
            href: "https://github.com/joseluron"
        },
        {
            icon: linkdinIcon,
            alt: "linkdin",
            domain: "Linkdin",
            link: "linkedin.com/in/josé-luis-coalla-cencerrado-797447138",
            href: "https://www.linkedin.com/in/jos%C3%A9-luis-coalla-cencerrado-797447138/"
        }
    ];
    const skillsData = [
        {
            skill: "Angular 2+",
            value: 5
        }, 
        {
            skill: "Ionic",
            value: 5
        },
        {
            skill: "ReactJS",
            value: 5
        },
        {
            skill: "NodeJS",
            value: 4
        },
        {
            skill: "Git",
            value: 4
        },
        {
            skill: "REST",
            value: 3
        }
    ];
    const languagesData = [
        {
            language: "Spanish",
            value: 5
        },
        {
            language: "English",
            value: 4
        }
    ];

    const renderDotValue = value => {
        const valueToRender = [];
        for (let i = 1; i <= value; i++) {
            valueToRender.push(<div className="value" />);
        }

        return valueToRender;
    }

    const renderDotDummy = value => {
        const dummyToRender = [];
        for (let i = 1; i <= value; i++) {
            dummyToRender.push(<div className="dummy-value" />);
        }

        return dummyToRender;
    }
    
    return (
        <div className="left-side-column-container">
            <div className="left-side-column-wrapper">
                <div className="info-wrapper">
                    <span className="header">Info</span>
                    {infoData.map(infoBlock => {
                        return (
                            <div className="category-block">
                                <span className="category">{infoBlock.category}</span>
                                <span className="information">{infoBlock.information}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="links-wrapper">
                    <span className="header">Links</span>
                    {linksData.map(linkBlock => {
                        return (
                            <div className="link-block">
                                <div className="icon-wrapper">
                                    <img src={linkBlock.icon} className="icon" alt={linkBlock.alt} />
                                    <span className="domain">{linkBlock.domain}</span>
                                </div>
                                <a className="link" href={linkBlock.href} target="_blank">{linkBlock.link}</a>
                            </div>
                        );
                    })}
                </div>
                <div className="skills-wrapper">
                    <span className="header">Skills</span>
                    {skillsData.map(skill => {
                        return (
                            <div className="skill-block">
                                <span className="skill">{skill.skill}</span>
                                <div className="value-wrapper">
                                    {renderDotValue(skill.value)}
                                    {renderDotDummy(5 - skill.value)}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="languages-wrapper">
                    <span className="header">Languages</span>
                    {languagesData.map(language => {
                        return (
                            <div className="language-block">
                                <span className="language">{language.language}</span>
                                <div className="value-wrapper">
                                    {renderDotValue(language.value)}
                                    {renderDotDummy(5 - language.value)}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="hobbies-wrapper">
                    <span className="header">Hobbies</span>
                    <span className="hobbies">Going to the movies, gym, going out, eating, listening to music, traveling, hiking, learning</span>
                </div>
            </div>
        </div>
    );
}

export default LeftSideColumn;
