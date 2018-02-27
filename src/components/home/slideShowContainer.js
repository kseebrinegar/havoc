import React from 'react';
import Video from './video';

const SlideShowContainer = (props) => {

	const info = props.sectionContainerInfo.info;
    const videoInfo = props.sectionContainerInfo.videoInfo;
   
	return (
		<div className="home__section--slide-show__content--container1" style={{height: window.innerHeight}}>
    		<p>{info.about}</p>
    		<h3>{info.header}</h3>
    		<p className="home__section--slide-show__content__border-line"></p>
    		<p>{info.paragraph}</p>
            {
                videoInfo !== undefined ? <Video pathName={props.pathName} videoInfo={videoInfo} /> : null
            }
        </div>
	);
}

export default SlideShowContainer;