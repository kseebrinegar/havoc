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
		this.executeWindowEvents = this.executeWindowEvents.bind(this);
		this.styleVideoContainer = this.styleVideoContainer.bind(this);
		this.styleVideo = this.styleVideo.bind(this);
		this.stylePlayButton = this.stylePlayButton.bind(this);

		this.state = {
			playButtonOpacity: 1,
			controlsContainerDisplay: 'none',
			seekSliderValue: 0,
			currentTime: 0,
			nextTime: 0,
			videoControlsPostion: null,
			volumeUp: 'block',
			volumeDown: 'none',
			videoHeight: null,
			windowWidth: window.innerWidth,
			videoMuted: this.props.videoInfo.muted,
			initPlayState: this.props.videoInfo.initPlayState,
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

		if (!this.state.initPlayState) {

			if (video.paused && this.state.seekSliderValue !== 100) {
				video.play();
			} else {
				video.pause();
			}
	
		}

		this.setState((prevState) => {
			return {
				playButtonOpacity: prevState.playButtonOpacity === 1 ? 0 : 1,
				controlsContainerDisplay: prevState.controlsContainerDisplay === 'none' ? 'flex' : 'none',
				videoMuted: prevState.initPlayState === false ? prevState.initPlayState : (prevState.videoMuted === true ? false : true)
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
	componentWillUnmount() {

     	window.removeEventListener('mousewheel', this.executeWindowEvents);
        window.removeEventListener('DOMMouseScroll', this.executeWindowEvents);
        window.removeEventListener('DOMMouseScroll', this.executeWindowEvents);
        window.removeEventListener('onmousewheel', this.executeWindowEvents);
        window.removeEventListener('resize', this.executeWindowEvents);
        
    }
    executeWindowEvents() {
    	if (this.props.pathName === '/') {

    		this.setVideosControlsPosition();
			this.stopVideoOnWheelEventOrResize();

		} else {

			this.setState(() => {
				return {
					windowWidth: window.innerWidth
				}
			});
		}
    }
	componentDidMount() {
		
		window.addEventListener('resize', this.executeWindowEvents);
        window.addEventListener("keydown", this.executeWindowEvents);
        window.addEventListener('mousewheel', this.executeWindowEvents);
        window.addEventListener('DOMMouseScroll', this.executeWindowEvents);
        window.addEventListener('onmousewheel', this.executeWindowEvents);

	}
	stylePlayButton() {

		if (this.props.pathName !== '/') {

			return {
    			opacity: this.state.playButtonOpacity, 
    			transition: '.5s',
    		}

		} else {

			return {
				top: (this.state.videoHeight / 2) - 37.5 + 'px', 
    			opacity: this.state.playButtonOpacity, 
    			transition: '.5s',
    			transform: 'translateX(-50%)'
    		}

		}
	}
	styleVideoContainer() {

		if (this.props.pathName !== '/') {

			return {
				position: 'relative',
				top: '0px',
    			left: '0px',
    			width:'100%',
    			backgroundColor: 'red',
    			height: '80vh',
    			width: '100%',
  				overflow: 'hidden',
  				right: '0',
			}

		} else {

			return {
				height: window.innerWidth <= 740 ? (window.innerHeight  / 100) * 40 + 'px': 'auto'
			}
		}

	}
	styleVideo() {

		if (this.props.pathName !== '/') {

			return {
				position: 'absolute',
   				minWidth: '100%',
    			minHeight: '100%',
   				width: 'auto',
    			height: 'auto',
    			top: '50%',
    			left: '50%',
    			transform: 'translate(-50%, -50%)'
			}
		}
	}
    render() {
    	const homeStylePlayButton = {
    		top: (this.state.videoHeight / 2) - 37.5 + 'px', 
    		opacity: this.state.playButtonOpacity, 
    		transition: '.5s',
    		transform: 'translateX(-50%)'
    	}
    	const styleVideoControls = {
    		display: this.state.controlsContainerDisplay, 
    		top: this.state.videoControlsPostion
    	}
    	
    	const { videoSrc, videoPoster, loopVideo, autoPlay } = this.props.videoInfo;
    
		return (
			<div className="video--home" style={this.styleVideoContainer()} >
				<div onClick={this.playAndPauseButton} style={this.stylePlayButton()} className="video--homeplay__play-button">
					<p className="fas fa-play"></p>
				</div>
				<video muted={this.state.videoMuted} autoPlay={autoPlay} loop={loopVideo} ref="homeVideo" onTimeUpdate={this.onTimeUpdate} poster={videoPoster} style={this.styleVideo()}>
					<source src={videoSrc}/> 
				</video>
				<div className="video__controls" style={styleVideoControls}>
					<div onClick={this.playAndPauseButton} style={this.props.pathName !== '/' ? {padding: '0 25px'} : null}>
						<p className="fas p fa-pause fa-lg"></p>
					</div>
					<div className={this.props.pathName === '/' ? 'video__controls__seekSlider--home' : 'video__controls__seekSlider'} style={this.props.pathName !== '/' ? {padding: '0 25px'} : null}>
						<span>{this.state.currentTime}</span> / <span>{this.state.nextTime}</span>
						<input onChange={this.seekSlider} ref="seekSlider" type="range" min="0" max="100" value={this.state.seekSliderValue} step="1" />
					</div>
					<div onClick={this.volumeOnOrOff} style={{display: this.state.volumeUp}} className="video__controls__volume--up">
						<p className="fas fa-volume-up fa-lg"></p>
					</div>
					<div onClick={this.volumeOnOrOff} style={{display: this.state.volumeDown}} className="video__controls__volume--down" >
						<p className="fas fa-volume-off fa-lg"></p>
					</div>
					<div onClick={this.toggleScreen} className="video__controls__full-screen" style={this.props.pathName !== '/' ? {padding: '0 25px'} : null}>
						<p className="fas fa-arrows-alt fa-lg"></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Video;
