import React from 'react';
import Video from '../video';
import GridImg from './gridImg';
import BottomBanner from '../bottomBanner';

const Work = (props) => {

        window.scrollTo(0, 0);
        
        const videoInfo = {
            videoPoster: '//images.contentful.com/fiz3jwws2um7/rP56xo1coCAiE84eOweuq/4cfd265c3506ec21203fd961130e46d1/Black__1_.png?w=1600',
            videoSrc: '/video/work_movie.mp4',
            autoPlay: true,
            loopVideo: true,
            muted: true,
            initPlayState: true
        }
    	const backgroundImgGrid = {
            content1: {
                backgroundImg: 'url(/img/work/story-pic1.jpg)',
                header: 'AMC Theaters.'
            },
            content2: {
                backgroundImg: 'url(/img/work/story-pic2.jpg)',
                header: 'Canada Goose.'
            },
            content3: {
                backgroundImg: 'url(/img/work/story-pic3.jpg)',
                header: 'Google.'
            },
            content4: {
                backgroundImg: 'url(/img/work/story-pic4.jpg)',
                header: 'Gucci.'
            },
            content5: {
                backgroundImg: 'url(/img/work/story-pic5.jpg)',
                header: 'Hulu.'
            },
            content6: {
                backgroundImg: 'url(/img/work/story-pic6.jpg)',
                header: 'Kohl\'s.'
            },
            content7: {
                backgroundImg: 'url(/img/work/story-pic7.jpg)',
                header: 'LG.'
            },
            content8: {
                backgroundImg: 'url(/img/work/story-pic8.jpg)',
                header: 'Lenovo.'
            },
            content9: {
                backgroundImg: 'url(/img/work/story-pic9.jpg)',
                header: 'NBC Universal.'
            },
            content10: {
                backgroundImg: 'url(/img/work/story-pic10.jpg)',
                header: 'Nike.'
            },
            content11: {
                backgroundImg: 'url(/img/work/story-pic11.jpg)',
                header: 'Pfizer.'
            },
            content12: {
                backgroundImg: 'url(/img/work/story-pic12.jpg)',
                header: 'Procter & Gamble.'
            },
            content13: {
                backgroundImg: 'url(/img/work/story-pic13.jpg)',
                header: 'Randstad.'
            },
            content14: {
                backgroundImg: 'url(/img/work/story-pic14.jpg)',
                header: 'Telus.'
            },
            content15: {
                backgroundImg: 'url(/img/work/story-pic15.jpg)',
                header: 'Zelle.'
            } 
        }
        const bottomBannerInfo = {
            backgroundImg: 'url(/img/work/work-bottom-banner.jpg)',
            header: 'I like the night, without the dark.',
            paraGraph: 'Though my soul may set in darkness, it will rise in perfect light.'
        }
    	
        return (

            <div className="work">
                <Video pathName={props.location.pathname}  videoInfo={videoInfo} />
                <section className="work__make-something-you-love">
                    <h2>Make something you love.</h2>
                    <div className="work__make-something-you-love__img-links-container">
                        <GridImg backgroundGrid={backgroundImgGrid.content1} />
                        <GridImg backgroundGrid={backgroundImgGrid.content2} />
                        <GridImg backgroundGrid={backgroundImgGrid.content3} />
                        <GridImg backgroundGrid={backgroundImgGrid.content4} />
                        <GridImg backgroundGrid={backgroundImgGrid.content5} />
                        <GridImg backgroundGrid={backgroundImgGrid.content6} />
                        <GridImg backgroundGrid={backgroundImgGrid.content7} />
                        <GridImg backgroundGrid={backgroundImgGrid.content8} />
                        <GridImg backgroundGrid={backgroundImgGrid.content9} />
                        <GridImg backgroundGrid={backgroundImgGrid.content10} />
                        <GridImg backgroundGrid={backgroundImgGrid.content11} />
                        <GridImg backgroundGrid={backgroundImgGrid.content12} />
                        <GridImg backgroundGrid={backgroundImgGrid.content13} />
                        <GridImg backgroundGrid={backgroundImgGrid.content14} />
                        <GridImg backgroundGrid={backgroundImgGrid.content15} />
                    </div>
                </section>
                <section className="work__clients">
                    <div className="work__clients__select-clients">
                        <div></div>
                        <h3>Select clients</h3>
                    </div>
                    <div className="work__clients__imgs">
                        <img src="/img/work/client1.png" alt="picture1"/>
                        <img src="/img/work/client2.png" alt="picture2"/>
                        <img src="/img/work/client3.png" alt="picture3"/>
                        <img src="/img/work/client4.png" alt="picture4"/>
                        <img src="/img/work/client5.png" alt="picture5"/>
                        <img src="/img/work/client6.png" alt="picture6"/>
                        <img src="/img/work/client7.png" alt="picture7"/>
                        <img src="/img/work/client8.png" alt="picture8"/>
                        <img src="/img/work/client9.png" alt="picture9"/>
                        <img src="/img/work/client10.png" alt="picture10"/>
                        <img src="/img/work/client11.png" alt="picture11"/>
                        <img src="/img/work/client12.png" alt="picture12"/>
                        <img src="/img/work/client13.png" alt="picture13"/>
                        <img src="/img/work/client14.png" alt="picture14"/>
                        <img src="/img/work/client15.png" alt="picture15"/>
                        <img src="/img/work/client16.png" alt="picture16"/>
                    </div>
                </section>
                <BottomBanner bottomBannerInfo={bottomBannerInfo}/>
            </div>
        )
    
}

export default Work;
