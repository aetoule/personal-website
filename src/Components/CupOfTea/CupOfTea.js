import React, { Component } from 'react';
import './cupoftea.scss';

import landingImg from '../../media/cot-landing-img.png';
import comparisonChart from '../../media/cot-comparison-chart.png';
import personas from '../../media/cot-personas.png';
import lofiImg1 from '../../media/cot-lofi-img1.png';
import lofiImg2 from '../../media/cot-lofi-img2.png';
import sprint1Img1 from '../../media/cot-sprint1-img1.png';
import sprint1Img2 from '../../media/cot-sprint1-img2.png';
import sprint2Img1 from '../../media/cot-sprint2-img1.png';
import sprint2Img2 from '../../media/cot-sprint2-img2.png';
import finalImg from '../../media/cot-final-img.png';

import ProjectMenuFooter from '../ProjectMenuFooter/ProjectMenuFooter';

class CupOfTea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designProjectNumber: 2

          }
    }
    render() { 
        return ( 
            <div>
                <div className="personal-project-title cot">Cup of Tea</div>
                <img className='landing-img' src={landingImg} alt='cup of tea landing image' />
            <div className="design-page-container">
                
                <div className="personal-section-title-and-container">
                    <div className="personal-section-title cot">Purpose</div>
                    <div className="project-description-intro-container">
                        <div className="personal-description-left-side-container">
                            <div className="personal-section-description-text"><p>As saturated as it is, dating is a huge market because so many people are looking for love and for a significant other. The 21st century solution to this is online dating through mobile applications. Dating should be fun and healthy, but current online dating solutions can be frustrating.</p></div>
                        </div>
                        <div className="personal-description-right-side-container">
                            <h3 className='description-title-bold'>Dates</h3>
                            <p className='description-text'>March 2018-June 2018</p>
                            <h3 className='description-title-bold'>Role</h3>
                            <p className='description-text'>UX Designer, UX Researcher</p>
                            <h3 className='description-title-bold'>Project</h3>
                            <p className='description-text'>Rapid Prototyping Course - Dating Application</p>
                            <h3 className='description-title-bold'>Team</h3>
                            <p className='description-text'>Echo Zhang, Dave Lee, Jacob Burke, Kanon Shibata, Reine Abubakar, Kelsey Luo</p>
                        </div>
                    </div>
                </div>
                <hr className="section-divider-line-upper"></hr>

                <div className="personal-section-title-and-container-under-description">
                    <div className="personal-section-title cot">Research</div>
                    <p>We sent out a survey to gain understanding of what people are looking for out of a dating app. We identified these pain points:</p>
                    <ul>
                        <li className="design-page-bulletted-list"><p>getting ghosted after investing time in talking with someone.</p></li>
                        <li className="design-page-bulletted-list"><p>chatting and interactions are repetitive, flat and without incentive.</p></li>
                        <li className="design-page-bulletted-list"><p>It is hard to initiate a conversation once matched with someone.</p></li>
                        <li className="design-page-bulletted-list"><p>It's easy to get so many matches that you don't know which one to start talking to, so you end up talking to none of them (decision paralysis).</p></li>
                        <li className="design-page-bulletted-list"><p>There is a cultural stigma around dating apps. </p></li>
                    </ul>
                </div>

                <div>
                    <h4 className='section-sub-subtitle cot-spacing'>Competitive Analysis</h4>
                    <img className='full-width-img' src={comparisonChart} alt='dating app market analysis chart'/>

                    <h4 className='section-sub-subtitle cot-spacing'>Personas</h4>
                    <img className='full-width-img' src={personas} alt='personas'/>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title cot">Research</div>
                    <h4 className='section-subtitle'>Ideation</h4>
                    <h5 className='sprint-label'>Low Fidelity</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>During the early stages, we spent a lot of time nailing the <b>user flow</b> of our app first. Some key takeaways here:</p>
                                <ul>
                                    <li className="design-page-bulletted-list"><p>Knowing where and when to have the <b>on-boarding questionnaire</b></p></li>
                                    <li className="design-page-bulletted-list"><p>Putting the sign-up page after the questionnaire and match, and not in front. This further <b>incentivizes</b> users to sign up because they see their match</p></li>
                                    <li className="design-page-bulletted-list"><p>Added an <b>initial tour</b> off user feedback to explain the survey and match</p></li>
                                    </ul>
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={lofiImg1}/>
                            <img className="iphone-siri-img" src={lofiImg2}/>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>Testing (Sprint 1)</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>What we tested:</p> 
                                <p>The Onboarding process for a new user + questionnaire.</p>
                                <p><b>Testing Process:</b></p>
                                <ul>
                                    <li className="design-page-bulletted-list"><p>Classic usability test</p></li>
                                    <li className="design-page-bulletted-list"><p>User walks through the screens on InVision</p></li>
                                    <li className="design-page-bulletted-list"><p>Users fill out the questionnaire and then “matches” with a person</p></li>
                                    <li className="design-page-bulletted-list"><p>Then they are prompted to sign up for the application</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={sprint1Img1}/>
                        </div>
                    </div>
                    <div>
                        <img className="full-width-img" src={sprint1Img2}/>
                    </div>

                    <div className="text-left-side">
                        <div>
                            <p><b>Conclusions:</b></p>
                            <ul>
                                <li className="design-page-bulletted-list"><p>Questions have to be more about the dating styles, preferences</p></li>
                                <li className="design-page-bulletted-list"><p>User walks through the screens on InVision</p></li>
                                <li className="design-page-bulletted-list"><p>Users fill out the questionnaire and then “matches” with a person</p></li>
                                <li className="design-page-bulletted-list"><p>Then they are prompted to sign up for the application</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>Testing the Matching Phase (Sprint 2)</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>What we tested:</p> 
                                <p>Determining what people would want to do with their matches</p>
                                <p><b>Testing Process:</b></p>
                                <ul>
                                    <li className="design-page-bulletted-list"><p>Interview style where we showed them pre-made bitmoji profiles of people and asked them how they would want to interact with their matches</p></li>
                                    <li className="design-page-bulletted-list"><p>Let them go through the test in an order indicative of getting a real match in real time</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={sprint2Img1}/>
                        </div>
                    </div>
                    <div>
                        <img className="full-width-img" src={sprint2Img2}/>
                    </div>

                    <div className="text-left-side">
                        <div>
                            <p><b>Conclusions:</b></p>
                            <ul>
                                <li className="design-page-bulletted-list"><p>People are OK with having just one match a day so long as they’re looking for something more serious </p></li>
                                <li className="design-page-bulletted-list"><p>They want to be able to see how they are determined to be compatible with somebody </p></li>
                                <li className="design-page-bulletted-list"><p>Confirmation of our idea that you can no longer speak to your previous matches </p></li>
                                <li className="design-page-bulletted-list"><p>Users are concerned about bitmojis: do they accurately reflect what a person looks like in real life? What if they try to catfish</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title cot">Testing (Sprint 3) Interaction Phase + Final Product</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>                         
                                <p><b>Testing Process:</b></p>
                                <ul>
                                    <li className="design-page-bulletted-list"><p>Classic usability test + interview style</p></li>
                                    <li className="design-page-bulletted-list"><p>Users were told they got matched (with a character Belle or Andrew), we wanted to see their interactions with how they chatted and how they would try to play games with the match</p></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={finalImg}/>
                        </div> */}
                    </div>
                    <div>
                        <img className="full-width-img" src={finalImg}/>
                    </div>

                    <div className="text-left-side">
                        <div>
                            <p><b>Conclusions:</b></p>
                            <ul>
                                <li className="design-page-bulletted-list"><p>We determined that people would enjoy games and icebreakers as interactions with their matches </p></li>
                                <li className="design-page-bulletted-list"><p>Confirmation on our features that we’ve established so far </p></li>
                                <li className="design-page-bulletted-list"><p>More concerns about the bitmoji -- what if the matches don’t look like the bitmojis? Safety? Privacy? </p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="personal-section-title cot">Reflection</div>
                    <p className="half-sized-text">Designing services like these have come a long way but there are still things we hope to accomplish. We want to conduct another round of testing to test the overall product. We'd like to test where a user finds, matches and interacts with another user. There are more features we hope to implement such as:</p>
                    <ul>
                        <li className="design-page-bulletted-list"><p>Set up a date feature: If you and your match have been interacting for a certain amount of time, we want to help you to meet in person on a real-life date. </p></li>
                        <li className="design-page-bulletted-list"><p>Achievements: We want there to be more incentive for you and your match to interact, as well as see your progress together. </p></li>
                        <li className="design-page-bulletted-list"><p>Second match in a day: If you and your match really do not mesh well together, we want a way for those who un-match to be inserted into a second pool of other un-matchers to get a new match.</p></li>
                    </ul>

                </div>
                <hr className="section-divider-line"></hr>

                <ProjectMenuFooter projectNumber = {this.state.designProjectNumber}/>

            </div>
        </div>
            );
    }
}
 
export default CupOfTea;