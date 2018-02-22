import React, { Component } from 'react';
import _ from 'lodash';
import { Player } from 'video-react';


class Home extends Component {
	constructor() {
		super()
        this.scrollToSection = this.scrollToSection.bind(this);
        this.changeState = this.changeState.bind(this);
        this.swipeEvent = this.swipeEvent.bind(this);
        this.resizeEvent = this.resizeEvent.bind(this);
		this.state = {
			animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
			animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
            homeScrollDown: 0,
            windowHeight: window.innerHeight,
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
               windowHeight: changeState.windowHeight !== undefined ? changeState.windowHeight : preveState.windowHeight
            }
        });
    }
    scrollToSection(e, express1, express2) {
  
        if (express1 && this.state.isUserAtTopOfPage) {

            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
                homeScrollDown: - this.state.windowHeight,
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
                slideShowContentPosition: this.state.slideShowContentPosition - (this.state.windowHeight),
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
                slideShowContentPosition: this.state.slideShowContentPosition + (this.state.windowHeight),
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
            windowHeight: window.innerHeight,
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
        });
    }
    componentDidMount() {
        
        const swipeContainerMobile = document.getElementById('swipe-container-mobile')
        const throttleFunction = _.throttle((e, express1, express2) => {
            this.scrollToSection(e, express1, express2);
           
        }, 500, { 'trailing': false });

        swipeContainerMobile.addEventListener("touchstart", this.swipeEvent);
        swipeContainerMobile.addEventListener("touchmove", this.swipeEvent);
        swipeContainerMobile.addEventListener("touchend", (e) => {
            throttleFunction(e, this.state.touchMove < Number(this.state.touchStart - 50) , this.state.touchMove > Number(this.state.touchStart + 50));
        });

        window.addEventListener("keydown", function(e) { // for key events
            throttleFunction(e, e.keyCode === 40, e.keyCode === 38);
        });

        window.addEventListener('mousewheel', function(e) { // for wheel events 
            throttleFunction(e, e.wheelDelta <= -120, e.wheelDelta >= 120);
        }); // IE9, Chrome, Safari, Opera*/
 
        window.addEventListener('DOMMouseScroll', function(e) {
            throttleFunction(e, e.wheelDelta <= -120, e.wheelDelta >= 120);
        }); // Firefox
        window.addEventListener('onmousewheel', function(e) {
            throttleFunction(e, e.wheelDelta <= -120, e.wheelDelta >= 120);
        }); // IE 6/7/8
    }
	componentWillMount() {

		setTimeout(() => {

            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                windowHeight: window.innerHeight,
                backgroundImg: {
                    1: this.state.backgroundImg[1],
                    2: this.state.backgroundImg[2],
                    3: this.state.backgroundImg[3],
                    4: this.state.backgroundImg[4],
                }
            });  
		}, 1000);

        window.addEventListener('resize', (e) => {
            this.resizeEvent();
        });
	}
    render() {

        return (
            <div className="home" style={{top: this.state.homeScrollDown + 'px'}}>
                <div id="swipe-container-mobile">
                    <section className="home__section--havoc" style={{height: this.state.windowHeight + 'px'}}>
                    	<h1 className="home__section--havoc__title">Havoc</h1>
                    	<div className="home__section--havoc__animation-container">
                    		<p className={this.state.animationPara}>Today at Havoc</p>
                    		<p className={this.state.animationLine}></p>
                    	</div>
                    </section>
                    <section className="home__section--slide-show" style={{height: this.state.windowHeight + 'px', paddingTop: this.state.windowHeight + 'px'}}>
                    	<p className="home__section--slide-show__counter">0{this.state.counter}.</p>
       					<p className="home__section--slide-show__bottom-border"></p>
                    	<div className="home__section--slide-show__content" style={{height: this.state.windowHeight * 4 + 'px', top: this.state.slideShowContentPosition + 'px'}}>
                            <div className="home__section--slide-show__content--container1" style={{height: this.state.windowHeight}}>
                        		<p>Work.</p>
                        		<h3>We're tight.</h3>
                        		<p className="home__section--slide-show__content__border-line"></p>
                        		<p>America's leading legware brand No Nonesense names Havoc 
                        		Agency of Record.</p>
                                <Player className="video" playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /> 
                            </div>
                             <div className="home__section--slide-show__content--container2" style={{height: this.state.windowHeight}}>
                                <p>About.</p>
                                <h3>Meet The Translator.</h3>
                                <p className="home__section--slide-show__content__border-line"></p>
                                <p>Havoc & Quicken Loans make the comples super simple with a 
                                new commercial for Rocket Mortgage.</p>
                            </div>
                             <div className="home__section--slide-show__content--container3" style={{height: this.state.windowHeight}}>
                                <p>Carreers.</p>
                                <h3>We're tight.</h3>
                                <p className="home__section--slide-show__content__border-line"></p>
                                <p>America's leading legware brand No Nonesense names Havoc 
                                Agency of Record</p>
                            </div>
                             <div className="home__section--slide-show__content--container4" style={{height: this.state.windowHeight}}>
                                <p>Contact.</p>
                                <h3>What matters now.</h3>
                                <p className="home__section--slide-show__content__border-line"></p>
                                <p>Huge partnered with America's leading banks to create & launch Zelle, 
                                the best way to send & receive money.</p>
                            </div>
                    	</div>
                        <div className={this.state.backgroundImg[1] + " home__section--slide-show--backgorund-img-1"} style={{height: this.state.windowHeight + 'px'}}></div>
                        <div className={this.state.backgroundImg[2] + " home__section--slide-show--backgorund-img-2"} style={{height: this.state.windowHeight + 'px'}}></div>
                        <div className={this.state.backgroundImg[3] + " home__section--slide-show--backgorund-img-3"} style={{height: this.state.windowHeight + 'px'}}></div>
                        <div className={this.state.backgroundImg[4] + " home__section--slide-show--backgorund-img-4"} style={{height: this.state.windowHeight + 'px'}}></div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;

