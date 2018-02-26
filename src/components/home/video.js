import React, {Ch } from 'react';
import { Player, BigPlayButton } from 'video-react';

class Video extends React.Component {
	constructor(props) {
		super(props)
		this.playButton = this.playButton.bind(this);

		this.state = {
			playButton: 1
		};
	}
	playButton(e) {

		const video = this.refs.homeVideo;

		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}

	
		this.setState((prevState) => {
			return {
				playButton: prevState.playButton === 1 ? 0 : 1
			}
		});
	}
    render() {

    	const playButtonHeight = this.props.videoInfo.playButtonHeight;
    	const videoHeight = window.innerWidth <= 740 ? (window.innerHeight  / 100) * 40 + 'px': 'auto';
    	const videoSrc = this.props.videoInfo.videoSrc;
    	const videoPoster = this.props.videoInfo.videoPoster;

		return (
			<div className="video--home" style={{height: videoHeight}} onClick={this.playButton}>
				<div style={{top: (playButtonHeight / 2) - 37.5 + 'px', opacity: this.state.playButton, transition: '.5s'}} 
					className="video--homeplay__play-button">
					<p className="fas fa-play"></p>
				</div>
				<video style={{height: videoHeight}} ref="homeVideo">
					<source src={videoSrc}/>
				</video>
			</div>
		);
	}
}

export default Video;
