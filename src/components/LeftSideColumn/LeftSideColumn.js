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
    const skillData = {
        "front-end": ["ReactJs(NextJs/Gatsby)", "Redux", "Angular", "Ionic", "Sanity", "Firebase"],
        "back-end": ["NodeJs", "Express", "MongoDB", "Restfull API", "GraphQL", "Headless CMS"],
        "other": ["GIT", "Task Estimation", "Netlify"]
    }
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
                    {Object.keys(skillData).map(tech => {
                        return (
                            <div className="skill-block" key={tech}>
                                <span className="technology">{tech}</span>
                                {skillData[tech].map(skill => {
                                    return (
                                        <span className="skill" key={skill}>{skill}</span>
                                    );
                                })}
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
