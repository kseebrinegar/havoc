import React, { Component } from 'react';
import Video from '../video';

class Work extends Component {
	constructor(props) {
		super(props)
	}
    render() {

    	 const sectionContainerInfo = {
            info: {
                about: 'Work.',
                header: 'Wer\'re tight.',
                paragraph: 'America\'s leading legware brand No Nonesense names Havoc Agency of Record.'
            },
            videoInfo: {
                videoPoster: '//images.contentful.com/fiz3jwws2um7/rP56xo1coCAiE84eOweuq/4cfd265c3506ec21203fd961130e46d1/Black__1_.png?w=1600',
                videoSrc: '//videos.contentful.com/fiz3jwws2um7/BnR0hsPLjwYAeW0E8i2wS/4dbe58061edfbf2e4986e6fd4e92dd0d/AOY_REELMash_v10_2_noH__RESIZE.mp4',
                autoPlay: true,
                loopVideo: true,
                muted: true,
                initPlayState: true
            }
        };

        const info = sectionContainerInfo.info;
    	const videoInfo = sectionContainerInfo.videoInfo;
    	
        return (
            <div className="work">
                <Video pathName={this.props.location.pathname}  videoInfo={videoInfo} />
                <section className="work__make-something-you-love">
                    <h2>Make something you love.</h2>
                </section>
                <section className="work__select-clients">

                </section>
                <section>

                </section>
            </div>
        )
    }
}

export default Work;
