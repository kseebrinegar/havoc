import React, { Component } from 'react';
import Video from '../video';
import SectionTitle from '../sectionTitle';
import SectionSentence from '../sectionSentence';

class About extends Component {
    render() {

        const videoInfo = {
            videoPoster: '//images.contentful.com/fiz3jwws2um7/rP56xo1coCAiE84eOweuq/4cfd265c3506ec21203fd961130e46d1/Black__1_.png?w=1600',
            videoSrc: '/video/work_movie.mp4',
            autoPlay: true,
            loopVideo: true,
            muted: true,
            initPlayState: true
        }

        const sectionInfoComponent = {
            sectionTitle: 'About us.',
            sectionHeader: 'We share the emotional experience of being human.',
            sectionSentence: ` is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.`
        }

        const sectionTitles = {
            st1: 'How we do it.',
            st2: 'Made with love.',
            st3: 'Our offices.',
            st4: 'Our leadership.'
        }

        return (
            <div className="about">
                <section className="about__top-banner-container">
                	<div className="about__top-banner-container__background-img">
                        <h1>Born in Seattle.</h1>
                	</div>
                </section>
                <SectionSentence sectionInfo={sectionInfoComponent} />
                <Video pathName={this.props.location.pathname}  videoInfo={videoInfo} />
                <section className="about__how-we-do-it">
                    <SectionTitle sectionTitle={sectionTitles.st1} />
                    <div className="about__how-we-do-it__content">
                        <div className="about__how-we-do-it__sentences">
                            <h2>Collaboration for brand experience.</h2>
                            <p>It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout. The point 
                            of using Lorem Ipsum is that it has a more-or-less normal distribution 
                            of letters, as opposed to using 'Content here, content here', making 
                            it look like readable English. Many desktop publishing packages and 
                            web page editors now use Lorem Ipsum as their default model text, and 
                            a search for 'lorem ipsum' will uncover many web sites still in their 
                            infancy. Various versions have evolved over the years, sometimes by accident, 
                            sometimes on purpose.</p>
                        </div>
                        <div className="about__how-we-do-it__graphic">
                           <img src='/img/about/what-we-do.png' />
                        </div>
                        <div className="about__how-we-do-it__links">
                            <div className="about__how-we-do-it__links__containers">
                                <h4>Strategy.</h4>
                                <ul>
                                    <li>Buisness Consulting</li>
                                    <li>Innovation</li>
                                    <li>Branding</li>
                                    <li>Data Science</li>
                                    <li>Research</li>
                                </ul>
                            </div>
                            <div className="about__how-we-do-it__links__containers">
                                <h4>Product.</h4>
                                <ul>
                                    <li>Buisness Consulting</li>
                                    <li>Innovation</li>
                                    <li>Branding</li>
                                    <li>Data Science</li>
                                    <li>Research</li>
                                </ul>
                            </div>
                            <div className="about__how-we-do-it__links__containers">
                                <h4>Marketing.</h4>
                                <ul>
                                    <li>Buisness Consulting</li>
                                    <li>Innovation</li>
                                    <li>Branding</li>
                                    <li>Data Science</li>
                                    <li>Research</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about__made-with-love">
                    <SectionTitle sectionTitle={sectionTitles.st2} />
                    <img src="/img/about/made-with-love.png" className="about__made-with-love__img" />
                    <div className="about__made-with-love__content">
                        <h2>A culture of innovation.</h2>
                        <div className="about__made-with-love__content__containers">
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                             <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Our publication for people who care about design and technology.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;
