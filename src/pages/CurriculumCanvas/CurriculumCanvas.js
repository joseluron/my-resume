import React from 'react';

import Header from '../../components/Header/Header';
import LeftSideColumn from '../../components/LeftSideColumn/LeftSideColumn';
import Body from '../../components/Body/Body';

import './CurriculumCanvas.scss';

function CurriculumCanvas() {
    return (
        <div className="curriculum-canvas-wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="body-wrapper">
                <LeftSideColumn/>
                <Body/>
            </div>
        </div>
    );
}

export default CurriculumCanvas;
