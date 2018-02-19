import React, { Component } from 'react';
import uuid from 'uuid';

class Home extends Component {
	constructor() {
		super()
        this.wheelEvent = this.wheelEvent.bind(this);
        this.changeState = this.changeState.bind(this);
        this.keyEvent = this.keyEvent.bind(this);
        this.swipeEvent = this.swipeEvent.bind(this);
		this.state = {
			animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
			animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
            homeScrollDown: 'home',
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
               touchMove: changeState.touchMove !== undefined ? changeState.touchMove : preveState.touchMove
            }
        });
    }
    wheelEvent(e) {
      
        if (e.wheelDelta <=  -120 && this.state.isUserAtTopOfPage) {
            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
                homeScrollDown: 'home position-top-vh-100',
                isUserAtTopOfPage: false,
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });

            return;
        } else if (e.wheelDelta >= 120 && !this.state.isUserAtTopOfPage && this.state.slideShowContentPosition === 0) {
            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                homeScrollDown: 'home position-top-vh-0',
                isUserAtTopOfPage: true,
                counter: 1,
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });
           
            return;
        } else if (e.wheelDelta <= -120 && !this.state.isUserAtTopOfPage) {
            if (this.state.counter >= 4) {
                return;
            }

            this.changeState({
                slideShowContentPosition: this.state.slideShowContentPosition -100,
                counter: this.state.counter + 1,
                backgroundImg: {
                    1: (this.state.counter + 1) === 1 ? 'fade-in' : 'fade-out',
                    2: (this.state.counter + 1) === 2 ? 'fade-in' : 'fade-out',
                    3: (this.state.counter + 1) === 3 ? 'fade-in' : 'fade-out',
                    4: (this.state.counter + 1) === 4 ? 'fade-in' : 'fade-out'
                }
            });

            return;
        } else if (e.wheelDelta >= -120 && !this.state.isUserAtTopOfPage) {
            this.changeState({
                slideShowContentPosition: this.state.slideShowContentPosition + 100,
                counter: this.state.counter - 1,
                backgroundImg: {
                    1: (this.state.counter - 1) === 1 ? 'fade-in' : 'fade-out',
                    2: (this.state.counter - 1) === 2 ? 'fade-in' : 'fade-out',
                    3: (this.state.counter - 1) === 3 ? 'fade-in' : 'fade-out',
                    4: (this.state.counter - 1) === 4 ? 'fade-in' : 'fade-out'
                }
            });
        }
    }
    keyEvent(e) {
    
        if (e.keyCode === 40 && this.state.isUserAtTopOfPage) {
            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
                homeScrollDown: 'home position-top-vh-100',
                isUserAtTopOfPage: false,
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });

            return;
        } else if (e.keyCode === 38 && !this.state.isUserAtTopOfPage && this.state.slideShowContentPosition === 0) {
            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                homeScrollDown: 'home position-top-vh-0',
                isUserAtTopOfPage: true,
                counter: 1,
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });
           
            return;
        } else if (e.keyCode === 40 && !this.state.isUserAtTopOfPage) {
            if (this.state.counter >= 4) {
                return;
            }

            this.changeState({
                slideShowContentPosition: this.state.slideShowContentPosition -100,
                counter: this.state.counter + 1,
                backgroundImg: {
                    1: (this.state.counter + 1) === 1 ? 'fade-in' : 'fade-out',
                    2: (this.state.counter + 1) === 2 ? 'fade-in' : 'fade-out',
                    3: (this.state.counter + 1) === 3 ? 'fade-in' : 'fade-out',
                    4: (this.state.counter + 1) === 4 ? 'fade-in' : 'fade-out'
                }
            });

            return;
        } else if (e.keyCode === 38 && !this.state.isUserAtTopOfPage) {
            this.changeState({
                slideShowContentPosition: this.state.slideShowContentPosition + 100,
                counter: this.state.counter - 1,
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
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });
        } 

        if (e.type === 'touchmove') {

             this.changeState({
                touchMove: Math.round(e.touches[0].clientY),
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });
        } 

        if (e.type === 'touchend') {

            if (this.state.touchMove <= Number(this.state.touchStart - 50) && this.state.isUserAtTopOfPage) {
                this.changeState({
                    animationLine: 'home__section--havoc__animation-container-para--two-before-animation',
                    animationPara: 'home__section--havoc__animation-container-para--one-before-animation',
                    homeScrollDown: 'home position-top-vh-100',
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
            } else if (this.state.touchMove >= Number(this.state.touchStart + 50) && this.state.slideShowContentPosition === 0) {
                this.changeState({
                    animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                    animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                    homeScrollDown: 'home position-top-vh-0',
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
            } else if (this.state.touchMove <= Number(this.state.touchStart - 50) && !this.state.isUserAtTopOfPage) {
                if (this.state.counter >= 4) {
                    return;
                }
                console.log('meow');
                this.changeState({
                    slideShowContentPosition: this.state.slideShowContentPosition -100,
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
            } else if (this.state.touchMove >= Number(this.state.touchStart + 50) && !this.state.isUserAtTopOfPage) {
                console.log('pooo');
                this.changeState({
                    slideShowContentPosition: this.state.slideShowContentPosition + 100,
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

       /* if (e.type === 'touchend' && this.state.touchMove !== null) {

            if (this.state.touchMove >= Number(this.state.touchStart + 50)) {
                
                if (this.state.counter >= 4) {
                    return;
                }
           
                this.changeState({
                    slideShowContentPosition: this.state.slideShowContentPosition -100,
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

                
            } else if (this.state.touchMove <= Number(this.state.touchStart - 50)) {

                this.changeState({
                    slideShowContentPosition: this.state.slideShowContentPosition + 100,
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
            }

            return;
            
        }*/
    }
    componentDidMount() {
        document.addEventListener('touchstart', this.swipeEvent);
        document.addEventListener('touchend', this.swipeEvent);            
        document.addEventListener('touchmove', this.swipeEvent);
        window.addEventListener("keydown", this.keyEvent);
        window.addEventListener('mousewheel', this.wheelEvent); // IE9, Chrome, Safari, Opera
        window.addEventListener('DOMMouseScroll', this.wheelEvent); // Firefox
        window.addEventListener('onmousewheel', this.wheelEvent); // IE 6/7/8
    }
	componentWillMount() {
		setTimeout(() => {

            this.changeState({
                animationLine: 'home__section--havoc__animation-container-para--two-after-animation',
                animationPara: 'home__section--havoc__animation-container-para--one-after-animation',
                backgroundImg: {
                    1: 'fade-in',
                    2: 'fade-out',
                    3: 'fade-out',
                    4: 'fade-out'
                }
            });  
		}, 1000);
	}
    render() {
        return (
            <div className={this.state.homeScrollDown}>
                <section className="home__section--havoc">
                	<h1 className="home__section--havoc__title">Havoc</h1>
                	<div className="home__section--havoc__animation-container">
                		<p className={this.state.animationPara}>Today at Havoc</p>
                		<p className={this.state.animationLine}></p>
                	</div>
                </section>
                <section className="home__section--slide-show">
                	<p className="home__section--slide-show__counter">0{this.state.counter}.</p>
   					<p className="home__section--slide-show__bottom-border"></p>
                	<div className="home__section--slide-show__content" style={{top: this.state.slideShowContentPosition + 'vh'}}>
                        <div className="home__section--slide-show__content--container1">
                    		<p>News.</p>
                    		<h3>We're tight.</h3>
                    		<p className="home__section--slide-show__content__border-line"></p>
                    		<p>America's leading legware brand No Nonesense names Havoc 
                    		Agency of Record</p>
                        </div>
                         <div className="home__section--slide-show__content--container2">
                            <p>News.</p>
                            <h3>We're tight.</h3>
                            <p className="home__section--slide-show__content__border-line"></p>
                            <p>America's leading legware brand No Nonesense names Havoc 
                            Agency of Record</p>
                        </div>
                         <div className="home__section--slide-show__content--container3">
                            <p>News.</p>
                            <h3>We're tight.</h3>
                            <p className="home__section--slide-show__content__border-line"></p>
                            <p>America's leading legware brand No Nonesense names Havoc 
                            Agency of Record</p>
                        </div>
                         <div className="home__section--slide-show__content--container4">
                            <p>News.</p>
                            <h3>We're tight.</h3>
                            <p className="home__section--slide-show__content__border-line"></p>
                            <p>America's leading legware brand No Nonesense names Havoc 
                            Agency of Record</p>
                        </div>
                	</div>
                    <div className={this.state.backgroundImg[1] + " home__section--slide-show--backgorund-img-1"}></div>
                    <div className={this.state.backgroundImg[2] + " home__section--slide-show--backgorund-img-2"}></div>
                    <div className={this.state.backgroundImg[3] + " home__section--slide-show--backgorund-img-3"}></div>
                    <div className={this.state.backgroundImg[4] + " home__section--slide-show--backgorund-img-4"}></div>
                </section>
            </div>
        )
    }
}

export default Home;

