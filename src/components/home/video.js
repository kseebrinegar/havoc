import React from 'react';
import _ from 'lodash';

class Video extends React.Component {
	constructor(props) {
		super(props)

		this.playAndPauseButton = this.playAndPauseButton.bind(this);
		this.seekSlider = this.seekSlider.bind(this);
		this.onTimeUpdate = this.onTimeUpdate.bind(this);
		this.volumeOnOrOff = this.volumeOnOrOff.bind(this);
		this.toggleScreen = this.toggleScreen.bind(this);
		this.setVideosControlsPosition = this.setVideosControlsPosition.bind(this);
		this.stopVideoOnWheelEventOrResize = this.stopVideoOnWheelEventOrResize.bind(this);

		this.state = {
			playButtonOpacity: 1,
			controlsContainerDisplay: 'none',
			seekSliderValue: 0,
			currentTime: 0,
			nextTime: 0,
			videoControlsPostion: null,
			volumeUp: 'block',
			volumeDown: 'none',
			videoHeight: null
		};
	}
	stopVideoOnWheelEventOrResize() {

		const video = this.refs.homeVideo;

		video.pause();

		this.setState((prevState) => {
			return {
				playButtonOpacity: 1,
				controlsContainerDisplay: 'none'
			}
		});
	}
	toggleScreen() {

		const video = this.refs.homeVideo;

		if (video.requestFullScreen) {
			video.requestFullScreen();
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		}
	}
	volumeOnOrOff() {

		const video = this.refs.homeVideo;

		if (video.muted === true) {
			video.muted = false;
		} else {
			video.muted = true;
		}

		this.setState(() => {
			return {
				volumeUp: this.state.volumeUp === 'block' ? 'none' : 'block',
				volumeDown: this.state.volumeDown === 'block' ? 'none' : 'block'
			}
		});
	}
	onTimeUpdate() {

		const video = this.refs.homeVideo;
		const seekSlider = this.refs.seekSlider;
		const seekTo = video.currentTime * (100 / video.duration);
		const curMins = Math.floor(video.currentTime / 60);
		let curSecs = Math.floor(video.currentTime - curMins * 60);
		const durMins = Math.floor(video.duration / 60);
		
		if (curSecs < 10) {
			curSecs = '0' + curSecs;
		}

		this.setState(() => {
			return {
				currentTime: curMins + ':' + curSecs,
				nextTime: durMins + ':00',
				seekSliderValue: seekTo
			}
		});

		if (seekTo === 100) {
			this.setState(() => {
				return {
					seekSliderValue: 0,
					controlsContainerDisplay: 'none',
					playButtonOpacity: 1,
				}
			});
		}
	}
	seekSlider(e) {
	
		const video = this.refs.homeVideo;
		const seekSlider = this.refs.seekSlider;
		const seekTo = video.duration * (seekSlider.value / 100);

		video.currentTime = seekTo;

		this.setState(() => {
			return {
				seekSliderValue: seekSlider.value,
			}
		});
	}
	playAndPauseButton() {
		
		const video = this.refs.homeVideo;

		if (video.paused && this.state.seekSliderValue !== 100) {
			video.play();
		} else {
			video.pause();
		}

		this.setState((prevState) => {
			return {
				playButtonOpacity: prevState.playButtonOpacity === 1 ? 0 : 1,
				controlsContainerDisplay: prevState.controlsContainerDisplay === 'none' ? 'flex' : 'none'
			}
		});
	}
	setVideosControlsPosition() {

		const video = this.refs.homeVideo;

		this.setState(() => {
			return {
				videoControlsPostion: video.clientHeight - 40 + 'px',
				videoHeight: video.offsetHeight
			};
		});
	}
	componentDidMount() {

		this.setVideosControlsPosition();
		
		const throttleFunction = _.throttle(() => {
           	this.stopVideoOnWheelEventOrResize();
        }, 500, { 'trailing': false });

		window.addEventListener('resize', () => {
			this.setVideosControlsPosition();
			this.stopVideoOnWheelEventOrResize();
		});

        window.addEventListener("keydown", (e) => { // for key events
        	if (this.props.location === '/') {
				throttleFunction();
        	}
        });

        window.addEventListener('mousewheel', (e) => { // for wheel events 
       		if (this.props.pathName == '/') {
				throttleFunction();
			}
        }); // IE9, Chrome, Safari, Opera*/
 
        window.addEventListener('DOMMouseScroll', (e) => {
        	if (this.props.pathName === '/') {
				throttleFunction();
			}
        }); // Firefox
        window.addEventListener('onmousewheel', (e) => {
            if (this.props.pathName === '/') {
				throttleFunction();
			}
        }); // IE 6/7/8
	}
    render() {

    	const stylePlayButton = {
    		top: (this.state.videoHeight / 2) - 37.5 + 'px', 
    		opacity: this.state.playButtonOpacity, 
    		transition: '.5s'
    	}
    	const styleVideoControls = {
    		display: this.state.controlsContainerDisplay, 
    		top: this.state.videoControlsPostion
    	}
    	const videoHeightContainer = window.innerWidth <= 740 ? (window.innerHeight  / 100) * 40 + 'px': 'auto';
    	const videoSrc = this.props.videoInfo.videoSrc;
    	const videoPoster = this.props.videoInfo.videoPoster;

		return (
			<div className="video--home" style={{height: videoHeightContainer}} >
				<div onClick={this.playAndPauseButton} style={stylePlayButton} className="video--homeplay__play-button">
					<p className="fas fa-play"></p>
				</div>
				<video ref="homeVideo" onTimeUpdate={this.onTimeUpdate} poster={videoPoster} >
					<source src={videoSrc}/>
				</video>
				<div className="video__controls" style={styleVideoControls}>
					<div onClick={this.playAndPauseButton}>
						<p className="fas p fa-pause fa-lg"></p>
					</div>
					<div className="video__controls__seekSlider">
						<span>{this.state.currentTime}</span> / <span>{this.state.nextTime}</span>
						<input onChange={this.seekSlider} ref="seekSlider" type="range" min="0" max="100" value={this.state.seekSliderValue} step="1" />
					</div>
					<div onClick={this.volumeOnOrOff} style={{display: this.state.volumeUp}} className="video__controls__volume--up">
						<p className="fas fa-volume-up fa-lg"></p>
					</div>
					<div onClick={this.volumeOnOrOff} style={{display: this.state.volumeDown}} className="video__controls__volume--down">
						<p className="fas fa-volume-off fa-lg"></p>
					</div>
					<div onClick={this.toggleScreen} className="video__controls__full-screen">
						<p className="fas fa-arrows-alt fa-lg"></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Video;
