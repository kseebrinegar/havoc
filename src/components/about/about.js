import React, { Component } from 'react';
import Video from '../video';
import SectionTitle from '../sectionTitle';
import SectionSentence from '../sectionSentence';
import EmailAndLeadership from '../emailAndLeadership';
import BottomBanner from '../bottomBanner';

class About extends Component {
    render() {

        const videoInfo = {
            videoPoster: '//images.contentful.com/fiz3jwws2um7/rP56xo1coCAiE84eOweuq/4cfd265c3506ec21203fd961130e46d1/Black__1_.png?w=1600',
            videoSrc: '/video/about_movie.mp4',
            autoPlay: true,
            loopVideo: true,
            muted: true,
            initPlayState: true
        }

        const sectionInfoComponent = {
            sectionTitle: 'About us.',
            sectionHeader: 'We share the emotional experience of being human.',
            sectionSentence: `Lorem ipsum dolor sit amet, qui ridens nusquam at, elitr electram concludaturque 
            te sea. Pro erroribus torquatos dissentias ex, vis homero conceptam et, sapientem constituto et mea. 
            No quo sint putant, his assum dicant te. Eirmod verear sadipscing ei ius. Esse solet cu has, in has 
            adhuc consetetur elaboraret. Ea verear legimus eam. Tale adipisci nec ut. Illum pertinacia suscipiantur 
            eam an. An porro equidem instructior vix, ea cum ornatus iudicabit, qui odio invidunt te. Mei intellegam 
            comprehensam ei. No quidam timeam imperdiet vim, sanctus torquatos has ex, cu aeque bonorum tractatos sed. 
            Vocent inciderint quo ne.`
        }

        const sectionTitles = {
            st1: 'How we do it.',
            st2: 'Made with love.',
            st3: 'Our offices.',
            st4: 'Our leadership.'
        }

        const emailAndLeadership1 = [
            {header: 'Seattle', para: 'sea@havoc.com'},
            {header: 'San Deigo', para: 'sd@havoc.com'},
            {header: 'New York', para: 'ny@havoc.com'},
            {header: 'Atlanta', para: 'at@havoc.com'},
            {header: 'Portland', para: 'pt@havoc.com'},
            {header: 'Dallas', para: 'da@havoc.com'},
            {header: 'Los Angeles', para: 'la@havoc.com'},
            {header: 'San Francisco', para: 'sf@havoc.com'},
            {header: 'Boston', para: 'bs@havoc.com'},
            {header: 'Washington', para: 'wa@havoc.com'},
            {header: 'Austin', para: 'as@havoc.com'},
            {header: 'Denver', para: 'dv@havoc.com'},
        ];

        const emailAndLeadership2 = [
            {header: 'Robert Margaretta', para: 'CEO'},
            {header: 'Salih Diamantina', para: 'Business'},
            {header: 'Meryem Seeta', para: 'Talent'},
            {header: 'Simonides Manyara', para: 'Search'},
            {header: 'Jaume Caroline', para: 'Experience Design'},
            {header: 'Lalitha Kaja', para: 'Technology'},
            {header: 'Iskandar Ganymede', para: 'Creative'},
            {header: 'Ardghal Angelika', para: 'Communications'},
            {header: 'Deimos Olufunke', para: 'Delivery'},
            {header: 'Phil Vin', para: 'Operations'},
            {header: 'Raghnailt Shankar', para: 'Growth'},
            {header: 'Veronika Tihomir', para: 'Data Science'}
        ];

        const bottomBannerInfo = {
            backgroundImg: 'url(/img/about/about-bottom-banner.jpg)',
            header: 'A beautiful sunset.',
            paraGraph: 'The sky broke like an egg into full sunset and the water caught fire.'
        };

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
                            <h2>Building A Team We Love.</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
                            ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
                            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                        </div>
                        <div className="about__how-we-do-it__graphic">
                           <img src='/img/about/what-we-do.png' />
                        </div>
                        <div className="about__how-we-do-it__links">
                            <div className="about__how-we-do-it__links__containers">
                                <h4>Strategy.</h4>
                                <ul>
                                    <li>Consulting Customers</li>
                                    <li>Developing</li>
                                    <li>Company Branding</li>
                                    <li>Analytics</li>
                                    <li>Scientific Research</li>
                                </ul>
                            </div>
                            <div className="about__how-we-do-it__links__containers">
                                <h4>Product.</h4>
                                <ul>
                                    <li>Patent</li>
                                    <li>Prototype Developing</li>
                                    <li>Branding</li>
                                    <li>Research</li>
                                    <li>Performance</li>
                                </ul>
                            </div>
                            <div className="about__how-we-do-it__links__containers">
                                <h4>Marketing.</h4>
                                <ul>
                                    <li>Campaigns</li>
                                    <li>Content</li>
                                    <li>Social Media</li>
                                    <li>CRM</li>
                                    <li>Search Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about__made-with-love">
                    <SectionTitle sectionTitle={sectionTitles.st2} />
                    <div className="about__made-with-love__content">
                        <h2>A culture of innovation.</h2>
                        <div className="about__made-with-love__content__containers">
                            <div className="about__made-with-love__content__containers__items">
                                <h4>People.</h4>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Stores.</h4>
                                <p>O cum soluta nobis est eligendi optio cumque nihil impedit quo.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Web.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                             <div className="about__made-with-love__content__containers__items">
                                <h4>Havoc.</h4>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Photography.</h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Online.</h4>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Schools.</h4>
                                <p>O cum soluta nobis est eligendi optio cumque nihil impedit quo.</p>
                            </div>
                            <div className="about__made-with-love__content__containers__items">
                                <h4>Public.</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    <img src="/img/about/made-with-love.png" className="about__made-with-love__img" />
                </section>
                <section className="about__our-offices">
                    <EmailAndLeadership sectionTitle={sectionTitles.st3} emailAndLeadership={emailAndLeadership1} />
                </section>
                <section className="about__our-leadership">
                    <EmailAndLeadership sectionTitle={sectionTitles.st4} emailAndLeadership={emailAndLeadership2} />
                </section>
                <BottomBanner bottomBannerInfo={bottomBannerInfo} />
            </div>
        )
    }
}

export default About;
