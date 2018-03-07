import React, { Component } from 'react';
import _ from 'lodash';
import SlideShowContainer from './slideShowContainer';

class Home extends Component {
	constructor() {
		super()
        this.scrollToSection = this.scrollToSection.bind(this);
        this.changeState = this.changeState.bind(this);
        this.swipeEvent = this.swipeEvent.bind(this);
        this.resizeEvent = this.resizeEvent.bind(this);
        this.throttle = _.throttle((e, express1, express2) => {
            this.scrollToSection(e, express1, express2);
        }, 500, { 'trailing': false });

		this.state = {
			animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
			animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
            homeScrollDown: 0,
            backgroundImg: {
                1: 'fade-in',
                2: 'fade-out',
                3: 'fade-out',
                4: 'fade-out'
            },
            slideShowContentPosition: 0,
            isUserAtTopOfPage: true,
            counter: 1,
            touchStart: null,
            touchMove: null
		}
	}
    changeState(changeState) {
    
        this.setState((preveState) => {

            return {
                animationLine: changeState.animationLine !== undefined ? changeState.animationLine : preveState.animationLine,
                animationPara: changeState.animationPara !== undefined ? changeState.animationPara : preveState.animationPara,
                homeScrollDown: changeState.homeScrollDown !== undefined ? changeState.homeScrollDown : preveState.homeScrollDown,
                isUserAtTopOfPage: changeState.isUserAtTopOfPage !== undefined ? changeState.isUserAtTopOfPage : preveState.isUserAtTopOfPage,
                slideShowContentPosition: changeState.slideShowContentPosition !== undefined ? changeState.slideShowContentPosition : preveState.slideShowContentPosition,
                counter: changeState.counter !== undefined ? changeState.counter : preveState.counter,
                backgroundImg: {
                    1: changeState.backgroundImg[1] !== undefined ? changeState.backgroundImg[1] : preveState.backgroundImg[1],
                    2: changeState.backgroundImg[2] !== undefined ? changeState.backgroundImg[2] : preveState.backgroundImg[2],
                    3: changeState.backgroundImg[3] !== undefined ? changeState.backgroundImg[3] : preveState.backgroundImg[3],
                    4: changeState.backgroundImg[4] !== undefined ? changeState.backgroundImg[4] : preveState.backgroundImg[4],
               },
               touchStart: changeState.touchStart !== undefined ? changeState.touchStart : preveState.touchStart,
               touchMove: changeState.touchMove !== undefined ? changeState.touchMove : preveState.touchMove,
            }
        });
    }
    scrollToSection(e, express1, express2) {
       
        if (express1 && this.state.isUserAtTopOfPage) {

            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
                homeScrollDown: - window.innerHeight,
                isUserAtTopOfPage: false,
                touchMove: null,
                touchStart: null,
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });

            return;
        } else if (express2 && !this.state.isUserAtTopOfPage && this.state.slideShowContentPosition === 0) {

            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                homeScrollDown: 0,
                isUserAtTopOfPage: true,
                touchMove: null,
                touchStart: null,
                counter: 1,
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });
           
            return;
        } else if (express1 && !this.state.isUserAtTopOfPage) {
         
            if (this.state.counter >= 4) {
                return;
            }

            this.changeState({
                slideShowContentPosition: this.state.slideShowContentPosition - (window.innerHeight),
                counter: this.state.counter + 1,
                touchMove: null,
                touchStart: null,
                backgroundImg: {
                    1: (this.state.counter + 1) === 1 ? 'fade-in' : 'fade-out',
                    2: (this.state.counter + 1) === 2 ? 'fade-in' : 'fade-out',
                    3: (this.state.counter + 1) === 3 ? 'fade-in' : 'fade-out',
                    4: (this.state.counter + 1) === 4 ? 'fade-in' : 'fade-out'
                }
            });

            return;
        } else if (express2 && !this.state.isUserAtTopOfPage) {
            
            this.changeState({
                slideShowContentPosition: this.state.slideShowContentPosition + (window.innerHeight),
                counter: this.state.counter - 1,
                touchMove: null,
                touchStart: null,
                backgroundImg: {
                    1: (this.state.counter - 1) === 1 ? 'fade-in' : 'fade-out',
                    2: (this.state.counter - 1) === 2 ? 'fade-in' : 'fade-out',
                    3: (this.state.counter - 1) === 3 ? 'fade-in' : 'fade-out',
                    4: (this.state.counter - 1) === 4 ? 'fade-in' : 'fade-out'
                }
            });
        }      
    }
    swipeEvent(e) {
      
        if (e.type === 'touchstart') {
            
            this.changeState({
                touchStart: Math.round(e.touches[0].clientY),
                backgroundImg: {
                    1: this.state.backgroundImg[1],
                    2: this.state.backgroundImg[2],
                    3: this.state.backgroundImg[3],
                    4: this.state.backgroundImg[4],
                }
            });
        } 

        if (e.type === 'touchmove') {

            this.changeState({
                touchMove: Math.round(e.touches[0].clientY),
                backgroundImg: {
                    1: this.state.backgroundImg[1],
                    2: this.state.backgroundImg[2],
                    3: this.state.backgroundImg[3],
                    4: this.state.backgroundImg[4],
                }
            });
            e.preventDefault();
        } 
    }
    resizeEvent() {

        this.changeState({
            animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
            animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
            homeScrollDown: 0,
            backgroundImg: {
                1: 'fade-in',
                2: 'fade-out',
                3: 'fade-out',
                4: 'fade-out'
            },
            slideShowContentPosition: 0,
            isUserAtTopOfPage: true,
            counter: 1,
            touchStart: null,
            touchMove: null,
        });
    }
    componentWillUnmount() {

        document.body.style.overflow = 'visible';

        window.removeEventListener('keydown', this.throttle);
        window.removeEventListener('mousewheel', this.throttle);
        window.removeEventListener('DOMMouseScroll', this.throttle);
        window.removeEventListener('onmousewheel', this.throttle);
        window.removeEventListener('touchstart', this.swipeEvent);
        window.removeEventListener('touchmove', this.swipeEvent);
        window.removeEventListener('touchend', this.throttle);
        window.removeEventListener('resize', this.resizeEvent);
    }
    componentDidMount() {
       
       const swipeContainerMobile = this.refs.swipeMobile

       swipeContainerMobile.addEventListener("touchstart", this.swipeEvent);
       swipeContainerMobile.addEventListener("touchmove",  this.swipeEvent);
       swipeContainerMobile.addEventListener("touchend", (e) => {
            this.throttle(e, this.state.touchMove < Number(this.state.touchStart - 100) && this.state.touchMove !== null , this.state.touchMove > Number(this.state.touchStart + 100) && this.state.touchMove !== null);
       });
        
        window.addEventListener('keydown', (e) => {
            this.throttle(e, e.keyCode === 40, e.keyCode === 38);
        });

        window.addEventListener('mousewheel', (e) => {
            this.throttle(e, e.wheelDelta <= -120, e.wheelDelta >= 120);
        });

        window.addEventListener('DOMMouseScroll', (e) => {
            this.throttle(e, e.detail >= 1, e.detail <= -1);
        });

        window.addEventListener('onmousewheel', (e) => {
            this.throttle(e, e.wheelDelta <= -120, e.wheelDelta >= 120);
        });

        setTimeout(() => {

            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                backgroundImg: {
                    1: this.state.backgroundImg[1],
                    2: this.state.backgroundImg[2],
                    3: this.state.backgroundImg[3],
                    4: this.state.backgroundImg[4],
                },
            });
        }, 1000)
        
    }
	componentWillMount() {

        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        window.addEventListener('resize', this.resizeEvent);
	}
    render() {

        const backgroundImages = {
            one: 'url(//images.contentful.com/fiz3jwws2um7/woFlGGC3w4YqKmgSKUcUe/b28a430d5fd2d013087e270dbc7c0f0a/translator_Home_LARGE__1_.jpg?w=1600',
            two: 'url(/img/home/slider2.jpg)',
            three: 'url(//images.contentful.com/fiz3jwws2um7/3no5OgViEUmiicKSaygcsa/3d784af6b1ab39c7a4da0b1c03a4f747/ZelleSpot_Home_LARGE__1_.jpg?w=1600)',
            four: 'url(/img/home/slider4.jpg)',
        }
        const sectionContainerInfo1 = {
            info: {
                about: 'Work.',
                header: 'Wer\'re tight.',
                paragraph: 'America\'s leading legware brand No Nonesense names Havoc Agency of Record.'
            },
            videoInfo: {
                videoPoster: '//images.contentful.com/fiz3jwws2um7/5mQmrvVDZCsY6uiKGmWQwa/d93f41bcb8482db75eb9be21132abe1f/translatortvposter.jpg?w=1600',
                videoSrc: '//videos.contentful.com/fiz3jwws2um7/201F4YQCtmEIMm4eMyqkI0/929be99e38e63bccd184881c485f752e/SuperBowlNoText.mov',
                loopVideo: false,
                autoPlay: false,
                muted: false,
                initPlayState: false
            }
        };
        const sectionContainerInfo2 = {
            info: {
                about: 'About.',
                header: 'Meet The Translator.',
                paragraph: 'Havoc & Quicken Loans make the comples super simple with a new commercial for Rocket Mortgage.'
            }
        };
        const sectionContainerInfo3 = {
            info: {
                about: 'Carreers.',
                header: 'America.',
                paragraph: 'America\'s leading legware brand No Nonesense names Havoc Agency of Record.'
            },
            videoInfo: {
                videoPoster: '//images.contentful.com/fiz3jwws2um7/3SFBAMZ4bmiYMoqack028i/8508bd51bfa811f9952d20d801baa70f/zelletvposter.jpg?w=1600',
                videoSrc: '//videos.contentful.com/fiz3jwws2um7/2U7wQroHzyOQuCs88AggmI/af67357f09dbbce046e8232e3dd8782b/WANN0012000H_City_60_Social_1920x1080.mp4',
                loopVideo: false,
                autoPlay: false,
                muted: false,
                initPlayState: false
            }
        };
        const sectionContainerInfo4 = {
            info: {
                about: 'Contact.',
                header: 'What matters now.',
                paragraph: 'Huge partnered with America\'s leading banks to create & launch Zelle, the best way to send & receive money.'
            }
        };

        return (
            <div className="home" style={{top: this.state.homeScrollDown + 'px'}}>
                <div ref="swipeMobile">
                    <section className="home__section--havoc" style={{height: window.innerHeight + 'px'}}>
                    	<h1 className="home__section--havoc__title">Havoc</h1>
                    	<div className="home__section--havoc__animation-container">
                    		<p className={this.state.animationPara}>Today at Havoc</p>
                    		<p className={this.state.animationLine}></p>
                    	</div>
                    </section>
                    <section className="home__section--slide-show" style={{height: window.innerHeight + 'px', paddingTop: window.innerHeight + 'px'}}>
                    	<p className="home__section--slide-show__counter">0{this.state.counter}.</p>
       					<p className="home__section--slide-show__bottom-border"></p>
                    	<div className="home__section--slide-show__content" style={{height: window.innerHeight * 4 + 'px', top: this.state.slideShowContentPosition + 'px'}}>
                            <SlideShowContainer pathName={this.props.location.pathname} sectionContainerInfo={sectionContainerInfo1} />
                            <SlideShowContainer pathName={this.props.location.pathname} sectionContainerInfo={sectionContainerInfo2} />
                            <SlideShowContainer pathName={this.props.location.pathname} sectionContainerInfo={sectionContainerInfo3} />
                            <SlideShowContainer pathName={this.props.location.pathname} sectionContainerInfo={sectionContainerInfo4} />
                    	</div>
                        <div className={this.state.backgroundImg[1] + " home__section--slide-show--backgorund-img"} style={{height: window.innerHeight + 'px', backgroundImage: backgroundImages.one }}></div>
                        <div className={this.state.backgroundImg[2] + " home__section--slide-show--backgorund-img"} style={{height: window.innerHeight + 'px', backgroundImage: backgroundImages.two }}></div>
                        <div className={this.state.backgroundImg[3] + " home__section--slide-show--backgorund-img"} style={{height: window.innerHeight + 'px', backgroundImage: backgroundImages.three }}></div>
                        <div className={this.state.backgroundImg[4] + " home__section--slide-show--backgorund-img"} style={{height: window.innerHeight + 'px', backgroundImage: backgroundImages.four }}></div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;

