import React from 'react';
import { NavLink } from 'react-router-dom';

const GridImg = (props) => {
	return (
		<div className="work__make-something-you-love__img-links-container__img">
            <NavLink to='/' style={{backgroundImage: props.backgroundGrid.backgroundImg}}>
                <h3>{props.backgroundGrid.header}</h3>
                <div>
                    <p className="fas fa-long-arrow-alt-right fa-lg"></p>
                </div>
            </NavLink>
        </div>
	);
};

export default GridImg;