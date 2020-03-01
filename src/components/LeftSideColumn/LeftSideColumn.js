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
            </div>
        </div>
    );
}

export default LeftSideColumn;
